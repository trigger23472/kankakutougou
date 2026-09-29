import { Backpack, Building2, Users } from 'lucide-react';
import FallbackImage from '../FallbackImage';
import MoreLink from '../MoreLink';

const ages = [
  { color: 'pink', label: '0〜3歳', kid: '👶' },
  { color: 'green', label: '4〜6歳', kid: '🧒' },
  { color: 'blue', label: '小学生', kid: '👦' },
  { color: 'purple', label: '中高生', kid: '🧑' },
];

// photo は public/images/ に置くと写真に差し替わる
const targets = [
  {
    color: 'blue', Icon: Users, title: '保護者の方へ',
    text: ['ご家庭での関わり方や、おすすめの遊び、', 'よくあるご質問などをまとめています。'],
    photo: '/images/parents.jpg', alt: '親子で遊ぶ様子', fallback: '👩‍👧',
  },
  {
    color: 'green', Icon: Building2, title: '支援者の方へ',
    text: ['支援プログラムや教材、研修情報など', '専門的な情報を掲載しています。'],
    photo: '/images/supporters.jpg', alt: 'バランスボールを使った支援の様子', fallback: '🧑‍🏫',
  },
];

export default function AgesSection() {
  return (
    <section className="section section--ages" id="ages">
      <div className="container">
        <div className="sec-head">
          <Backpack className="sec-icon" />
          <div>
            <h2 className="sec-title sec-title--sm">年齢別に探す</h2>
            <p className="sec-lead sec-lead--flush">お子さまの発達段階に合わせた遊びやサポートを紹介しています。</p>
          </div>
          <MoreLink>年齢別に見る</MoreLink>
        </div>
        <div className="ages">
          {ages.map(({ color, label, kid }) => (
            <a key={label} href="#" className={`age age--${color}`}>{label}<span className="kid">{kid}</span></a>
          ))}
        </div>

        <div className="targets">
          {targets.map(({ color, Icon, title, text, photo, alt, fallback }) => (
            <div key={title} className={`target target--${color}`}>
              <div className="target__body">
                <div className="target__title"><Icon />{title}</div>
                <p>{text[0]}<br />{text[1]}</p>
                <MoreLink>詳しく見る</MoreLink>
              </div>
              <div className="target__photo">
                <FallbackImage src={photo} alt={alt} fallback={fallback} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
