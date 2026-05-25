import React from "react";

// Posição vertical do scroll (com throttle via requestAnimationFrame).
export const useScrollY = () => {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const f = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => {
      window.removeEventListener("scroll", f);
      cancelAnimationFrame(raf);
    };
  }, []);
  return y;
};

// Posição do mouse normalizada (0..1) na viewport.
export const useMouse = () => {
  const [m, setM] = React.useState({ x: 0.5, y: 0.5 });
  React.useEffect(() => {
    const f = (e: MouseEvent) =>
      setM({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", f);
    return () => window.removeEventListener("mousemove", f);
  }, []);
  return m;
};

// Revela elementos .reveal ao entrarem na viewport.
export const useReveal = () => {
  React.useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll(".reveal:not(.in)");
      if (!els.length) return;
      // Above-the-fold (top viewport) → reveal já no mount
      const wh = window.innerHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < wh * 0.9) el.classList.add("in");
      });
      // Resto: IntersectionObserver
      const io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
      // Fallback de segurança: tudo visível em 1.5s
      setTimeout(() => {
        document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
      }, 1500);
    };
    // requestAnimationFrame pra garantir que o DOM esteja renderizado
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);
};

// Counter animation
export const useCounter = (end: number, duration = 2000, start = 0) => {
  const [v, setV] = React.useState(start);
  const ref = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            const t0 = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - t0) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setV(Math.round(start + (end - start) * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);
  return [v, ref] as const;
};
