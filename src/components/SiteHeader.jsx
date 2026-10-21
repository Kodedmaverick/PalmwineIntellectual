import { Link } from 'react-router-dom';

export default function SiteHeader({ current = 'home' }) {
  const isCase = current !== 'home';
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__name">Kolom Oden-Ikpi</Link>
        <nav aria-label="Primary" className="site-header__nav">
          <Link to="/#work" aria-current={isCase ? 'page' : undefined} className={isCase ? 'is-current' : undefined}>
            <span className="only-wide">Selected work</span><span className="only-narrow">Work</span>
          </Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
