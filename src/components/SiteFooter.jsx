import { Link } from 'react-router-dom';
import { Icon } from './ds.jsx';
import { CASES } from '../content/cases.js';

export default function SiteFooter({ current = 'home' }) {
  const i = CASES.findIndex(c => c.id === current);
  const others = i < 0 ? [] : [CASES[(i + 1) % CASES.length], CASES[(i + 2) % CASES.length]];
  return (
    <footer>
      {others.length > 0 && (
        <section aria-labelledby="more-work" className="container more-work">
          <div className="more-work__head">
            <h2 id="more-work" className="h-section">More <span className="accent">work</span></h2>
            <Link to="/#work" className="text-link"><Icon name="arrow-left" size={16} />Back to selected work</Link>
          </div>
          <div className="more-work__grid">
            {others.map(c => (
              <Link key={c.id} to={c.path} className="more-card">
                <span className="kicker">{c.kicker}</span>
                <span className="more-card__title">{c.title}</span>
                <span className="more-card__summary">{c.summary}</span>
                <span className="more-card__cta">Read the case study<Icon name="arrow-right" size={16} /></span>
              </Link>
            ))}
          </div>
        </section>
      )}
      <div className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__col">
              <Link to="/" className="wordmark" aria-label="Kolom Oden-Ikpi, home"><span>Kolom</span><span>Oden-Ikpi.</span></Link>
              <nav aria-label="Footer" className="site-footer__nav">
                <Link to="/#about">About</Link>
                <Link to="/#work">My work</Link>
                <Link to="/#contact">Contact</Link>
              </nav>
            </div>
            <div className="site-footer__links">
              <a href="mailto:kolomodenikpi@gmail.com">kolomodenikpi@gmail.com</a>
              <a href="https://www.linkedin.com/in/kolom-oden-ikpi-02516b32a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="site-footer__copy">© {new Date().getFullYear()} Kolom Oden-Ikpi · Lagos, Nigeria</div>
        </div>
      </div>
    </footer>
  );
}
