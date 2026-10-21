import { useEffect, useState } from 'react';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

export default function CaseLayout({ current, toc, hero, children }) {
  const [active, setActive] = useState(toc[0].id);

  useEffect(() => {
    const onScroll = () => {
      let a = toc[0].id;
      for (const t of toc) {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top < 180) a = t.id;
      }
      setActive(a);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [toc]);

  const num = i => String(i + 1).padStart(2, '0');

  return (
    <div className="site">
      <SiteHeader current={current} />
      <main id="main">
        {hero}
        <div className="container case-grid">
          <nav aria-label="On this page" className="toc-desktop">
            <div className="toc-desktop__label">On this page</div>
            {toc.map((t, i) => (
              <a key={t.id} href={'#' + t.id} aria-current={t.id === active ? 'location' : undefined} className={t.id === active ? 'is-active' : undefined}>
                <span className="toc-num">{num(i)}</span><span>{t.label}</span>
              </a>
            ))}
          </nav>
          <article className="case-article">
            <details className="toc-mobile">
              <summary>On this page</summary>
              <nav aria-label="On this page (compact)">
                {toc.map((t, i) => (
                  <a key={t.id} href={'#' + t.id} onClick={e => e.currentTarget.closest('details').removeAttribute('open')}>
                    <span className="toc-num">{num(i)}</span><span>{t.label}</span>
                  </a>
                ))}
              </nav>
            </details>
            {children}
          </article>
        </div>
      </main>
      <SiteFooter current={current} />
    </div>
  );
}
