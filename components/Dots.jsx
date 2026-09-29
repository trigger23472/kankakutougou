// 背景の水玉。位置・サイズ・色は globals.css の .hero > .dot:nth-of-type(n) などで指定
export default function Dots({ count, className = 'dot' }) {
  return Array.from({ length: count }, (_, i) => <span key={i} className={className} />);
}
