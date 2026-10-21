import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Badge } from '../components/ds.jsx';
import CaseLayout from '../components/CaseLayout.jsx';
import useDocumentMeta from '../components/useDocumentMeta.js';

const TOC = [{"id":"s1","label":"Beyond the website"},{"id":"s2","label":"My ownership"},{"id":"s3","label":"Starting with the website"},{"id":"s4","label":"Choosing an existing CMS"},{"id":"s5","label":"Organizing delivery"},{"id":"s6","label":"The ecosystem"},{"id":"s7","label":"Outcome"},{"id":"s8","label":"Reflection"}];

export default function RFA() {
  useDocumentMeta("RFA Capital Advisors — Kolom Oden-Ikpi", "Case study: leading a two-month contract engagement for RFA Capital Advisors across a corporate website, client portal, mobile app, and CMS.");
  return (
<CaseLayout current="rfa" toc={TOC} hero={<><section aria-labelledby="cs-title" style={{maxWidth:"1200px",margin:"0 auto",padding:"40px clamp(20px,4vw,48px) 56px",display:"flex",flexDirection:"column",gap:"28px"}}><Link to="/#work" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-muted)",textDecoration:"none",padding:"6px 0"}}><Icon name="arrow-left" size={16} />Selected work</Link>
<div style={{font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)",paddingTop:"24px"}}>RFA Capital Advisors / Digital transformation</div>
<h1 id="cs-title" style={{margin:"0",maxWidth:"980px",font:"600 clamp(40px,6.2vw,76px)/1.03 var(--font-sans)",letterSpacing:"-0.04em",color:"var(--text-strong)",textWrap:"balance"}}>Four connected platforms, <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:"400",letterSpacing:"-0.01em"}}>delivered in two months</span>
</h1>
<p style={{margin:"0",maxWidth:"760px",font:"400 clamp(18px,1.8vw,21px)/1.6 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I led a contract engagement to refresh RFA Capital Advisors’ website and introduce a client portal, mobile application, and content management system. The team delivered within the planned two-month timeline, completed handoff, and launched an ecosystem that has required little ongoing maintenance.</p>
<dl style={{margin:"12px 0 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:"24px 40px",padding:"28px 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Role</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Contract Product Lead & Website Designer</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Company</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>RFA Capital Advisors</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Scope</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Corporate website, client portal, mobile application, and CMS</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Team</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>One product manager, one frontend engineer, one full-stack engineer, and one backend engineer, led by me</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Timeline</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Two months</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Status</dt>
<dd style={{margin:"0"}}><Badge variant="dark">Live</Badge>
</dd>
</div>
</dl>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,360px),1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"center",padding:"clamp(24px,4vw,48px)",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-md)"}}><div style={{display:"flex",flexDirection:"column",gap:"14px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#b9cdb9"}}>The central decision</div>
<p style={{margin:"0",font:"400 italic clamp(28px,3.2vw,40px)/1.2 var(--serif)",color:"#f6f3eb",textWrap:"balance"}}>Use an existing CMS, and spend the fixed delivery window on the parts that needed to be built.</p>
</div>
<div style={{display:"flex",alignItems:"baseline",gap:"16px",flexWrap:"wrap"}}><span style={{font:"600 clamp(88px,12vw,148px)/0.9 var(--font-sans)",letterSpacing:"-0.05em",color:"#f6f3eb"}}>2</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"400 italic clamp(28px,3vw,40px)/1 var(--serif)",color:"#dfe6d6"}}>months</span>
<span style={{font:"400 15px/1.45 var(--font-sans)",color:"#c9d6c8"}}>Delivered within the agreed window, across four platforms</span>
</div>
</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"16px"}}><div style={{padding:"28px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>What I owned</h2>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"6px",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}><li>Product direction and delivery</li>
<li>Website design</li>
<li>Stakeholder reviews with the client</li>
<li>Coordinating the team and workstreams</li>
<li>Scope and implementation decisions</li>
<li>Completion and handoff</li>
</ul>
</div>
<div style={{padding:"28px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>What engineering owned</h2>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>Implementation across the website, CMS, client portal, and mobile app. This was the engagement’s own team, separate from my team at Migranium.</p>
</div>
</div>
</section>
</>}>
<section id="s1" aria-labelledby="h1s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"56px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>01</div>
<h2 id="h1s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Expanding beyond the corporate website</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>RFA Capital Advisors wanted to revamp its website and add capabilities it did not yet have.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The scope included a mobile application through which clients could monitor their investments, a corresponding web client portal, and a CMS that staff could use to manage and publish website content.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>This created four connected delivery areas, each serving a different part of the client’s digital experience.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I took on the engagement as contract Product Lead alongside my main role at Migranium.</p>
</section>

<section id="s2" aria-labelledby="h2s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>02</div>
<h2 id="h2s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>My ownership</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I led product direction and delivery and designed the website.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I coordinated a team comprising a product manager, a frontend engineer, a full-stack engineer, and a backend engineer.</p>
<figure style={{margin:"14px 0",padding:"clamp(20px,3vw,28px)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"12px"}}><div style={{padding:"16px 18px",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-sm)",display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:"6px 16px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Me · Contract Product Lead & Website Designer</span>
<span style={{font:"400 14px/1.3 var(--font-sans)",color:"#c9d6c8"}}>Direction, design, coordination, handoff</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,190px),1fr))",gap:"10px"}}><div style={{padding:"16px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>Product</span>
<span style={{font:"500 14px/1.4 var(--font-sans)",color:"var(--text-strong)"}}>Product manager</span>
</div>
<div style={{padding:"16px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>Website & CMS</span>
<span style={{font:"500 14px/1.4 var(--font-sans)",color:"var(--text-strong)"}}>Frontend engineer · Full-stack engineer</span>
</div>
<div style={{padding:"16px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>Portal & mobile app</span>
<span style={{font:"500 14px/1.4 var(--font-sans)",color:"var(--text-strong)"}}>Backend engineer, AI-assisted</span>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>The engagement team and how the work was distributed.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>My role connected the client’s requirements to the work being delivered across the team. I managed stakeholder reviews, coordinated the different workstreams, made scope and implementation decisions, and oversaw the final handoff.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The agreed delivery window was two months.</p>
</section>

<section id="s3" aria-labelledby="h3s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>03</div>
<h2 id="h3s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Starting with the website</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>We began with the website design.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I developed the experience and worked through a few iterations with the client. The design was approved quickly, giving the team an agreed direction for implementation.</p>
<figure style={{margin:"14px 0",display:"flex",flexDirection:"column",gap:"10px"}}><ol style={{margin:"0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,150px),1fr))",gap:"8px"}}><li style={{padding:"16px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"400 italic 18px/1 var(--serif)",color:"var(--primary)"}}>1</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Website design</span>
</li>
<li style={{padding:"16px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"400 italic 18px/1 var(--serif)",color:"var(--primary)"}}>2</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Client iterations and approval</span>
</li>
<li style={{padding:"16px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"400 italic 18px/1 var(--serif)",color:"var(--primary)"}}>3</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Website, CMS, portal, and app</span>
</li>
<li style={{padding:"16px",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"400 italic 18px/1 var(--serif)",color:"#b9cdb9"}}>4</span>
<span style={{font:"600 15px/1.3 var(--font-sans)"}}>Handoff and launch</span>
</li>
</ol>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Delivery sequence within the two-month window. Phase lengths are not shown.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>From there, the work progressed across the wider ecosystem: publishing tools for the website and client access through web and mobile.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The website, portal, mobile app, and CMS were distinct parts of the scope, but they needed to be managed as one engagement.</p>
</section>

<section id="s4" aria-labelledby="h4s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>04</div>
<h2 id="h4s" style={{margin:"0 0 6px",font:"600 clamp(30px,3.6vw,42px)/1.15 var(--font-sans)",letterSpacing:"-0.025em",color:"var(--text-strong)",textWrap:"balance"}}>Choosing an existing CMS</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>One decision was to use an existing CMS rather than design and build a bespoke content-management interface.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The client needed a way to manage and publish content. Building a custom interface for that requirement would have added design and implementation work within a fixed delivery window.</p>
<figure style={{margin:"14px 0",display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"12px"}}><div style={{padding:"24px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"10px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Not chosen</span>
<span style={{font:"600 20px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Bespoke CMS interface</span>
<p style={{margin:"0",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}>Extra design and implementation work inside a fixed window.</p>
</div>
<div style={{padding:"23px",border:"2px solid var(--foreground)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"10px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>Chosen</span>
<span style={{font:"600 20px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Existing CMS</span>
<p style={{margin:"0",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}>Meets the publishing requirement and reserves effort for the website, portal, and app.</p>
</div>
</div>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I directed engineering to use an existing solution, allowing us to meet the publishing requirement while reserving effort for the other parts of the engagement.</p>
<blockquote style={{margin:"28px 0 8px",padding:"28px 0 0",borderTop:"1px solid var(--border)"}}><p style={{margin:"0",font:"400 italic clamp(26px,3vw,36px)/1.25 var(--serif)",color:"var(--text-strong)",textWrap:"balance"}}>“The publishing requirement did not need a bespoke interface to be useful to the client.”</p>
</blockquote>
</section>

<section id="s5" aria-labelledby="h5s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>05</div>
<h2 id="h5s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Organizing delivery across the team</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I worked with the frontend and full-stack engineers on the website and CMS.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The backend engineer used AI-assisted development on the client portal and mobile-app work.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>My responsibility was to lead and coordinate delivery across these areas. Engineering owned the implementation.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The work distribution allowed the team to progress across the different platforms within the same engagement, while client reviews kept the direction aligned.</p>
</section>

<section id="s6" aria-labelledby="h6s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>06</div>
<h2 id="h6s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>The connected ecosystem</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The four surfaces served complementary purposes.</p>
<figure style={{margin:"8px 0",padding:"clamp(20px,3vw,32px)",background:"var(--surface-soft)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"16px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))",gap:"16px"}}><div style={{display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Public presence & publishing</span>
<div style={{padding:"18px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",gap:"14px",alignItems:"flex-start"}}><Icon name="globe" size={20} strokeWidth={1.5} /><div style={{display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 16px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Corporate website</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>The refreshed public-facing presence for RFA Capital Advisors.</span>
</div>
</div>
<div style={{display:"flex",alignItems:"center",gap:"8px",paddingLeft:"26px",font:"400 13px/1.3 var(--font-sans)",color:"var(--text-muted)"}}><Icon name="arrow-up" size={14} />publishes to</div>
<div style={{padding:"18px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",gap:"14px",alignItems:"flex-start"}}><Icon name="file-pen-line" size={20} strokeWidth={1.5} /><div style={{display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 16px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Content management system</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Tools for managing and publishing website content.</span>
</div>
</div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Client access</span>
<div style={{padding:"18px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",gap:"14px",alignItems:"flex-start"}}><Icon name="monitor" size={20} strokeWidth={1.5} /><div style={{display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 16px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Client portal</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Web access to the client experience.</span>
</div>
</div>
<div style={{display:"flex",alignItems:"center",gap:"8px",paddingLeft:"26px",font:"400 13px/1.3 var(--font-sans)",color:"var(--text-muted)"}}><Icon name="arrow-up-down" size={14} />corresponding experience</div>
<div style={{padding:"18px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",gap:"14px",alignItems:"flex-start"}}><Icon name="smartphone" size={20} strokeWidth={1.5} /><div style={{display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 16px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Mobile application</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>A way for clients to monitor their investments through mobile.</span>
</div>
</div>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>A product-scope illustration, not a verified technical architecture.</figcaption>
</figure>
</section>

<section id="s7" aria-labelledby="h7s" style={{scrollMarginTop:"96px",marginTop:"72px",padding:"clamp(24px,4vw,44px)",background:"var(--surface-soft)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"18px"}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}><span style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>07</span>
<Badge variant="dark">Live</Badge>
</div>
<h2 id="h7s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>Outcome</h2>
<p style={{margin:"0",font:"600 20px/1.5 var(--font-sans)",color:"var(--text-strong)",textWrap:"pretty"}}>We completed the engagement within the proposed two-month timeline and successfully handed it over.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The client’s platform is live and has required little ongoing maintenance since launch.</p>
<h3 style={{margin:"4px 0 0",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-muted)"}}>Confirmed outcomes</h3>
<ul style={{margin:"0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"8px"}}><li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Delivery within the agreed two-month window</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Completion across the website, CMS, web client portal, and mobile application</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Successful client handoff</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />A live platform with limited ongoing maintenance needs</li>
</ul>
</section>

<section id="s8" aria-labelledby="h8s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>08</div>
<h2 id="h8s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>Reflection</h2>
<p style={{margin:"0",font:"400 italic clamp(24px,2.6vw,30px)/1.3 var(--serif)",color:"var(--text-strong)",textWrap:"pretty"}}>This engagement required product leadership across several connected delivery areas, alongside hands-on website design.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The existing-CMS decision helped keep the publishing scope proportionate to the problem. Focused website iterations established an approved direction, while distributing work across the engineering team supported delivery within the agreed window.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The result was a completed engagement that expanded the client’s digital capabilities beyond its website.</p>
</section>

</CaseLayout>
  );
}
