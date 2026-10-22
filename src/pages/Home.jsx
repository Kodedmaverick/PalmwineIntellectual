import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/ds.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import ContactSection from '../components/ContactSection.jsx';
import ExperienceTimeline from '../components/ExperienceTimeline.jsx';
import useDocumentMeta from '../components/useDocumentMeta.js';

export default function Home() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => { const f = () => setW(window.innerWidth); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);
  const heroWide = w >= 1040, heroNarrow = w < 1040;
  useDocumentMeta('Kolom Oden-Ikpi — Technical Product Manager', "Kolom Oden-Ikpi is a Technical Product Manager in Lagos, Nigeria, with roots in product design and engineering. Selected work from Migranium and RFA Capital Advisors.");
  return (
<div className="site">
<SiteHeader current="home" />
<main id="main">
<section aria-labelledby="hero-title" style={{background:"#e7ece7",overflow:"hidden"}}><div style={{maxWidth:"1200px",margin:"0 auto",padding:"clamp(48px,8vw,104px) clamp(20px,4vw,48px) 0",display:"flex",flexDirection:"column",gap:"clamp(40px,6vw,72px)"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,400px),1fr))",gap:"28px clamp(32px,6vw,96px)",alignItems:"end"}}><div style={{display:"flex",flexDirection:"column",gap:"12px"}}><p style={{margin:"0",font:"400 17px/1.4 var(--font-sans)",color:"#0b3d24"}}>Hey there,</p>
<h1 id="hero-title" style={{margin:"0",font:"700 clamp(44px,6.4vw,76px)/1.04 var(--font-sans)",letterSpacing:"-0.035em",color:"#0b3d24",textWrap:"balance"}}>I’m Kolom Oden-Ikpi</h1>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"24px",paddingBottom:"6px"}}><p style={{margin:"0",maxWidth:"560px",font:"400 clamp(16px,1.5vw,18px)/1.65 var(--font-sans)",color:"#3a443e",textWrap:"pretty"}}>A Technical Product Manager with roots in product design and engineering, turning complex workflows, customer needs, and technical constraints into clear product direction.</p>
<a href="#contact" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"700 16px/1.3 var(--font-sans)",color:"#0b3d24",textDecoration:"none",padding:"6px 0"}} className="h7">Let’s talk<Icon name="arrow-right" size={18} /></a>
</div>
</div>
{heroWide && (<><div style={{position:"relative",height:"clamp(540px,50vw,640px)"}}><span aria-hidden="true" style={{position:"absolute",left:"50%",top:"20%",width:"min(560px,46vw)",height:"120px",borderRadius:"999px",background:"#0b3d24",transform:"translateX(-50%) rotate(-34deg)"}}></span>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"54%",width:"min(500px,40vw)",height:"110px",borderRadius:"999px",background:"#0b3d24",transform:"translateX(-50%) rotate(-8deg)"}}></span>
<img src="/assets/kolom.jpg" alt="Portrait of Kolom Oden-Ikpi seated on a wooden bench" style={{position:"absolute",left:"50%",bottom:"0",transform:"translateX(-50%)",width:"clamp(300px,30vw,400px)",aspectRatio:"4/5",objectFit:"cover",objectPosition:"50% 22%",borderRadius:"999px 999px 0 0",background:"#3b3e42"}} /><div style={{position:"absolute",left:"0",top:"44%",width:"230px",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"700 44px/1 var(--font-sans)",letterSpacing:"-0.03em",color:"#0b3d24",whiteSpace:"nowrap"}}>14+</span>
<span style={{font:"500 15px/1.45 var(--font-sans)",color:"#0b3d24"}}>integrated modules I lead product for</span>
<svg aria-hidden="true" width="120" height="36" viewBox="0 0 120 36" style={{alignSelf:"flex-end",marginRight:"-40px"}}><path d="M4 8 C 40 34, 80 34, 116 14" fill="none" stroke="#141a16" stroke-width="2.2" stroke-linecap="round"></path>
</svg>
</div>
<div style={{position:"absolute",right:"0",top:"16%",width:"230px",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"700 44px/1 var(--font-sans)",letterSpacing:"-0.03em",color:"#0b3d24",whiteSpace:"nowrap"}}>3+</span>
<span style={{font:"500 15px/1.45 var(--font-sans)",color:"#0b3d24"}}>years in product and design</span>
<svg aria-hidden="true" width="140" height="70" viewBox="0 0 140 70" style={{marginLeft:"-60px"}}><path d="M136 6 C 110 22, 90 30, 74 32 C 56 34, 52 14, 66 12 C 82 10, 80 40, 58 52 C 40 62, 20 64, 4 64" fill="none" stroke="#141a16" stroke-width="2.2" stroke-linecap="round"></path>
</svg>
</div>
<div style={{position:"absolute",right:"0",bottom:"56px",width:"230px",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"700 44px/1 var(--font-sans)",letterSpacing:"-0.03em",color:"#0b3d24",whiteSpace:"nowrap"}}>{'<'}6%</span>
<span style={{font:"500 15px/1.45 var(--font-sans)",color:"#0b3d24"}}>patient dead-click rate, down from 20%</span>
</div>
<div style={{position:"absolute",left:"0",bottom:"44px",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{font:"500 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#5b6760"}}>Currently at</span>
<img src="/assets/logos/migranium-clean.png" alt="Migranium" style={{height:"30px",width:"auto",alignSelf:"flex-start"}} /></div>
</div>
</>)}{heroNarrow && (<><div style={{display:"flex",flexDirection:"column",gap:"36px",alignItems:"center"}}><div style={{position:"relative",width:"100%",display:"flex",justifyContent:"center",paddingTop:"24px"}}><span aria-hidden="true" style={{position:"absolute",left:"50%",top:"22%",width:"min(92%,560px)",height:"clamp(72px,14vw,110px)",borderRadius:"999px",background:"#0b3d24",transform:"translateX(-50%) rotate(-30deg)"}}></span>
<span aria-hidden="true" style={{position:"absolute",left:"50%",top:"58%",width:"min(96%,580px)",height:"clamp(64px,12vw,96px)",borderRadius:"999px",background:"#0b3d24",transform:"translateX(-50%) rotate(-8deg)"}}></span>
<img src="/assets/kolom.jpg" alt="Portrait of Kolom Oden-Ikpi seated on a wooden bench" style={{position:"relative",display:"block",width:"min(64%,340px)",aspectRatio:"4/5",objectFit:"cover",objectPosition:"50% 22%",borderRadius:"999px 999px 24px 24px",background:"#3b3e42"}} /></div>
<div style={{width:"100%",display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:"24px 20px"}}><div style={{display:"flex",flexDirection:"column",gap:"4px",textAlign:"left"}}><span style={{font:"700 clamp(32px,3.4vw,44px)/1 var(--font-sans)",letterSpacing:"-0.03em",color:"#0b3d24"}}>14+</span>
<span style={{font:"500 15px/1.4 var(--font-sans)",color:"#0b3d24"}}>integrated modules I lead product for</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"4px",textAlign:"left"}}><span style={{font:"700 clamp(32px,3.4vw,44px)/1 var(--font-sans)",letterSpacing:"-0.03em",color:"#0b3d24"}}>3+</span>
<span style={{font:"500 15px/1.4 var(--font-sans)",color:"#0b3d24"}}>years in product & design</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"4px",textAlign:"left"}}><span style={{font:"700 clamp(32px,3.4vw,44px)/1 var(--font-sans)",letterSpacing:"-0.03em",color:"#0b3d24"}}>5 → 1</span>
<span style={{font:"500 15px/1.4 var(--font-sans)",color:"#0b3d24"}}>workflows consolidated</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"4px",textAlign:"left"}}><span style={{font:"700 clamp(32px,3.4vw,44px)/1 var(--font-sans)",letterSpacing:"-0.03em",color:"#0b3d24"}}>{'<'}6%</span>
<span style={{font:"500 15px/1.4 var(--font-sans)",color:"#0b3d24"}}>patient dead-click rate, from 20%</span>
</div>
</div>
<div style={{width:"100%",display:"flex",alignItems:"center",gap:"14px",paddingBottom:"40px"}}><span style={{font:"500 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#5b6760"}}>Currently at</span>
<img src="/assets/logos/migranium-clean.png" alt="Migranium" style={{height:"26px",width:"auto"}} /></div>
</div>
</>)}</div>
</section>

<section id="about" aria-labelledby="about-title" style={{scrollMarginTop:"76px"}}><div style={{maxWidth:"1200px",margin:"0 auto",padding:"clamp(72px,10vw,128px) clamp(20px,4vw,48px)",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",gap:"48px clamp(32px,7vw,112px)",alignItems:"start"}}><div style={{display:"flex",flexDirection:"column",gap:"22px"}}><h2 id="about-title" style={{margin:"0",font:"500 clamp(34px,4.4vw,52px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"#141a16"}}>What I do</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"#3a443e",textWrap:"pretty"}}>I’m a Technical Product Manager with 3+ years of experience across product management, business analysis, and product design, and a degree in electrical and electronics engineering.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"#3a443e",textWrap:"pretty"}}>At Migranium, an AI-powered healthcare SaaS platform, I lead product strategy and delivery across 14+ integrated modules, working with five engineers and one designer.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"#3a443e",textWrap:"pretty"}}>I also use AI-assisted interactive prototypes to make product decisions tangible before full development. For Kompound and Titaaria, I combined workflow planning, product requirements, and design direction with prototypes that demonstrate actions, feedback, and state changes—giving stakeholders and engineers a clearer experience to evaluate.</p>
</div>
<ol style={{margin:"0",padding:"0",listStyle:"none",display:"flex",flexDirection:"column"}}><li style={{display:"grid",gridTemplateColumns:"40px minmax(0,1fr)",gap:"12px",padding:"20px 0",borderTop:"1px solid #e6ebe7"}}><span style={{font:"600 14px/1.6 var(--font-sans)",color:"#2f6047"}}>01</span>
<div style={{display:"flex",flexDirection:"column",gap:"4px"}}><h3 style={{margin:"0",font:"600 18px/1.35 var(--font-sans)",color:"#141a16"}}>Understand the real workflow</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"#3a443e"}}>How work moves between people, modules, and decisions — before screens.</p>
</div>
</li>
<li style={{display:"grid",gridTemplateColumns:"40px minmax(0,1fr)",gap:"12px",padding:"20px 0",borderTop:"1px solid #e6ebe7"}}><span style={{font:"600 14px/1.6 var(--font-sans)",color:"#2f6047"}}>02</span>
<div style={{display:"flex",flexDirection:"column",gap:"4px"}}><h3 style={{margin:"0",font:"600 18px/1.35 var(--font-sans)",color:"#141a16"}}>Translate ambiguity into decisions</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"#3a443e"}}>Requirements, scope, and product decisions a team can build against.</p>
</div>
</li>
<li style={{display:"grid",gridTemplateColumns:"40px minmax(0,1fr)",gap:"12px",padding:"20px 0",borderTop:"1px solid #e6ebe7"}}><span style={{font:"600 14px/1.6 var(--font-sans)",color:"#2f6047"}}>03</span>
<div style={{display:"flex",flexDirection:"column",gap:"4px"}}><h3 style={{margin:"0",font:"600 18px/1.35 var(--font-sans)",color:"#141a16"}}>Weigh technical and commercial constraints</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"#3a443e"}}>Reading API docs and comparing providers so build-versus-buy fits the business.</p>
</div>
</li>
<li style={{display:"grid",gridTemplateColumns:"40px minmax(0,1fr)",gap:"12px",padding:"20px 0",borderTop:"1px solid #e6ebe7"}}><span style={{font:"600 14px/1.6 var(--font-sans)",color:"#2f6047"}}>04</span>
<div style={{display:"flex",flexDirection:"column",gap:"4px"}}><h3 style={{margin:"0",font:"600 18px/1.35 var(--font-sans)",color:"#141a16"}}>Align stakeholders and engineering</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"#3a443e"}}>A clear line between product decisions and engineering’s implementation.</p>
</div>
</li>
<li style={{display:"grid",gridTemplateColumns:"40px minmax(0,1fr)",gap:"12px",padding:"20px 0",borderTop:"1px solid #e6ebe7",borderBottom:"1px solid #e6ebe7"}}><span style={{font:"600 14px/1.6 var(--font-sans)",color:"#2f6047"}}>05</span>
<div style={{display:"flex",flexDirection:"column",gap:"4px"}}><h3 style={{margin:"0",font:"600 18px/1.35 var(--font-sans)",color:"#141a16"}}>Follow through to handoff</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"#3a443e"}}>Prototypes, recorded walkthroughs, and specified behaviour carry the intent.</p>
</div>
</li>
</ol>
</div>
</section>

<section id="work" aria-labelledby="work-title" style={{scrollMarginTop:"76px",background:"#e7ece7"}}><div style={{maxWidth:"1200px",margin:"0 auto",padding:"clamp(72px,10vw,128px) clamp(20px,4vw,48px)",display:"flex",flexDirection:"column",gap:"48px"}}><div style={{display:"flex",flexDirection:"column",gap:"14px",alignItems:"center",textAlign:"center"}}><h2 id="work-title" style={{margin:"0",font:"500 clamp(34px,4.4vw,52px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"#141a16"}}>Selected <span style={{color:"#2f6047"}}>work</span>
</h2>
<p style={{margin:"0",maxWidth:"520px",font:"400 17px/1.6 var(--font-sans)",color:"#3a443e"}}>Five projects, told through the decisions behind them and who owned what.</p>
</div>
<Link to="/work/kompound" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,420px),1fr))",borderRadius:"20px",overflow:"hidden",background:"#0b3d24",color:"#ffffff",textDecoration:"none",transition:"transform 250ms"}} className="h8"><img src="/assets/covers/kompound.jpg" alt="" style={{display:"block",width:"100%",height:"100%",minHeight:"280px",objectFit:"cover",background:"#2f6047"}} /><div style={{padding:"clamp(28px,4vw,48px)",display:"flex",flexDirection:"column",gap:"16px",justifyContent:"center"}}><div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"10px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#cfe0d4"}}>Kompound · Estate management</span>
<span style={{padding:"4px 10px",borderRadius:"999px",background:"#ffffff",font:"600 12px/1.3 var(--font-sans)",color:"#0b3d24"}}>Live in initial estate</span>
</div>
<span style={{font:"700 clamp(26px,3vw,36px)/1.15 var(--font-sans)",letterSpacing:"-0.025em",textWrap:"balance"}}>From an estate’s access-control problem to a platform designed for multiple communities.</span>
<div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}><span style={{padding:"5px 10px",borderRadius:"999px",border:"1px solid #4c7a60",font:"500 13px/1.3 var(--font-sans)",color:"#e7ece7"}}>Product strategy</span>
<span style={{padding:"5px 10px",borderRadius:"999px",border:"1px solid #4c7a60",font:"500 13px/1.3 var(--font-sans)",color:"#e7ece7"}}>Multi-role workflows</span>
<span style={{padding:"5px 10px",borderRadius:"999px",border:"1px solid #4c7a60",font:"500 13px/1.3 var(--font-sans)",color:"#e7ece7"}}>Interactive prototyping</span>
</div>
<span style={{paddingTop:"8px",display:"inline-flex",alignItems:"center",gap:"8px",font:"600 16px/1.3 var(--font-sans)"}}>Read case study<Icon name="arrow-right" size={18} /></span>
</div>
</Link>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:"20px"}}><Link to="/work/documents" style={{display:"flex",flexDirection:"column",borderRadius:"16px",overflow:"hidden",background:"#ffffff",color:"#141a16",textDecoration:"none",transition:"transform 250ms, box-shadow 250ms"}} className="h9"><img src="/assets/covers/documents.jpg" alt="" style={{display:"block",width:"100%",aspectRatio:"16/10",objectFit:"cover",background:"#dae2db"}} /><div style={{padding:"24px",display:"flex",flexDirection:"column",gap:"10px",flex:"1"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#2f6047"}}>Migranium · Documents</span>
<span style={{font:"700 22px/1.25 var(--font-sans)",letterSpacing:"-0.02em"}}>Building a document experience within startup constraints</span>
<span style={{font:"400 15px/1.55 var(--font-sans)",color:"#3a443e"}}>Provider selection, identity verification, product economics, and connected document signing.</span>
<div style={{display:"flex",flexWrap:"wrap",gap:"6px",paddingTop:"4px"}}><span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Provider research</span>
<span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Product economics</span>
<span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>End-to-end design</span>
</div>
<div style={{marginTop:"auto",paddingTop:"14px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px"}}><span style={{font:"500 13px/1.3 var(--font-sans)",color:"#5b6760"}}>Live</span>
<span style={{display:"inline-flex",alignItems:"center",gap:"8px",font:"600 15px/1.3 var(--font-sans)",color:"#0b3d24"}}>Read case study<Icon name="arrow-right" size={16} /></span>
</div>
</div>
</Link>
<Link to="/work/patient-journeys" style={{display:"flex",flexDirection:"column",borderRadius:"16px",overflow:"hidden",background:"#ffffff",color:"#141a16",textDecoration:"none",transition:"transform 250ms, box-shadow 250ms"}} className="h10"><img src="/assets/covers/patient-journeys.jpg" alt="" style={{display:"block",width:"100%",aspectRatio:"16/10",objectFit:"cover",background:"#dae2db"}} /><div style={{padding:"24px",display:"flex",flexDirection:"column",gap:"10px",flex:"1"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#2f6047"}}>Migranium · Patient Journeys</span>
<span style={{font:"700 22px/1.25 var(--font-sans)",letterSpacing:"-0.02em"}}>One builder for complex patient workflows</span>
<span style={{font:"400 15px/1.55 var(--font-sans)",color:"#3a443e"}}>Workflow orchestration, builder design, complexity management, and a client demonstration.</span>
<div style={{display:"flex",flexWrap:"wrap",gap:"6px",paddingTop:"4px"}}><span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Workflow architecture</span>
<span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Builder design</span>
<span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Prototyping</span>
</div>
<div style={{marginTop:"auto",paddingTop:"14px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px"}}><span style={{font:"500 13px/1.3 var(--font-sans)",color:"#5b6760"}}>Handed over to engineering</span>
<span style={{display:"inline-flex",alignItems:"center",gap:"8px",font:"600 15px/1.3 var(--font-sans)",color:"#0b3d24"}}>Read case study<Icon name="arrow-right" size={16} /></span>
</div>
</div>
</Link>
<Link to="/work/rfa-capital-advisors" style={{display:"flex",flexDirection:"column",borderRadius:"16px",overflow:"hidden",background:"#ffffff",color:"#141a16",textDecoration:"none",transition:"transform 250ms, box-shadow 250ms"}} className="h11"><img src="/assets/covers/rfa.jpg" alt="" style={{display:"block",width:"100%",aspectRatio:"16/10",objectFit:"cover",background:"#dae2db"}} /><div style={{padding:"24px",display:"flex",flexDirection:"column",gap:"10px",flex:"1"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#2f6047"}}>RFA Capital Advisors · Contract</span>
<span style={{font:"700 22px/1.25 var(--font-sans)",letterSpacing:"-0.02em"}}>Four connected platforms, delivered in two months</span>
<span style={{font:"400 15px/1.55 var(--font-sans)",color:"#3a443e"}}>Product leadership and delivery across a website, client portal, mobile app, and CMS.</span>
<div style={{display:"flex",flexWrap:"wrap",gap:"6px",paddingTop:"4px"}}><span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Product leadership</span>
<span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Website design</span>
<span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Delivery</span>
</div>
<div style={{marginTop:"auto",paddingTop:"14px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px"}}><span style={{font:"500 13px/1.3 var(--font-sans)",color:"#5b6760"}}>Live</span>
<span style={{display:"inline-flex",alignItems:"center",gap:"8px",font:"600 15px/1.3 var(--font-sans)",color:"#0b3d24"}}>Read case study<Icon name="arrow-right" size={16} /></span>
</div>
</div>
</Link>
<Link to="/work/titaaria" style={{display:"flex",flexDirection:"column",borderRadius:"16px",overflow:"hidden",background:"#ffffff",color:"#141a16",textDecoration:"none",transition:"transform 250ms, box-shadow 250ms"}} className="h12"><img src="/assets/covers/titaaria.jpg" alt="" style={{display:"block",width:"100%",aspectRatio:"16/10",objectFit:"cover",background:"#dae2db"}} /><div style={{padding:"24px",display:"flex",flexDirection:"column",gap:"10px",flex:"1"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#2f6047"}}>Titaaria · Social commerce</span>
<span style={{font:"700 22px/1.25 var(--font-sans)",letterSpacing:"-0.02em"}}>Titaaria</span>
<span style={{font:"400 15px/1.55 var(--font-sans)",color:"#3a443e"}}>Making a social-commerce product tangible before full development.</span>
<div style={{display:"flex",flexWrap:"wrap",gap:"6px",paddingTop:"4px"}}><span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Product definition</span>
<span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>Design systems</span>
<span style={{padding:"5px 10px",borderRadius:"999px",background:"#e7ece7",font:"500 13px/1.3 var(--font-sans)",color:"#0b3d24"}}>AI-assisted prototyping</span>
</div>
<div style={{marginTop:"auto",paddingTop:"14px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px"}}><span style={{font:"500 13px/1.3 var(--font-sans)",color:"#5b6760"}}>Ongoing · Interactive proof of concept</span>
<span style={{display:"inline-flex",alignItems:"center",gap:"8px",font:"600 15px/1.3 var(--font-sans)",color:"#0b3d24"}}>Read case study<Icon name="arrow-right" size={16} /></span>
</div>
</div>
</Link>
</div>
</div>
</section>

<section aria-labelledby="cap-title"><div style={{maxWidth:"1200px",margin:"0 auto",padding:"clamp(72px,10vw,120px) clamp(20px,4vw,48px) 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"40px 48px"}}><div style={{display:"flex",flexDirection:"column",gap:"16px"}}><h2 id="cap-title" style={{margin:"0",font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#2f6047"}}>Capabilities</h2>
<ul style={{margin:"0",padding:"0 0 0 20px",display:"flex",flexDirection:"column",gap:"8px",font:"400 19px/1.45 var(--font-sans)",color:"#141a16"}}><li>Product discovery</li>
<li>Requirements definition</li>
<li>Roadmapping</li>
<li>Workflow architecture</li>
<li>API evaluation</li>
<li>Stakeholder management</li>
<li>Systems thinking</li>
</ul>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"16px"}}><h2 style={{margin:"0",font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#2f6047"}}>Tools</h2>
<ul style={{margin:"0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:"8px"}}><li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/figma.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Figma</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/jira.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Jira</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/asana.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Asana</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/plane.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Plane</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/clarity.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Microsoft Clarity</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/heap.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Heap Analytics</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/claude.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Claude</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/codex.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Codex</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/blender.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Blender</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/powerbi.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Power BI</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/illustrator.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />Illustrator</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/indesign.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />InDesign</li>
<li style={{display:"flex",alignItems:"center",gap:"10px",padding:"10px 12px",border:"1px solid #e6ebe7",borderRadius:"10px",background:"#ffffff",font:"500 15px/1.3 var(--font-sans)",color:"#141a16"}}><img src="/assets/logos/aftereffects.png" alt="" style={{width:"24px",height:"24px",objectFit:"contain",flex:"none"}} />After Effects</li>
</ul>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"16px"}}><h2 style={{margin:"0",font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#2f6047"}}>Education</h2>
<div style={{display:"flex",flexDirection:"column",gap:"18px"}}><div style={{display:"flex",flexDirection:"column",gap:"2px"}}><span style={{font:"500 19px/1.4 var(--font-sans)",color:"#141a16"}}>Postgraduate Diploma in Management</span>
<span style={{font:"400 15px/1.45 var(--font-sans)",color:"#5b6760"}}>Ajayi Crowther University · 2025</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}><span style={{font:"500 19px/1.4 var(--font-sans)",color:"#141a16"}}>B.Eng. Electrical and Electronics Engineering</span>
<span style={{font:"400 15px/1.45 var(--font-sans)",color:"#5b6760"}}>Covenant University · 2024</span>
</div>
</div>
</div>
</div>
</section>

<ExperienceTimeline />

<ContactSection />

</main>
<SiteFooter current="home" />
</div>
  );
}
