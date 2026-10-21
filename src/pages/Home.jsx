import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from '../components/ds.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import ContactSection from '../components/ContactSection.jsx';
import useDocumentMeta from '../components/useDocumentMeta.js';

export default function Home() {
  useDocumentMeta('Kolom Oden-Ikpi — Technical Product Manager', "Kolom Oden-Ikpi is a Technical Product Manager in Lagos, Nigeria, with roots in product design and engineering. Selected work from Migranium and RFA Capital Advisors.");
  return (
<div className="site">
<SiteHeader current="home" />
<main id="main">
<section aria-labelledby="hero-title" style={{maxWidth:"1200px",margin:"0 auto",padding:"clamp(64px,11vw,136px) clamp(20px,4vw,48px) clamp(64px,9vw,112px)",display:"flex",flexDirection:"column",gap:"36px"}}><div style={{font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)"}}>Technical Product Manager · Lagos, Nigeria</div>
<h1 id="hero-title" style={{margin:"0",font:"600 clamp(52px,9.4vw,124px)/0.98 var(--font-sans)",letterSpacing:"-0.045em",color:"var(--text-strong)"}}><span style={{display:"block"}}>Complex systems.</span>
<span style={{display:"block",fontFamily:"var(--serif)",fontWeight:"400",fontStyle:"italic",letterSpacing:"-0.02em",color:"var(--primary)"}}>Clear direction.</span>
</h1>
<p style={{margin:"0",maxWidth:"640px",font:"400 clamp(18px,1.8vw,21px)/1.6 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I’m Kolom, a Technical Product Manager with roots in product design and engineering. I turn complex workflows, customer needs, and technical constraints into clear product direction.</p>
<div style={{display:"flex",flexWrap:"wrap",gap:"12px"}}><Button href="#work" iconRight="arrow-down">Explore selected work</Button>
<Button variant="secondary" href="mailto:kolomodenikpi@gmail.com">Get in touch</Button>
</div>
<div style={{display:"flex",alignItems:"flex-start",gap:"12px",paddingTop:"28px",borderTop:"1px solid var(--border)",maxWidth:"640px"}}><span style={{flex:"none",width:"8px",height:"8px",marginTop:"7px",borderRadius:"50%",background:"var(--primary)"}}></span>
<p style={{margin:"0",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}>Currently <strong style={{fontWeight:"600",color:"var(--text-strong)"}}>Lead Product Manager & Product Designer at Migranium</strong>
, an AI-powered healthcare SaaS platform.</p>
</div>
</section>

<section id="work" aria-labelledby="work-title" style={{scrollMarginTop:"72px",maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(20px,4vw,48px) 48px"}}><div style={{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"space-between",gap:"12px 32px",paddingBottom:"32px"}}><h2 id="work-title" style={{margin:"0",font:"600 clamp(32px,4.4vw,52px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>Selected <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:"400"}}>work</span>
</h2>
<p style={{margin:"0",maxWidth:"420px",font:"400 16px/1.55 var(--font-sans)",color:"var(--text-muted)"}}>Three projects, told through the decisions behind them and who owned what.</p>
</div>
<article aria-labelledby="w1" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"clamp(32px,5vw,72px)",alignItems:"center",padding:"56px 0",borderTop:"1px solid var(--border)"}}><div style={{display:"flex",flexDirection:"column",gap:"24px"}}><div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)"}}><span>01</span>
<span style={{color:"var(--border-strong)"}}>/</span>
<span>Migranium</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}><h3 id="w1" style={{margin:"0",font:"600 clamp(30px,3.6vw,44px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>Documents</h3>
<p style={{margin:"0",font:"400 italic clamp(22px,2.2vw,26px)/1.3 var(--serif)",color:"var(--text-body)"}}>Building a document experience within startup constraints</p>
</div>
<dl style={{margin:"0",display:"flex",flexDirection:"column",gap:"14px"}}><div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>Problem</dt>
<dd style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>A prospective fertility-clinic client needed to handle sensitive documents, including signing and identity verification.</dd>
</div>
<div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>Role</dt>
<dd style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>Product Manager & Product Designer</dd>
</div>
<div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>Decision</dt>
<dd style={{margin:"0",font:"500 15px/1.6 var(--font-sans)",color:"var(--text-strong)"}}>Buy rather than build: an interim signing provider chosen for early-stage economics, with verification costs considered in the module’s pricing.</dd>
</div>
<div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>Status</dt>
<dd style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>Live</dd>
</div>
</dl>
<Link to="/work/documents" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"600 16px/1.3 var(--font-sans)",color:"var(--text-strong)",textDecoration:"underline",textDecorationColor:"var(--border-strong)",textUnderlineOffset:"6px",padding:"8px 0"}}>Read the Documents case study<Icon name="arrow-right" size={18} /></Link>
</div>
<figure style={{margin:"0",padding:"clamp(20px,3vw,32px)",background:"var(--surface-soft)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"14px"}}><figcaption style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}><span>Provider decision</span>
<span style={{fontWeight:"500",textTransform:"none",letterSpacing:"0"}}>Illustrative</span>
</figcaption>
<div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"10px"}}><div style={{padding:"16px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 16px/1.25 var(--font-sans)",color:"var(--text-muted)"}}>DocuSign</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Preferred, longer term</span>
</div>
<div style={{padding:"16px",background:"var(--surface-card)",border:"1px solid var(--foreground)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 16px/1.25 var(--font-sans)",color:"var(--text-strong)"}}>DocuSeal</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-body)"}}>Selected as interim</span>
</div>
</div>
<div style={{padding:"16px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"12px",flexWrap:"wrap"}}><span style={{font:"400 14px/1.4 var(--font-sans)",color:"var(--text-body)"}}>Identity verification</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Didit</span>
</div>
<div style={{display:"flex",alignItems:"center",gap:"10px",font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}><Icon name="corner-down-right" size={16} />During implementation, engineering shipped signing with</div>
<div style={{padding:"16px",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-sm)",font:"600 15px/1.3 var(--font-sans)"}}>Documenso + DocuSeal</div>
</figure>
</article>
<article aria-labelledby="w2" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,440px),1fr))",gap:"clamp(32px,5vw,72px)",alignItems:"center",padding:"56px 0",borderTop:"1px solid var(--border)"}}><figure style={{margin:"0",padding:"clamp(20px,3vw,32px)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"18px"}}><figcaption style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}><span>Two builders → one</span>
<span style={{fontWeight:"500",textTransform:"none",letterSpacing:"0"}}>Illustrative</span>
</figcaption>
<div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"10px"}}><div style={{padding:"14px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"500 13px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Dropdown builder</span>
<span style={{height:"8px",borderRadius:"4px",background:"var(--border-soft)"}}></span>
<span style={{height:"8px",width:"70%",borderRadius:"4px",background:"var(--border-soft)"}}></span>
<span style={{height:"8px",width:"85%",borderRadius:"4px",background:"var(--border-soft)"}}></span>
</div>
<div style={{padding:"14px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"500 13px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Node builder</span>
<span style={{display:"flex",alignItems:"center",gap:"6px"}}><span style={{width:"18px",height:"18px",borderRadius:"5px",border:"1.5px solid var(--border-strong)"}}></span>
<span style={{flex:"1",height:"1.5px",background:"var(--border-strong)"}}></span>
<span style={{width:"18px",height:"18px",borderRadius:"5px",border:"1.5px solid var(--border-strong)"}}></span>
<span style={{flex:"1",height:"1.5px",background:"var(--border-strong)"}}></span>
<span style={{width:"18px",height:"18px",borderRadius:"5px",border:"1.5px solid var(--border-strong)"}}></span>
</span>
</div>
</div>
<div style={{display:"flex",justifyContent:"center",color:"var(--text-muted)"}}><Icon name="arrow-down" size={18} /></div>
<div style={{padding:"18px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",display:"grid",gridTemplateColumns:"minmax(0,1.3fr) minmax(0,1fr)",gap:"14px",alignItems:"center"}}><div style={{display:"flex",alignItems:"center",gap:"6px"}}><span style={{width:"26px",height:"26px",borderRadius:"7px",background:"var(--surface-card)",border:"1.5px solid var(--text-strong)"}}></span>
<span style={{flex:"1",height:"1.5px",background:"var(--text-strong)"}}></span>
<span style={{width:"26px",height:"26px",borderRadius:"7px",background:"var(--foreground)"}}></span>
<span style={{flex:"1",height:"1.5px",background:"var(--text-strong)"}}></span>
<span style={{width:"26px",height:"26px",borderRadius:"7px",background:"var(--surface-card)",border:"1.5px solid var(--text-strong)"}}></span>
</div>
<div style={{padding:"10px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 11px/1.2 var(--font-sans)",color:"var(--text-strong)"}}>Selected node</span>
<span style={{height:"7px",borderRadius:"4px",background:"var(--border)"}}></span>
<span style={{height:"7px",width:"65%",borderRadius:"4px",background:"var(--border)"}}></span>
</div>
</div>
<p style={{margin:"0",font:"500 14px/1.4 var(--font-sans)",color:"var(--text-strong)",textAlign:"center"}}>One visual builder, configured at the node</p>
</figure>
<div style={{display:"flex",flexDirection:"column",gap:"24px"}}><div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)"}}><span>02</span>
<span style={{color:"var(--border-strong)"}}>/</span>
<span>Migranium</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}><h3 id="w2" style={{margin:"0",font:"600 clamp(30px,3.6vw,44px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>Patient Journeys</h3>
<p style={{margin:"0",font:"400 italic clamp(22px,2.2vw,26px)/1.3 var(--serif)",color:"var(--text-body)"}}>One builder for complex patient workflows</p>
</div>
<dl style={{margin:"0",display:"flex",flexDirection:"column",gap:"14px"}}><div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>Problem</dt>
<dd style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>Two prospective clients needed to coordinate care across appointments, tests, forms, and clinical decisions.</dd>
</div>
<div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>Role</dt>
<dd style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>Product definition, workflow architecture, product design, and prototyping</dd>
</div>
<div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>Decision</dt>
<dd style={{margin:"0",font:"500 15px/1.6 var(--font-sans)",color:"var(--text-strong)"}}>Combined two proposed builders into one visual builder with node-level configuration, then demonstrated it to a prospective client in an interactive prototype.</dd>
</div>
<div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>Status</dt>
<dd style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>Handed over to engineering</dd>
</div>
</dl>
<Link to="/work/patient-journeys" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"600 16px/1.3 var(--font-sans)",color:"var(--text-strong)",textDecoration:"underline",textDecorationColor:"var(--border-strong)",textUnderlineOffset:"6px",padding:"8px 0"}}>Read the Patient Journeys case study<Icon name="arrow-right" size={18} /></Link>
</div>
</article>
<article aria-labelledby="w3" style={{marginTop:"8px",padding:"clamp(32px,5vw,64px)",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-md)",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,400px),1fr))",gap:"clamp(32px,5vw,72px)",alignItems:"center"}}><div style={{display:"flex",flexDirection:"column",gap:"24px"}}><div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#b9cdb9"}}><span>03</span>
<span style={{opacity:".6"}}>/</span>
<span>RFA Capital Advisors · Contract</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}><h3 id="w3" style={{margin:"0",font:"600 clamp(30px,3.6vw,44px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"#f6f3eb"}}>RFA Capital Advisors</h3>
<p style={{margin:"0",font:"400 italic clamp(22px,2.2vw,26px)/1.3 var(--serif)",color:"#dfe6d6"}}>Four connected platforms, delivered in two months</p>
</div>
<dl style={{margin:"0",display:"flex",flexDirection:"column",gap:"14px"}}><div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"#b9cdb9"}}>Problem</dt>
<dd style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"#e8ece2"}}>The firm wanted a refreshed website plus capabilities it didn’t yet have: a client portal, a mobile app, and a CMS.</dd>
</div>
<div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"#b9cdb9"}}>Role</dt>
<dd style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"#e8ece2"}}>Contract Product Lead & Website Designer, leading a team of four</dd>
</div>
<div style={{display:"grid",gridTemplateColumns:"96px minmax(0,1fr)",gap:"16px"}}><dt style={{font:"600 13px/1.6 var(--font-sans)",color:"#b9cdb9"}}>Outcome</dt>
<dd style={{margin:"0",font:"500 15px/1.6 var(--font-sans)",color:"#f6f3eb"}}>Delivered within the planned two-month timeline, handed over, and live with little ongoing maintenance.</dd>
</div>
</dl>
<Link to="/work/rfa-capital-advisors" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"600 16px/1.3 var(--font-sans)",color:"#f6f3eb",textDecoration:"underline",textDecorationColor:"#7f9a86",textUnderlineOffset:"6px",padding:"8px 0"}}>Read the RFA case study<Icon name="arrow-right" size={18} /></Link>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"20px"}}><div style={{display:"flex",alignItems:"baseline",gap:"14px",flexWrap:"wrap"}}><span style={{font:"600 clamp(72px,10vw,128px)/0.9 var(--font-sans)",letterSpacing:"-0.05em",color:"#f6f3eb"}}>2</span>
<span style={{font:"400 italic clamp(28px,3vw,40px)/1 var(--serif)",color:"#dfe6d6"}}>months, four platforms</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"8px"}}><div style={{padding:"14px 16px",border:"1px solid #4c6a57",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"#f6f3eb"}}>Corporate website</div>
<div style={{padding:"14px 16px",border:"1px solid #4c6a57",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"#f6f3eb"}}>Content management</div>
<div style={{padding:"14px 16px",border:"1px solid #4c6a57",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"#f6f3eb"}}>Client portal</div>
<div style={{padding:"14px 16px",border:"1px solid #4c6a57",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"#f6f3eb"}}>Mobile app</div>
</div>
</div>
</article>
</section>

<section aria-labelledby="how-title" style={{maxWidth:"1200px",margin:"0 auto",padding:"clamp(72px,10vw,128px) clamp(20px,4vw,48px) 48px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"clamp(32px,6vw,96px)",alignItems:"start"}}><div style={{display:"flex",flexDirection:"column",gap:"16px"}}><h2 id="how-title" style={{margin:"0",font:"600 clamp(32px,4.4vw,52px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>How I <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:"400"}}>work</span>
</h2>
<p style={{margin:"0",maxWidth:"380px",font:"400 16px/1.6 var(--font-sans)",color:"var(--text-muted)"}}>The same habits run through each project here, from the first client conversation to the engineering handoff.</p>
</div>
<ol style={{margin:"0",padding:"0",listStyle:"none",display:"flex",flexDirection:"column"}}><li style={{display:"grid",gridTemplateColumns:"44px minmax(0,1fr)",gap:"12px",padding:"24px 0",borderTop:"1px solid var(--border)"}}><span style={{font:"400 italic 22px/1.2 var(--serif)",color:"var(--primary)"}}>01</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><h3 style={{margin:"0",font:"600 19px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Understand the real workflow</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>Before deciding on screens, I work out how the work actually moves between people, modules, and decisions.</p>
</div>
</li>
<li style={{display:"grid",gridTemplateColumns:"44px minmax(0,1fr)",gap:"12px",padding:"24px 0",borderTop:"1px solid var(--border)"}}><span style={{font:"400 italic 22px/1.2 var(--serif)",color:"var(--primary)"}}>02</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><h3 style={{margin:"0",font:"600 19px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Translate ambiguity into decisions</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>I turn a client request or an early concept into requirements, scope, and product decisions a team can build against.</p>
</div>
</li>
<li style={{display:"grid",gridTemplateColumns:"44px minmax(0,1fr)",gap:"12px",padding:"24px 0",borderTop:"1px solid var(--border)"}}><span style={{font:"400 italic 22px/1.2 var(--serif)",color:"var(--primary)"}}>03</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><h3 style={{margin:"0",font:"600 19px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Weigh technical and commercial constraints</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>I read API documentation and compare providers on capability and cost, so build-versus-buy choices fit the stage of the business.</p>
</div>
</li>
<li style={{display:"grid",gridTemplateColumns:"44px minmax(0,1fr)",gap:"12px",padding:"24px 0",borderTop:"1px solid var(--border)"}}><span style={{font:"400 italic 22px/1.2 var(--serif)",color:"var(--primary)"}}>04</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><h3 style={{margin:"0",font:"600 19px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Align stakeholders and engineering</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>I work scope through with stakeholders and keep a clear line between product decisions and engineering’s implementation.</p>
</div>
</li>
<li style={{display:"grid",gridTemplateColumns:"44px minmax(0,1fr)",gap:"12px",padding:"24px 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><span style={{font:"400 italic 22px/1.2 var(--serif)",color:"var(--primary)"}}>05</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><h3 style={{margin:"0",font:"600 19px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Follow through to handoff and delivery</h3>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>Prototypes, recorded walkthroughs, and specified behaviour carry the intent from concept into delivery.</p>
</div>
</li>
</ol>
</section>

<section id="about" aria-labelledby="about-title" style={{scrollMarginTop:"72px",maxWidth:"1200px",margin:"0 auto",padding:"clamp(72px,10vw,128px) clamp(20px,4vw,48px) 48px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"clamp(32px,6vw,96px)",alignItems:"start"}}><h2 id="about-title" style={{margin:"0",font:"600 clamp(32px,4.4vw,52px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>About</h2>
<div style={{display:"flex",flexDirection:"column",gap:"40px",minWidth:"0"}}><p style={{margin:"0",font:"400 clamp(19px,1.9vw,23px)/1.55 var(--font-sans)",color:"var(--text-strong)",textWrap:"pretty"}}>I’m a Technical Product Manager with 3+ years of experience across product management, business analysis, and product design, and a degree in electrical and electronics engineering.</p>
<div style={{display:"flex",flexDirection:"column",gap:"16px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)"}}>At Migranium · platform-wide</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:"1px",background:"var(--border)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",overflow:"hidden"}}><div style={{padding:"22px",background:"var(--background)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 32px/1.1 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>14+</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>integrated modules across the healthcare platform I lead product strategy and delivery for</span>
</div>
<div style={{padding:"22px",background:"var(--background)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 32px/1.1 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>5 + 1</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>five engineers and one designer on the team I work with</span>
</div>
<div style={{padding:"22px",background:"var(--background)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 32px/1.1 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>5 → 1</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>fragmented operational workflows consolidated into one platform</span>
</div>
<div style={{padding:"22px",background:"var(--background)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 32px/1.1 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>20% → {'<'}6%</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>patient-facing dead-click rate, through behavioural analytics and iterative testing</span>
</div>
</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:"32px"}}><div style={{display:"flex",flexDirection:"column",gap:"12px"}}><h3 style={{margin:"0",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)"}}>Education</h3>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}><span style={{font:"600 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}>Postgraduate Diploma in Management</span>
<span style={{font:"400 14px/1.45 var(--font-sans)",color:"var(--text-muted)"}}>Ajayi Crowther University · 2025</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}><span style={{font:"600 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}>B.Eng. Electrical and Electronics Engineering</span>
<span style={{font:"400 14px/1.45 var(--font-sans)",color:"var(--text-muted)"}}>Covenant University · 2024</span>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px"}}><h3 style={{margin:"0",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)"}}>Capabilities & tools</h3>
<p style={{margin:"0",font:"400 15px/1.7 var(--font-sans)",color:"var(--text-body)"}}>Product discovery · Requirements definition · Roadmapping · Workflow architecture · API evaluation · Stakeholder management · Systems thinking</p>
<p style={{margin:"0",font:"400 14px/1.7 var(--font-sans)",color:"var(--text-muted)"}}>Figma, Microsoft Clarity, Heap, Jira, Asana, Plane, Claude, Codex</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="exp-title" style={{maxWidth:"1200px",margin:"0 auto",padding:"clamp(56px,8vw,96px) clamp(20px,4vw,48px) 48px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))",gap:"clamp(32px,6vw,96px)",alignItems:"start"}}><h2 id="exp-title" style={{margin:"0",font:"600 clamp(32px,4.4vw,52px)/1.08 var(--font-sans)",letterSpacing:"-0.03em",color:"var(--text-strong)"}}>Experience</h2>
<ol style={{margin:"0",padding:"0",listStyle:"none",display:"flex",flexDirection:"column",minWidth:"0"}}><li style={{display:"flex",flexWrap:"wrap",gap:"4px 24px",padding:"22px 0",borderTop:"1px solid var(--border)"}}><span style={{flex:"0 0 170px",font:"500 14px/1.5 var(--font-sans)",color:"var(--text-muted)"}}>Aug 2025 – Present</span>
<div style={{flex:"1 1 280px",minWidth:"0",display:"flex",flexDirection:"column",gap:"3px"}}><span style={{font:"600 17px/1.35 var(--font-sans)",color:"var(--text-strong)"}}>Migranium</span>
<span style={{font:"400 15px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Lead Product Manager & Product Designer</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-muted)"}}>Main role, on an AI-powered healthcare SaaS platform.</span>
</div>
</li>
<li style={{display:"flex",flexWrap:"wrap",gap:"4px 24px",padding:"22px 0",borderTop:"1px solid var(--border)"}}><span style={{flex:"0 0 170px",font:"500 14px/1.5 var(--font-sans)",color:"var(--text-muted)"}}>2026</span>
<div style={{flex:"1 1 280px",minWidth:"0",display:"flex",flexDirection:"column",gap:"3px"}}><span style={{font:"600 17px/1.35 var(--font-sans)",color:"var(--text-strong)"}}>RFA Capital Advisors</span>
<span style={{font:"400 15px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Contract Product Lead</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-muted)"}}>A separate contract engagement alongside my main role.</span>
</div>
</li>
<li style={{display:"flex",flexWrap:"wrap",gap:"4px 24px",padding:"22px 0",borderTop:"1px solid var(--border)"}}><span style={{flex:"0 0 170px",font:"500 14px/1.5 var(--font-sans)",color:"var(--text-muted)"}}>May – Jul 2025</span>
<div style={{flex:"1 1 280px",minWidth:"0",display:"flex",flexDirection:"column",gap:"3px"}}><span style={{font:"600 17px/1.35 var(--font-sans)",color:"var(--text-strong)"}}>Trail by Garden Ventures</span>
<span style={{font:"400 15px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Contract Product Designer</span>
</div>
</li>
<li style={{display:"flex",flexWrap:"wrap",gap:"4px 24px",padding:"22px 0",borderTop:"1px solid var(--border)"}}><span style={{flex:"0 0 170px",font:"500 14px/1.5 var(--font-sans)",color:"var(--text-muted)"}}>Sep 2023 – May 2025</span>
<div style={{flex:"1 1 280px",minWidth:"0",display:"flex",flexDirection:"column",gap:"3px"}}><span style={{font:"600 17px/1.35 var(--font-sans)",color:"var(--text-strong)"}}>L’acardia Inc</span>
<span style={{font:"400 15px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Business Analyst</span>
</div>
</li>
<li style={{display:"flex",flexWrap:"wrap",gap:"4px 24px",padding:"22px 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><span style={{flex:"0 0 170px",font:"500 14px/1.5 var(--font-sans)",color:"var(--text-muted)"}}>Mar – Aug 2023</span>
<div style={{flex:"1 1 280px",minWidth:"0",display:"flex",flexDirection:"column",gap:"3px"}}><span style={{font:"600 17px/1.35 var(--font-sans)",color:"var(--text-strong)"}}>Ouranos Technologies Limited</span>
<span style={{font:"400 15px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Technical Intern</span>
</div>
</li>
</ol>
</section>

<ContactSection />

</main>
<SiteFooter current="home" />
</div>
  );
}
