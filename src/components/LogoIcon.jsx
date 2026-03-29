export default function LogoIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="6" fill="none" />
      {/* Inner white ring around red circle */}
      <circle cx="50" cy="50" r="28" stroke="white" strokeWidth="4" fill="none" />
      {/* Black arc segments (the thick outer band between rings) */}
      {/* Top-left arc */}
      <path d="M 50 4 A 46 46 0 0 0 4 50" stroke="white" strokeWidth="14" fill="none" strokeLinecap="butt" />
      <path d="M 50 4 A 46 46 0 0 1 96 50" stroke="white" strokeWidth="14" fill="none" strokeLinecap="butt" />
      <path d="M 4 50 A 46 46 0 0 0 50 96" stroke="white" strokeWidth="14" fill="none" strokeLinecap="butt" />
      <path d="M 96 50 A 46 46 0 0 1 50 96" stroke="white" strokeWidth="14" fill="none" strokeLinecap="butt" />
      {/* Red center circle */}
      <circle cx="50" cy="50" r="22" fill="#E53E1A" />
      {/* Crosshair lines - horizontal */}
      <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="5" />
      {/* Crosshair lines - vertical */}
      <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="5" />
    </svg>
  );
}