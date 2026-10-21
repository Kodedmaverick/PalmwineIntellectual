import { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Documents from './pages/Documents.jsx';
import PatientJourneys from './pages/PatientJourneys.jsx';
import RFA from './pages/RFA.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    const go = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72 });
    };
    requestAnimationFrame(() => requestAnimationFrame(go));
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <div className="site">
      <SiteHeader current="home" />
      <main className="container" style={{ padding: '120px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h1 style={{ margin: 0, font: '600 clamp(36px,6vw,64px)/1.05 var(--font-sans)', letterSpacing: '-0.03em' }}>This page doesn’t exist.</h1>
        <Link to="/" style={{ font: '500 16px/1.3 var(--font-sans)' }}>Back to the homepage</Link>
      </main>
      <SiteFooter current="home" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/documents" element={<Documents />} />
        <Route path="/work/patient-journeys" element={<PatientJourneys />} />
        <Route path="/work/rfa-capital-advisors" element={<RFA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
