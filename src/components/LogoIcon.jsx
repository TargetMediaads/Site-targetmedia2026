export default function LogoIcon({ size = 36 }) {
  const cx = 50, cy = 50;
  // Radii
  const outerR = 47, innerR = 33, centerR = 20;
  const lineW = 5;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* White outer circle border */}
      <circle cx={cx} cy={cy} r={outerR} fill="white" />
      {/* Black thick ring */}
      <circle cx={cx} cy={cy} r={outerR - 1} fill="black" />
      {/* White inner ring gap */}
      <circle cx={cx} cy={cy} r={innerR + 2} fill="white" />
      {/* Black inner ring */}
      <circle cx={cx} cy={cy} r={innerR} fill="black" />
      {/* White circle around center */}
      <circle cx={cx} cy={cy} r={centerR + 2} fill="white" />
      {/* Red center circle */}
      <circle cx={cx} cy={cy} r={centerR} fill="#E01A10" />
      {/* White crosshair lines */}
      <line x1="0" y1={cy} x2="100" y2={cy} stroke="white" strokeWidth={lineW} />
      <line x1={cx} y1="0" x2={cx} y2="100" stroke="white" strokeWidth={lineW} />
    </svg>
  );
}