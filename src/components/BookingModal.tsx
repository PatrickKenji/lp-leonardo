import React from "react";
import { wapp } from "../lib/whatsapp";

// BookingModal — agenda popup com calendário
const BookingModal = () => {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [selDate, setSelDate] = React.useState<Date | null>(null);
  const [selTime, setSelTime] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [anim, setAnim] = React.useState("in");
  const [vm, setVm] = React.useState(() => {
    const d = new Date(); return { y: d.getFullYear(), m: d.getMonth() };
  });

  const MONTHS = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  const WDAYS  = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
  const SLOTS  = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];

  // Register global opener + click interceptor
  React.useEffect(() => {
    window.openBookingModal = () => {
      setStep(1); setSelDate(null); setSelTime(null); setName(""); setAnim("in");
      setOpen(true);
    };
    const handler = (e: MouseEvent) => {
      const link = (e.target as Element).closest("a[href*='wa.me']") as HTMLAnchorElement | null;
      if (link && !link.dataset.direct) {
        e.preventDefault(); e.stopPropagation();
        window.openBookingModal!();
      }
    };
    document.addEventListener("click", handler, true);
    return () => { document.removeEventListener("click", handler, true); delete window.openBookingModal; };
  }, []);

  const goStep = (n: number) => { setAnim("out"); setTimeout(() => { setStep(n); setAnim("in"); }, 180); };

  const close = () => {
    setAnim("close");
    setTimeout(() => setOpen(false), 280);
  };

  if (!open) return null;

  const today = new Date(); today.setHours(0,0,0,0);
  const { y, m } = vm;
  const firstDow = new Date(y, m, 1).getDay();
  const lastDay  = new Date(y, m+1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= lastDay; d++) cells.push(d);

  const fmtDate = (d: Date | null) => {
    if (!d) return "";
    const names = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"];
    return `${names[d.getDay()]}, ${d.getDate()} de ${MONTHS[d.getMonth()].toLowerCase()}`;
  };

  const prevMonthDisabled = y === today.getFullYear() && m === today.getMonth();

  const sendWpp = () => {
    const greeting = name.trim() ? `Olá, Leonardo! Me chamo ${name.trim()}. ` : "Olá, Leonardo! ";
    const msg = `${greeting}Gostaria de agendar uma sessão para ${fmtDate(selDate)} às ${selTime}. Podemos confirmar?`;
    const link = document.createElement("a");
    link.href = `https://wa.me/5544988362701?text=${encodeURIComponent(msg)}`;
    link.target = "_blank"; link.rel = "noopener"; link.dataset.direct = "1";
    link.click();
    close();
  };

  const CalIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.5" width="13" height="12" rx="2" stroke="var(--accent)" strokeWidth="1.3"/>
      <path d="M5 1v3M11 1v3M1.5 6.5h13" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
  const ClockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.25" stroke="var(--accent)" strokeWidth="1.3"/>
      <path d="M8 4.5V8.25l2.5 1.5" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const PinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.485-2.015-4.5-4.5-4.5z" stroke="var(--accent)" strokeWidth="1.3"/>
      <circle cx="8" cy="6" r="1.5" stroke="var(--accent)" strokeWidth="1.3"/>
    </svg>
  );
  const WaIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <div className={`bm-overlay bm-overlay--${anim}`} onClick={e => e.target === e.currentTarget && close()}>
      <div className={`bm-sheet bm-sheet--${anim}`}>

        {/* Handle bar (mobile) */}
        <div className="bm-handle"/>

        {/* Header */}
        <div className="bm-header">
          <div>
            <div className="mono bm-eyebrow">Agendamento de sessão</div>
            <div className="bm-title">
              {step === 1 && "Escolha o dia"}
              {step === 2 && "Escolha o horário"}
              {step === 3 && "Confirmar agendamento"}
            </div>
          </div>
          <button className="bm-close-btn" onClick={close} aria-label="Fechar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.5 3.5l11 11M14.5 3.5l-11 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Progress */}
        <div className="bm-progress">
          {["Data","Horário","Confirmar"].map((label, i) => (
            <React.Fragment key={label}>
              <div className={`bm-prog-step ${step > i+1 ? "done" : step === i+1 ? "active" : ""}`}>
                <div className="bm-prog-dot">
                  {step > i+1
                    ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5 8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : <span>{i+1}</span>
                  }
                </div>
                <span className="bm-prog-label">{label}</span>
              </div>
              {i < 2 && <div className={`bm-prog-line ${step > i+1 ? "done" : ""}`}/>}
            </React.Fragment>
          ))}
        </div>

        {/* Body */}
        <div className={`bm-body bm-body--${anim}`}>

          {/* STEP 1: Calendar */}
          {step === 1 && (
            <div>
              <div className="bm-cal-nav">
                <button className="bm-nav-btn" onClick={() => setVm(v => { const d = new Date(v.y, v.m-1); return { y: d.getFullYear(), m: d.getMonth() }; })} disabled={prevMonthDisabled} aria-label="Mês anterior">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <span className="bm-month-label">{MONTHS[m]} {y}</span>
                <button className="bm-nav-btn" onClick={() => setVm(v => { const d = new Date(v.y, v.m+1); return { y: d.getFullYear(), m: d.getMonth() }; })} aria-label="Próximo mês">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>

              <div className="bm-cal-grid">
                {WDAYS.map(d => <div key={d} className="bm-dow-label">{d}</div>)}
                {cells.map((d, i) => {
                  if (!d) return <div key={`x${i}`}/>;
                  const date = new Date(y, m, d);
                  const isPast = date < today;
                  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                  const disabled = isPast || isWeekend;
                  const isSel = selDate && date.getTime() === selDate.getTime();
                  const isToday = date.getTime() === today.getTime();
                  return (
                    <button key={d}
                      className={`bm-day ${disabled ? "bm-day--off" : ""} ${isSel ? "bm-day--sel" : ""} ${isToday && !isSel ? "bm-day--today" : ""}`}
                      disabled={disabled}
                      onClick={() => { setSelDate(date); goStep(2); }}>
                      {d}
                    </button>
                  );
                })}
              </div>
              <div className="bm-cal-note">Seg – Sex  ·  10h às 22h</div>
              <div className="bm-divider">
                <span>ou</span>
              </div>
              <a
                href={wapp("Olá, Leonardo! Vim pelo site e quero agendar uma sessão.")}
                target="_blank" rel="noopener"
                data-direct="1"
                className="btn btn-primary btn-lg bm-direct-btn"
                onClick={close}
              >
                <WaIcon/>
                Falar direto no WhatsApp
              </a>
            </div>
          )}

          {/* STEP 2: Time slots */}
          {step === 2 && (
            <div>
              <div className="bm-back-row">
                <button className="bm-back-btn" onClick={() => goStep(1)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div className="bm-back-info">
                  <div className="mono bm-eyebrow" style={{marginBottom:2}}>Dia selecionado</div>
                  <div style={{fontWeight:600,fontSize:14}}>{fmtDate(selDate)}</div>
                </div>
              </div>
              <div className="bm-slots-grid">
                {SLOTS.map(t => (
                  <button key={t}
                    className={`bm-slot ${selTime === t ? "bm-slot--sel" : ""}`}
                    onClick={() => { setSelTime(t); goStep(3); }}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="bm-cal-note">Sessão de 50 minutos</div>
            </div>
          )}

          {/* STEP 3: Confirm */}
          {step === 3 && (
            <div>
              <div className="bm-back-row" style={{marginBottom:20}}>
                <button className="bm-back-btn" onClick={() => goStep(2)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div className="bm-back-info">
                  <div className="mono bm-eyebrow" style={{marginBottom:2}}>Resumo</div>
                  <div style={{fontWeight:600,fontSize:14}}>{fmtDate(selDate)} · {selTime}</div>
                </div>
              </div>

              {/* Summary */}
              <div className="bm-summary">
                <div className="bm-summary-row"><CalIcon/> <span>{fmtDate(selDate)}</span></div>
                <div className="bm-summary-sep"/>
                <div className="bm-summary-row"><ClockIcon/> <span>{selTime} · sessão de 50 min</span></div>
                <div className="bm-summary-sep"/>
                <div className="bm-summary-row"><PinIcon/> <span>Av. Tuiuti, 1868 · Vila Morangueira</span></div>
              </div>

              {/* Name input */}
              <div className="bm-field">
                <label className="mono bm-eyebrow" style={{display:"block",marginBottom:8}}>
                  Seu nome <span style={{opacity:0.45}}>(opcional)</span>
                </label>
                <input
                  className="bm-input"
                  type="text"
                  placeholder="Como posso te chamar?"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendWpp()}
                  autoFocus
                />
              </div>

              <button className="btn btn-primary btn-lg bm-send-btn" onClick={sendWpp}>
                <WaIcon/>
                Abrir no WhatsApp
              </button>
            </div>
          )}

        </div>{/* /bm-body */}
      </div>{/* /bm-sheet */}

      <style>{`
        /* === OVERLAY === */
        .bm-overlay {
          position: fixed; inset: 0; z-index: 99999;
          background: rgba(8, 10, 18, 0.6);
          backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
          display: flex; align-items: flex-end; justify-content: center;
        }
        .bm-overlay--in  { animation: bmFadeIn 0.22s ease both; }
        .bm-overlay--out { animation: bmFadeIn 0.18s ease reverse both; }
        .bm-overlay--close { animation: bmFadeIn 0.26s ease reverse both; }
        @keyframes bmFadeIn { from { opacity:0 } to { opacity:1 } }

        /* === SHEET === */
        .bm-sheet {
          background: var(--bg);
          border-radius: 28px 28px 0 0;
          width: 100%; max-width: 480px;
          max-height: 94svh; overflow-y: auto;
          padding-bottom: max(env(safe-area-inset-bottom), 24px);
        }
        .bm-sheet--in    { animation: bmSlideUp 0.30s cubic-bezier(0.22, 0.8, 0.36, 1) both; }
        .bm-sheet--out   { animation: bmSlideUp 0.18s ease-in reverse both; }
        .bm-sheet--close { animation: bmSlideUp 0.25s ease-in reverse both; }
        @keyframes bmSlideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }

        @media(min-width: 600px) {
          .bm-overlay { align-items: center; padding: 24px; }
          .bm-sheet {
            border-radius: 24px;
            max-height: 88svh;
            box-shadow: 0 32px 80px rgba(0,0,0,0.35);
          }
          .bm-sheet--in  { animation: bmScaleIn 0.28s cubic-bezier(0.22, 0.8, 0.36, 1) both; }
          .bm-sheet--close { animation: bmScaleIn 0.22s ease-in reverse both; }
          @keyframes bmScaleIn { from { opacity:0; transform:scale(0.94) translateY(8px) } to { opacity:1; transform:scale(1) translateY(0) } }
        }

        /* === HANDLE === */
        .bm-handle {
          width: 36px; height: 4px; border-radius: 2px;
          background: var(--line); margin: 12px auto 0;
        }
        @media(min-width: 600px) { .bm-handle { display: none; } }

        /* === HEADER === */
        .bm-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px;
          padding: 20px 24px 0;
        }
        .bm-eyebrow {
          font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ink-4); margin-bottom: 4px;
        }
        .bm-title { font-size: 20px; font-weight: 700; color: var(--ink); line-height: 1.2; }
        .bm-close-btn {
          flex-shrink: 0; width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid var(--line); background: var(--bg-2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: var(--ink-3); transition: all 0.15s;
          margin-top: 2px;
        }
        .bm-close-btn:hover { background: var(--bg-3); color: var(--ink); }

        /* === PROGRESS === */
        .bm-progress {
          display: flex; align-items: center;
          padding: 20px 24px 0; gap: 0;
        }
        .bm-prog-step {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: var(--ink-4); white-space: nowrap;
        }
        .bm-prog-step.active { color: var(--ink); }
        .bm-prog-step.done   { color: var(--accent); }
        .bm-prog-dot {
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 600;
          background: var(--bg-2); border: 1.5px solid var(--line);
          color: var(--ink-4); transition: all 0.25s;
        }
        .bm-prog-step.active .bm-prog-dot { background: var(--accent); border-color: var(--accent); color: #fff; }
        .bm-prog-step.done   .bm-prog-dot { background: var(--accent); border-color: var(--accent); color: #fff; }
        .bm-prog-line { flex: 1; height: 1px; background: var(--line); margin: 0 8px; transition: background 0.3s; }
        .bm-prog-line.done   { background: var(--accent); opacity: 0.4; }
        .bm-prog-label { display: none; }
        @media(min-width: 380px) { .bm-prog-label { display: inline; } }

        /* === BODY === */
        .bm-body { padding: 20px 24px 8px; }
        .bm-body--in  { animation: bmBodyIn 0.22s ease both; }
        .bm-body--out { animation: bmBodyIn 0.15s ease reverse both; }
        @keyframes bmBodyIn { from { opacity:0; transform:translateX(12px) } to { opacity:1; transform:translateX(0) } }

        /* === CALENDAR NAV === */
        .bm-cal-nav {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px;
        }
        .bm-month-label { font-size: 15px; font-weight: 600; }
        .bm-nav-btn {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid var(--line); background: var(--bg-2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: var(--ink-3); transition: all 0.15s;
        }
        .bm-nav-btn:hover:not(:disabled) { background: var(--bg-3); color: var(--ink); }
        .bm-nav-btn:disabled { opacity: 0.25; cursor: default; }

        /* === CALENDAR GRID === */
        .bm-cal-grid {
          display: grid; grid-template-columns: repeat(7, 1fr);
          gap: 2px;
        }
        .bm-dow-label {
          text-align: center; padding: 6px 0; font-size: 11px;
          font-family: var(--mono); letter-spacing: 0.04em;
          color: var(--ink-4);
        }
        .bm-day {
          aspect-ratio: 1; border-radius: 10px; border: none;
          background: transparent; cursor: pointer;
          font-size: 14px; font-weight: 500; color: var(--ink-2);
          transition: all 0.12s;
          display: flex; align-items: center; justify-content: center;
        }
        .bm-day:hover:not(.bm-day--off) { background: var(--bg-2); color: var(--ink); }
        .bm-day--today { color: var(--accent); font-weight: 700; }
        .bm-day--today::after {
          content:""; position:absolute; bottom:3px; left:50%; transform:translateX(-50%);
          width:4px; height:4px; border-radius:50%; background:var(--accent);
        }
        .bm-day { position: relative; }
        .bm-day--sel { background: var(--accent) !important; color: #fff !important; font-weight: 700; }
        .bm-day--off { color: var(--ink-4); opacity: 0.3; cursor: default; }
        .bm-cal-note {
          text-align: center; margin-top: 12px;
          font-family: var(--mono); font-size: 10px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--ink-4);
        }

        /* === SLOTS === */
        .bm-slots-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;
          margin-bottom: 4px;
        }
        .bm-slot {
          padding: 13px 6px; border-radius: 12px;
          border: 1.5px solid var(--line); background: var(--bg-2);
          font-size: 14px; font-weight: 500; color: var(--ink);
          cursor: pointer; text-align: center;
          transition: all 0.15s;
        }
        .bm-slot:hover { border-color: var(--accent); color: var(--accent); }
        .bm-slot--sel  { background: var(--accent); border-color: var(--accent); color: #fff; }

        /* === BACK ROW === */
        .bm-back-row { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .bm-back-btn {
          width: 32px; height: 32px; flex-shrink: 0; border-radius: 50%;
          border: 1px solid var(--line); background: var(--bg-2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: var(--ink-3); transition: all 0.15s;
        }
        .bm-back-btn:hover { background: var(--bg-3); color: var(--ink); }
        .bm-back-info { min-width: 0; }

        /* === SUMMARY === */
        .bm-summary {
          background: var(--bg-2); border: 1px solid var(--line);
          border-radius: 16px; padding: 4px 0; margin-bottom: 20px;
        }
        .bm-summary-row {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 18px; font-size: 14px; color: var(--ink);
        }
        .bm-summary-sep { height: 1px; background: var(--line); margin: 0 18px; }

        /* === FIELD === */
        .bm-field { margin-bottom: 16px; }
        .bm-input {
          width: 100%; box-sizing: border-box;
          padding: 13px 16px; border-radius: 12px;
          border: 1.5px solid var(--line); background: var(--bg);
          font-size: 15px; color: var(--ink); outline: none;
          font-family: var(--sans); transition: border-color 0.15s;
        }
        .bm-input:focus { border-color: var(--accent); }
        .bm-input::placeholder { color: var(--ink-4); }

        /* === PREVIEW === */
        .bm-preview {
          border-radius: 12px; padding: 14px 16px;
          background: var(--bg-2); border: 1px solid var(--line);
          border-left: 3px solid var(--accent);
          margin-bottom: 20px;
        }
        .bm-preview-text { font-size: 13px; line-height: 1.65; color: var(--ink-2); }

        /* === SEND BTN === */
        .bm-send-btn { width: 100%; justify-content: center; gap: 10px; }

        /* === DIVIDER === */
        .bm-divider {
          display: flex; align-items: center; gap: 12px;
          margin: 20px 0 16px; color: var(--ink-4);
          font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .bm-divider::before, .bm-divider::after {
          content: ""; flex: 1; height: 1px; background: var(--line);
        }

        /* === DIRECT BTN === */
        .bm-direct-btn {
          width: 100%; justify-content: center; gap: 10px;
          font-size: 15px !important;
        }
      `}</style>
    </div>
  );
};

export default BookingModal;
