import { M_PLUS_Rounded_1c, Zen_Maru_Gothic, Klee_One } from 'next/font/google';
import SunSymbol from '../components/SunSymbol';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DeadLinkGuard from '../components/DeadLinkGuard';
import './globals.css';

// 日本語フォントはサブセット指定ができないため preload: false で読み込む
const rounded = M_PLUS_Rounded_1c({ weight: ['400', '500'], preload: false, variable: '--font-rounded' });
const maru = Zen_Maru_Gothic({ weight: '500', preload: false, variable: '--font-maru' });
const klee = Klee_One({ weight: '600', preload: false, variable: '--font-klee' });

export const metadata = {
  title: 'すこやか感覚ラボ',
  description: '感覚統合 × あそび × こどもの成長。感覚統合を通して、子どもたちの「やってみたい！」を応援します。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${rounded.variable} ${maru.variable} ${klee.variable}`}>
      <body>
        <SunSymbol />
        <Header />
        <main>{children}</main>
        <Footer />
        <DeadLinkGuard />
      </body>
    </html>
  );
}
