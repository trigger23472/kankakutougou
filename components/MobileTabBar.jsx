'use client';

import { useEffect, useState } from 'react';
import { Backpack, BookOpen, CircleHelp, Gamepad2, House } from 'lucide-react';

// スマホ（600px 以下）だけ表示する画面下部の固定タブ。href はトップページ内のセクション id
const tabs = [
  { id: 'top', Icon: House, label: 'ホーム' },
  { id: 'senses', Icon: BookOpen, label: '知る' },
  { id: 'worries', Icon: CircleHelp, label: 'お悩み' },
  { id: 'play', Icon: Gamepad2, label: '遊ぶ' },
  { id: 'ages', Icon: Backpack, label: '年齢別' },
];

export default function MobileTabBar() {
  const [current, setCurrent] = useState('top');

  // 画面の上から 1/3 の位置にあるセクションを現在地として強調する
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight / 3;
      let active = tabs[0].id;
      for (const { id } of tabs) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) active = id;
      }
      setCurrent(active);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <nav className="tabbar" aria-label="ページ内ナビ">
      <ul>
        {tabs.map(({ id, Icon, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={current === id ? 'is-current' : undefined} aria-current={current === id ? 'location' : undefined}>
              <Icon />{label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
