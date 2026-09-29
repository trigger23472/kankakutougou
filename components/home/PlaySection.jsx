import { ChevronRight, Footprints, Gamepad2, Hand, House, Smile } from 'lucide-react';
import FishBanner from './FishBanner';

const plays = [
  { color: 'blue', Icon: House, label: 'おうちでできる感覚あそび' },
  { color: 'blue', Icon: Footprints, label: '運動あそび' },
  { color: 'green', Icon: Hand, label: '手先のあそび' },
  { color: 'teal', Icon: Smile, label: '親子で楽しむあそび' },
];

export default function PlaySection() {
  return (
    <section className="section section--tint section--play">
      <div className="container">
        <div className="sec-head">
          <Gamepad2 className="sec-icon sec-icon--lg" />
          <div>
            <h2 className="sec-title sec-title--sm">遊んでみよう！</h2>
            <p className="sec-lead sec-lead--tight">楽しく遊びながら、感覚を育てることができます。<br />まずは「動く魚をタップ！」で遊んでみましょう。</p>
          </div>
        </div>
        <div className="play-grid">
          <FishBanner />
          <ul className="play-list">
            {plays.map(({ color, Icon, label }) => (
              <li key={label}><a href="#"><span className={`ic ic--${color}`}><Icon /></span>{label}<ChevronRight className="chev" /></a></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
