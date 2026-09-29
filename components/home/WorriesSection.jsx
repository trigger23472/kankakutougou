import { Armchair, BicepsFlexed, Footprints, Hand, PersonStanding, Volume2 } from 'lucide-react';
import MoreLink from '../MoreLink';

const worries = [
  { color: 'blue', Icon: Volume2, label: '音が苦手' },
  { color: 'green', Icon: Footprints, label: '落ち着きにくい' },
  { color: 'yellow', Icon: PersonStanding, label: 'よく転ぶ', iconClass: 'is-tilted' },
  { color: 'pink', Icon: Hand, label: '触られるのが苦手' },
  { color: 'purple', Icon: Armchair, label: '姿勢が崩れやすい' },
  { color: 'teal', Icon: BicepsFlexed, label: '力加減が難しい' },
];

function WorryFace() {
  return (
    <svg className="worry-face" viewBox="0 0 64 64" fill="none" stroke="#2b4a6b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 30c0-12 8-20 18-20s18 8 18 20" />
      <path d="M14 30c2-8 10-12 18-12 6 0 12 3 16 8" />
      <ellipse cx="32" cy="34" rx="15" ry="16" fill="#fff" />
      <path d="M24 32h4M36 32h4" /><path d="M27 43c3-2 7-2 10 0" />
      <path d="M14 62c2-8 9-12 18-12s16 4 18 12" />
      <path d="M54 14l4-4M56 22h5M53 7l1-5" />
    </svg>
  );
}

export default function WorriesSection() {
  return (
    <section className="section section--tint" id="worries">
      <div className="container">
        <div className="sec-head">
          <WorryFace />
          <div>
            <h2 className="sec-title">こんなお悩みありませんか？</h2>
            <p className="sec-lead sec-lead--tight">子どものこんな様子で気になることはありませんか？<br />一つでも当てはまる場合は、感覚統合が関係しているかもしれません。</p>
          </div>
          <MoreLink>お悩みから探す</MoreLink>
        </div>
        <div className="worries">
          {worries.map(({ color, Icon, label, iconClass }) => (
            <a key={label} href="#" className="worry">
              <div className={`worry__icon worry__icon--${color}`}><Icon className={iconClass} /></div>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
