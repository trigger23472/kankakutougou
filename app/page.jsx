import {
  Armchair, Backpack, BicepsFlexed, Building2, ChevronRight, Eye, Footprints,
  Gamepad2, Hand, House, PersonStanding, Smile, Users, Volume2,
} from 'lucide-react';
import FallbackImage from '../components/FallbackImage';

const senses = [
  { color: 'pink', Icon: Hand, title: '触覚', text: ['さわる・ふれることで', '感じる感覚'] },
  { color: 'blue', Icon: PersonStanding, title: '前庭感覚', text: ['からだのバランスを', 'とる感覚'] },
  { color: 'green', Icon: BicepsFlexed, title: '固有受容覚', text: ['からだの位置や動きを', '感じる感覚'] },
  { color: 'yellow', Icon: Eye, title: '視覚・聴覚', text: ['見る・聞くことで', '感じる感覚'] },
];

const worries = [
  { color: 'blue', Icon: Volume2, label: '音が苦手' },
  { color: 'green', Icon: Footprints, label: '落ち着きにくい' },
  { color: 'yellow', Icon: PersonStanding, label: 'よく転ぶ', iconClass: 'is-tilted' },
  { color: 'pink', Icon: Hand, label: '触られるのが苦手' },
  { color: 'purple', Icon: Armchair, label: '姿勢が崩れやすい' },
  { color: 'teal', Icon: BicepsFlexed, label: '力加減が難しい' },
];

const plays = [
  { color: 'blue', Icon: House, label: 'おうちでできる感覚あそび' },
  { color: 'blue', Icon: Footprints, label: '運動あそび' },
  { color: 'green', Icon: Hand, label: '手先のあそび' },
  { color: 'teal', Icon: Smile, label: '親子で楽しむあそび' },
];

const ages = [
  { color: 'pink', label: '0〜3歳', kid: '👶' },
  { color: 'green', label: '4〜6歳', kid: '🧒' },
  { color: 'blue', label: '小学生', kid: '👦' },
  { color: 'purple', label: '中高生', kid: '🧑' },
];

// 位置・サイズ・色は globals.css の .hero > .dot:nth-of-type(n) などで指定
function Dots({ count, className = 'dot' }) {
  return Array.from({ length: count }, (_, i) => <span key={i} className={className} />);
}

export default function Home() {
  return (
    <>
      {/* ============ Hero ============ */}
      <section className="hero">
        <Dots count={7} />

        <div className="hero__inner">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="l1">「できた！」を、</span>
              <span className="l2"><span className="c-y">も</span><span className="c-o">っ</span><span className="c-t">と</span><span className="c-y">楽</span><span className="c-p">し</span><span className="c-b">く</span><span className="c-t">。</span></span>
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

      {/* ============ 感覚統合ってどんなもの？ ============ */}
      <section className="section section--senses">
        <span className="dot dot--solid dot--ring" />
        <Dots count={3} className="dot dot--solid" />
        <div className="container">
          <div className="sec-head sec-head--center">
            <h2 className="sec-title">感覚統合ってどんなもの？</h2>
            <p className="sec-lead">感覚をうまく使えるようになることで、<br />「できること」がどんどん増えていきます。</p>
            <a href="#" className="more more--abs">詳しく見る<ChevronRight /></a>
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

      {/* ============ お悩み ============ */}
      <section className="section section--tint">
        <div className="container">
          <div className="sec-head">
            <svg className="worry-face" viewBox="0 0 64 64" fill="none" stroke="#2b4a6b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 30c0-12 8-20 18-20s18 8 18 20" />
              <path d="M14 30c2-8 10-12 18-12 6 0 12 3 16 8" />
              <ellipse cx="32" cy="34" rx="15" ry="16" fill="#fff" />
              <path d="M24 32h4M36 32h4" /><path d="M27 43c3-2 7-2 10 0" />
              <path d="M14 62c2-8 9-12 18-12s16 4 18 12" />
              <path d="M54 14l4-4M56 22h5M53 7l1-5" />
            </svg>
            <div>
              <h2 className="sec-title">こんなお悩みありませんか？</h2>
              <p className="sec-lead sec-lead--tight">子どものこんな様子で気になることはありませんか？<br />一つでも当てはまる場合は、感覚統合が関係しているかもしれません。</p>
            </div>
            <a href="#" className="more">お悩みから探す<ChevronRight /></a>
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

      {/* ============ 遊んでみよう ============ */}
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
            <a href="#" className="fish-banner" aria-label="動く魚をタップ！ 今すぐ遊ぶ">
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
                <g fill="#f47a9a"><path d="M490 150c0-18-6-26-2-34M490 150c4-14 12-20 10-30M490 150c-6-10-14-14-14-24" stroke="#f47a9a" strokeWidth="5" fill="none" strokeLinecap="round" /></g>
                <g fill="#f39a3d" stroke="#f39a3d"><path d="M330 150c0-14-4-22 0-30M330 150c4-12 10-16 8-26" strokeWidth="5" fill="none" strokeLinecap="round" /></g>
                <g className="fish" transform="translate(250 38) scale(-.9 .9)"><use href="#fishShape" fill="#3d6fd8" /><circle cx="-12" cy="-3" r="2.5" fill="#fff" /></g>
                <g className="fish" transform="translate(320 62) scale(-1 1)"><use href="#fishShape" fill="#f7d33a" /><rect x="-6" y="-13" width="5" height="26" fill="#2b4a6b" opacity=".35" /><circle cx="-12" cy="-3" r="2.5" fill="#222" /></g>
                <g className="fish" transform="translate(420 68) scale(-1.2 1.2)"><use href="#fishShape" fill="#f57c1f" /><rect x="-4" y="-13" width="5" height="26" fill="#fff" /><rect x="10" y="-11" width="4" height="22" fill="#fff" /><circle cx="-13" cy="-3" r="2.5" fill="#222" /></g>
                <g className="fish" transform="translate(500 48) scale(-.8 .8)"><use href="#fishShape" fill="#7fd05a" /><circle cx="-12" cy="-3" r="2.5" fill="#222" /></g>
                <g className="fish" transform="translate(545 80) scale(-.95 .95)"><use href="#fishShape" fill="#f78fb0" /><circle cx="-12" cy="-3" r="2.5" fill="#222" /></g>
                <g className="fish" transform="translate(390 110) scale(-.8 .8)"><use href="#fishShape" fill="#2d7fd0" /><circle cx="-12" cy="-3" r="2.5" fill="#fff" /></g>
                <g className="fish" transform="translate(200 90) scale(-.7 .7)"><use href="#fishShape" fill="#5a8fe0" /><circle cx="-12" cy="-3" r="2.5" fill="#fff" /></g>
              </svg>
              <div className="bubble-say"><div>動く魚を<b>タップ！</b></div></div>
              <span className="play-now">今すぐ遊ぶ<ChevronRight /></span>
            </a>
            <ul className="play-list">
              {plays.map(({ color, Icon, label }) => (
                <li key={label}><a href="#"><span className={`ic ic--${color}`}><Icon /></span>{label}<ChevronRight className="chev" /></a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 年齢別に探す ============ */}
      <section className="section section--ages">
        <div className="container">
          <div className="sec-head">
            <Backpack className="sec-icon" />
            <div>
              <h2 className="sec-title sec-title--sm">年齢別に探す</h2>
              <p className="sec-lead sec-lead--flush">お子さまの発達段階に合わせた遊びやサポートを紹介しています。</p>
            </div>
            <a href="#" className="more">年齢別に見る<ChevronRight /></a>
          </div>
          <div className="ages">
            {ages.map(({ color, label, kid }) => (
              <a key={label} href="#" className={`age age--${color}`}>{label}<span className="kid">{kid}</span></a>
            ))}
          </div>

          <div className="targets">
            <div className="target target--blue">
              <div className="target__body">
                <div className="target__title"><Users />保護者の方へ</div>
                <p>ご家庭での関わり方や、おすすめの遊び、<br />よくあるご質問などをまとめています。</p>
                <a href="#" className="more">詳しく見る<ChevronRight /></a>
              </div>
              <div className="target__photo">
                <FallbackImage src="/images/parents.jpg" alt="親子で遊ぶ様子" fallback="👩‍👧" />
              </div>
            </div>
            <div className="target target--green">
              <div className="target__body">
                <div className="target__title"><Building2 />支援者の方へ</div>
                <p>支援プログラムや教材、研修情報など<br />専門的な情報を掲載しています。</p>
                <a href="#" className="more">詳しく見る<ChevronRight /></a>
              </div>
              <div className="target__photo">
                <FallbackImage src="/images/supporters.jpg" alt="バランスボールを使った支援の様子" fallback="🧑‍🏫" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
