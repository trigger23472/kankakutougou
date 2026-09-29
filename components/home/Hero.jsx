import { ChevronRight } from 'lucide-react';
import Dots from '../Dots';
import FallbackImage from '../FallbackImage';

// 見出し 2 行目は 1 文字ずつ色を変える（.c-* クラス）
const titleChars = [
  ['も', 'y'], ['っ', 'o'], ['と', 't'], ['楽', 'y'], ['し', 'p'], ['く', 'b'], ['。', 't'],
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Dots count={7} />

      <div className="hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="l1">「できた！」を、</span>
            <span className="l2">
              {titleChars.map(([char, color], i) => <span key={i} className={`c-${color}`}>{char}</span>)}
            </span>
          </h1>
          <p className="hero__lead">
            感覚統合を通して、<br />
            子どもたちの「やってみたい！」を応援します。<br />
            遊びながら、心とからだの成長を育てていきましょう。
          </p>
          <div className="hero__btns">
            <a href="#" className="btn btn--blue">感覚統合とは？<ChevronRight /></a>
            <a href="#" className="btn btn--pink">遊びを探す<ChevronRight /></a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            {/* public/images/hero.jpg を置くと写真に差し替わります */}
            <FallbackImage src="/images/hero.jpg" alt="笑顔でうつぶせになって遊ぶ女の子" fallback="👧" />
          </div>
          <svg className="hero__cloud" viewBox="0 0 110 50" fill="#fff" stroke="#9cc9e6" strokeWidth="2">
            <path d="M20 44h72a14 14 0 0 0 0-28 20 20 0 0 0-36-6 16 16 0 0 0-26 10 12 12 0 0 0-10 24z" />
          </svg>
          <p className="hero__note">あそびが<br />&nbsp;できることを<br />&nbsp;&nbsp;ふやしていこう！</p>
          <svg className="hero__flowers" viewBox="0 0 90 90" fill="none" stroke="#2b4a6b" strokeWidth="2" strokeLinecap="round">
            <path d="M25 88V48" /><path d="M25 70c-8-2-12-8-12-14 7 1 12 6 12 14z" /><path d="M25 62c7-2 11-8 11-13-6 1-11 6-11 13z" />
            <circle cx="25" cy="38" r="5" /><path d="M25 33c-3-8 3-10 0-14M25 33c3-8 9-6 8-12M25 33c-5-6-11-3-12-9" />
            <path d="M65 88V34" /><path d="M65 64c-8-2-12-8-12-14 7 1 12 6 12 14z" /><path d="M65 56c7-2 11-8 11-13-6 1-11 6-11 13z" />
            <path d="M65 34c-6-3-8-10-5-15 3 2 5 6 5 10 0-4 2-8 5-10 3 5 1 12-5 15z" />
          </svg>
        </div>
      </div>

      <svg className="hero__wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60 C 300 110, 600 0, 900 40 S 1300 90, 1440 30 V110 H0z" fill="#cfe9f7" opacity=".8" />
        <path d="M0 80 C 320 120, 640 30, 960 70 S 1320 100, 1440 60 V110 H0z" fill="#fff" />
      </svg>
    </section>
  );
}
