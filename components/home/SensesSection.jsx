import { BicepsFlexed, ChevronRight, Eye, Hand, PersonStanding } from 'lucide-react';
import Dots from '../Dots';
import MoreLink from '../MoreLink';

const senses = [
  { color: 'pink', Icon: Hand, title: '触覚', text: ['さわる・ふれることで', '感じる感覚'] },
  { color: 'blue', Icon: PersonStanding, title: '前庭感覚', text: ['からだのバランスを', 'とる感覚'] },
  { color: 'green', Icon: BicepsFlexed, title: '固有受容覚', text: ['からだの位置や動きを', '感じる感覚'] },
  { color: 'yellow', Icon: Eye, title: '視覚・聴覚', text: ['見る・聞くことで', '感じる感覚'] },
];

export default function SensesSection() {
  return (
    <section className="section section--senses">
      <span className="dot dot--solid dot--ring" />
      <Dots count={3} className="dot dot--solid" />
      <div className="container">
        <div className="sec-head sec-head--center">
          <h2 className="sec-title">感覚統合ってどんなもの？</h2>
          <p className="sec-lead">感覚をうまく使えるようになることで、<br />「できること」がどんどん増えていきます。</p>
          <MoreLink modifier="abs">詳しく見る</MoreLink>
        </div>
        <div className="senses">
          {senses.map(({ color, Icon, title, text }) => (
            <a key={title} href="#" className={`sense sense--${color}`}>
              <div className="sense__icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{text[0]}<br />{text[1]}</p>
              <span className="link">詳しく見る<ChevronRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
