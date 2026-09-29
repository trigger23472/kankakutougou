'use client';

import { useEffect } from 'react';

// 未実装のリンク（href="#"）はページ移動しない
export default function DeadLinkGuard() {
  useEffect(() => {
    const onClick = e => {
      if (e.target.closest('a[href="#"]')) e.preventDefault();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
