import Logo from './Logo';
import PageTopLink from './PageTopLink';
import { navItems } from './navItems';

export default function Footer() {
  return (
    <footer className="footer">
      <svg className="footer__wave" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 22 C 180 2, 360 38, 540 20 S 900 4, 1080 22 S 1320 36, 1440 18" stroke="#bfe3f7" strokeWidth="5" fill="none" />
        <path d="M0 28 C 200 12, 380 40, 560 26 S 920 10, 1100 28 S 1320 38, 1440 24" stroke="#fde68a" strokeWidth="4" fill="none" />
        <path d="M0 33 C 220 20, 400 40, 600 32 S 940 18, 1120 33 S 1320 40, 1440 30" stroke="#fbcfd9" strokeWidth="3" fill="none" />
      </svg>
      <div className="footer__inner">
        <Logo />
        <nav>
          <ul>
            {navItems.map(item => (
              <li key={item.label}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <PageTopLink />
      </div>
    </footer>
  );
}
