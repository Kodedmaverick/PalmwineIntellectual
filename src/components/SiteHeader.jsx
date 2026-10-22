import { Link } from 'react-router-dom';
import { Icon } from './ds.jsx';

export default function SiteHeader({ current = 'home' }) {
  const isCase = current !== 'home';
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="wordmark" aria-label="Kolom Oden-Ikpi, home"><span>Kolom</span><span>Oden-Ikpi.</span></Link>
        <nav aria-label="Primary" className="site-header__nav">
          <Link to="/#about" className="nav-link"><span className="nav-text">About</span><span className="nav-icon" aria-hidden="true"><Icon name="user-round" size={22} /></span><span className="sr-only nav-sr">About</span></Link>
          <Link to="/#work" aria-current={isCase ? 'page' : undefined} className={'nav-link' + (isCase ? ' is-current' : '')}><span className="nav-text">My work</span><span className="nav-icon" aria-hidden="true"><Icon name="briefcase" size={22} /></span><span className="sr-only nav-sr">My work</span></Link>
          <Link to="/#contact" className="nav-cta"><span className="nav-text">Get in touch</span><span className="nav-icon" aria-hidden="true"><Icon name="mail" size={20} /></span><span className="sr-only nav-sr">Get in touch</span></Link>
        </nav>
      </div>
    </header>
  );
}
