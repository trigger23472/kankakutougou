'use client';

import { useEffect, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import Logo from './Logo';
import { navItems } from './navItems';

export default function Header() {
  // 960px 未満のときだけ、ハンバーガーメニューでナビを開閉する
  const [open, setOpen] = useState(false);

  // 開いている間は Esc で閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="header__inner">
        <Logo withSub />
        <nav className={open ? 'nav is-open' : 'nav'} id="nav">
          <ul>
            {navItems.map((item, i) => (
              <li key={item.label}>
                <a href={item.href} className={i === 0 ? 'is-current' : undefined} onClick={() => setOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="menu-btn" aria-label={open ? 'メニューを閉じる' : 'メニュー'} aria-controls="nav" aria-expanded={open} onClick={() => setOpen(o => !o)}>{open ? <X /> : <Menu />}</button>
        <button className="search-btn" aria-label="検索"><Search /></button>
      </div>
    </header>
  );
}
