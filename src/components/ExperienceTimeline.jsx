import { useEffect, useRef, useState } from 'react';
import { EXPERIENCE } from '../content/experience.js';
import { Icon } from './ds.jsx';

export default function ExperienceTimeline() {
  const [shown, setShown] = useState({});
  const [dots, setDots] = useState({});
  const [progress, setProgress] = useState(0);
  const timeline = useRef(null);
  const items = useRef([]);

  useEffect(() => {
    const all = Object.fromEntries(EXPERIENCE.map((_, i) => [i, true]));
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { setShown(all); setDots(all); setProgress(1); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const i = +e.target.dataset.idx;
        setShown(s => (s[i] ? s : { ...s, [i]: true }));
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
    items.current.forEach(el => el && io.observe(el));

    const onScroll = () => {
      const tl = timeline.current;
      if (!tl) return;
      const r = tl.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.7 - r.top) / Math.max(1, r.height)));
      const fillY = (r.height - 32) * p + 16;
      const next = {};
      items.current.forEach((el, i) => { if (el) next[i] = fillY >= el.getBoundingClientRect().top - r.top + 16; });
      setProgress(p);
      setDots(next);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <section aria-labelledby="exp-title" className="container exp">
      <div className="exp__intro">
        <h2 id="exp-title" className="exp__title">My work experience</h2>
        <p className="exp__lede">My main role at Migranium, alongside contract and project engagements across estate management, financial services, social commerce, and agriculture.</p>
      </div>
      <div ref={timeline} className="exp__timeline">
        <span aria-hidden="true" className="exp__track" />
        <span aria-hidden="true" className="exp__fill" style={{ height: `calc((100% - 32px) * ${progress.toFixed(3)})` }} />
        <ol className="exp__list">
          {EXPERIENCE.map((r, i) => {
            const meta = [r.place, r.dates].filter(Boolean).map(x => ' · ' + x).join('');
            return (
              <li key={r.company} ref={el => (items.current[i] = el)} data-idx={i}
                className={'exp__item' + (shown[i] ? ' is-on' : '') + (dots[i] ? ' is-dot' : '')}>
                <span className="exp__dot"><span /></span>
                <div className="exp__body">
                  <div className="exp__head">
                    <span className={'exp__logo' + (r.logo ? '' : ' exp__logo--initial')}>
                      {r.logo ? <img src={r.logo} alt="" /> : r.initial}
                    </span>
                    <div className="exp__headtext">
                      <div className="exp__titlerow">
                        <h3>{r.url ? <a href={r.url} target="_blank" rel="noopener noreferrer" className="exp__link">{r.company}<Icon name="arrow-up-right" size={16} /></a> : r.company}</h3>
                        <span className={'exp__kind' + (i === 0 ? ' exp__kind--main' : '')}>{r.kind}</span>
                      </div>
                      <div className="exp__meta"><strong>{r.role}</strong><span>{meta}</span></div>
                    </div>
                  </div>
                  <ul className="exp__points">
                    {r.points.map((p, j) => (
                      <li key={j} style={{ transitionDelay: shown[i] ? `${180 + j * 110}ms` : '0ms' }}><span className="exp__bullet" /><span>{p}</span></li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
