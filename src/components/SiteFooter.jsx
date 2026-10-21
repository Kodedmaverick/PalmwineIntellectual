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
            <h2 id="more-work" className="h-section">More <em className="serif">work</em></h2>
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
      <div className="site-footer__bar">
        <div className="container site-footer__inner">
          <span>© {new Date().getFullYear()} Kolom Oden-Ikpi · Lagos, Nigeria</span>
          <div className="site-footer__links">
            <a href="mailto:kolomodenikpi@gmail.com">kolomodenikpi@gmail.com</a>
            <a href="https://www.linkedin.com/in/kolom-oden-ikpi-02516b32a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
