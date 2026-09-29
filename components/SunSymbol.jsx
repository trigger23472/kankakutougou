// 太陽ロゴ（再利用用シンボル）。<Logo> から <use href="#sun"> で参照する
export default function SunSymbol() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="sun" viewBox="0 0 64 64">
          <g stroke="#f7c325" strokeWidth="4" strokeLinecap="round">
            <line x1="32" y1="3" x2="32" y2="11" /><line x1="32" y1="53" x2="32" y2="61" />
            <line x1="3" y1="32" x2="11" y2="32" /><line x1="53" y1="32" x2="61" y2="32" />
            <line x1="11.5" y1="11.5" x2="17" y2="17" /><line x1="47" y1="47" x2="52.5" y2="52.5" />
            <line x1="11.5" y1="52.5" x2="17" y2="47" /><line x1="47" y1="17" x2="52.5" y2="11.5" />
          </g>
          <circle cx="32" cy="32" r="16" fill="#fcd34d" />
          <path d="M22 38c4-5 16-5 20 0-3 4-17 4-20 0z" fill="#8fd0e8" opacity=".9" />
          <path d="M20 40c6 2 18 2 24 0" stroke="#5cc6c8" strokeWidth="2" fill="none" strokeLinecap="round" />
        </symbol>
      </defs>
    </svg>
  );
}
