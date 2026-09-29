import { ChevronRight } from 'lucide-react';

// 左向きの魚（#fishShape を反転）。stripes は胴体の縞模様
const fishes = [
  { x: 250, y: 38, scale: 0.9, color: '#3d6fd8', eye: '#fff' },
  { x: 320, y: 62, scale: 1, color: '#f7d33a', eye: '#222', stripes: [{ x: -6, y: -13, width: 5, height: 26, fill: '#2b4a6b', opacity: 0.35 }] },
  { x: 420, y: 68, scale: 1.2, color: '#f57c1f', eye: '#222', eyeX: -13, stripes: [{ x: -4, y: -13, width: 5, height: 26, fill: '#fff' }, { x: 10, y: -11, width: 4, height: 22, fill: '#fff' }] },
  { x: 500, y: 48, scale: 0.8, color: '#7fd05a', eye: '#222' },
  { x: 545, y: 80, scale: 0.95, color: '#f78fb0', eye: '#222' },
  { x: 390, y: 110, scale: 0.8, color: '#2d7fd0', eye: '#fff' },
  { x: 200, y: 90, scale: 0.7, color: '#5a8fe0', eye: '#fff' },
];

function Sea() {
  return (
    <svg className="sea" viewBox="0 0 600 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4fb3ea" /><stop offset=".7" stopColor="#8ed4f2" /><stop offset="1" stopColor="#bfe8f5" />
        </linearGradient>
        <g id="fishShape"><ellipse cx="0" cy="0" rx="22" ry="13" /><path d="M18 0l16-12v24z" /></g>
      </defs>
      <rect width="600" height="150" fill="url(#water)" />
      <g fill="#fff" opacity=".35"><circle cx="220" cy="30" r="4" /><circle cx="228" cy="18" r="2.5" /><circle cx="470" cy="40" r="3" /><circle cx="360" cy="22" r="2" /></g>
      <path d="M0 138 Q150 122 300 136 T600 132 V150 H0z" fill="#f2d9a2" />
      <g strokeWidth="7" strokeLinecap="round" fill="none">
        <path d="M40 150 Q30 120 45 100 T38 60" stroke="#4caf6a" />
        <path d="M60 150 Q70 125 58 105" stroke="#6cc47e" />
        <path d="M560 150 Q548 118 562 95 T556 55" stroke="#4caf6a" />
        <path d="M530 150 Q538 128 528 110" stroke="#6cc47e" />
        <path d="M270 150 Q262 130 272 114" stroke="#5bbb72" />
        <path d="M440 150 Q448 128 438 108" stroke="#5bbb72" />
      </g>
      <g strokeWidth="5" fill="none" strokeLinecap="round">
        <path d="M490 150c0-18-6-26-2-34M490 150c4-14 12-20 10-30M490 150c-6-10-14-14-14-24" stroke="#f47a9a" />
        <path d="M330 150c0-14-4-22 0-30M330 150c4-12 10-16 8-26" stroke="#f39a3d" />
      </g>
      {/* .fish:nth-of-type(2n/3n) で泳ぐタイミングをずらしている */}
      {fishes.map(({ x, y, scale, color, eye, eyeX = -12, stripes = [] }, i) => (
        <g key={i} className="fish" transform={`translate(${x} ${y}) scale(${-scale} ${scale})`}>
          <use href="#fishShape" fill={color} />
          {stripes.map((stripe, j) => <rect key={j} {...stripe} />)}
          <circle cx={eyeX} cy="-3" r="2.5" fill={eye} />
        </g>
      ))}
    </svg>
  );
}

export default function FishBanner() {
  return (
    <a href="#" className="fish-banner" aria-label="動く魚をタップ！ 今すぐ遊ぶ">
      <Sea />
      <div className="bubble-say"><div>動く魚を<b>タップ！</b></div></div>
      <span className="play-now">今すぐ遊ぶ<ChevronRight /></span>
    </a>
  );
}
