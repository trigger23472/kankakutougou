import { ChevronRight } from 'lucide-react';

// 「詳しく見る ›」形式の丸枠リンク。modifier は 'abs' など（.more--abs）
export default function MoreLink({ href = '#', modifier, children }) {
  return (
    <a href={href} className={modifier ? `more more--${modifier}` : 'more'}>{children}<ChevronRight /></a>
  );
}
