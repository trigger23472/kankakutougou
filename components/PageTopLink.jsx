'use client';

import { ChevronUp } from 'lucide-react';

export default function PageTopLink() {
  const scrollToTop = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#top" className="pagetop" onClick={scrollToTop}><ChevronUp />PAGE TOP</a>
  );
}
