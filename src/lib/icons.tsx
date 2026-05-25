// Conjunto de ícones SVG inline usados na landing.
type IconProps = { size?: number };

export const I = {
  whats: ({ size = 18 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 21l1.6-4.2A8.5 8.5 0 1 1 7.8 20.4L3 21z" strokeLinejoin="round" />
      <path d="M8.5 9.4c.3 1.6 1.4 3 2.8 4 .9.6 1.7 1 2.6 1.1.4 0 .8-.1 1.1-.4l.7-.8c.2-.2.5-.3.8-.2l1.3.6c.3.1.5.4.5.7-.1 1.2-1.2 2.1-2.4 2.1-3.5 0-7-3.5-7-7 0-1.2.9-2.3 2.1-2.4.3 0 .6.2.7.5l.6 1.3c.1.3 0 .6-.2.8l-.8.7c-.3.3-.4.7-.4 1.1l.6-.5z" />
    </svg>
  ),
  arr: ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrUR: ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  down: ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 5v14M5 13l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pin: ({ size = 18 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  clock: ({ size = 18 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  ),
  insta: ({ size = 18 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  plus: ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  ),
  star: ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.6 7.1.7-5.4 4.9 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.3l7.1-.7L12 2z" />
    </svg>
  ),
  check: ({ size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  spark: ({ size = 18 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 3v3M12 18v3M21 12h-3M6 12H3M18 6l-2 2M8 16l-2 2M18 18l-2-2M8 8L6 6M12 8a4 4 0 0 0 0 8 4 4 0 0 0 0-8z"
        strokeLinecap="round"
      />
    </svg>
  ),
};
