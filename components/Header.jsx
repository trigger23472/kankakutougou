'use client';

import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import Logo from './Logo';
import { navItems } from './navItems';

export default function Header() {
  // 960px 未満のときだけ、ハンバーガーメニューでナビを開閉する
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Logo withSub />
        <nav className={open ? 'nav is-open' : 'nav'} id="nav">
          <ul>
            {navItems.map((item, i) => (
              <li key={item.label}>
                <a href={item.href} className={i === 0 ? 'is-current' : undefined}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="menu-btn" aria-label="メニュー" aria-expanded={open} onClick={() => setOpen(o => !o)}><Menu /></button>
        <button className="search-btn" aria-label="検索"><Search /></button>
      </div>
    </header>
  );
}
