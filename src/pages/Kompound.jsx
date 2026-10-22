import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Badge } from '../components/ds.jsx';
import CaseLayout from '../components/CaseLayout.jsx';
import useDocumentMeta from '../components/useDocumentMeta.js';

const TOC = [{"id":"s1","label":"The original problem"},{"id":"s2","label":"Planning around roles"},{"id":"s3","label":"Beyond one estate"},{"id":"s4","label":"A prototype of behavior"},{"id":"s5","label":"My contribution"},{"id":"s6","label":"Outcome"},{"id":"s7","label":"Reflection"}];

export default function Kompound() {
  useDocumentMeta("Kompound — Kolom Oden-Ikpi", "Case study: turning an estate’s access-control brief into Kompound, an estate-management platform designed for multiple communities.");
  return (
<CaseLayout current="kompound" toc={TOC} hero={<><section aria-labelledby="cs-title" style={{maxWidth:"1200px",margin:"0 auto",padding:"40px clamp(20px,4vw,48px) 56px",display:"flex",flexDirection:"column",gap:"28px"}}><Link to="/#work" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-muted)",textDecoration:"none",padding:"6px 0"}} className="h5"><Icon name="arrow-left" size={16} />Selected work</Link>
<div style={{font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#6b3d1c",paddingTop:"24px"}}>Kompound / Estate management</div>
<h1 id="cs-title" style={{margin:"0",maxWidth:"980px",font:"600 clamp(40px,6.2vw,76px)/1.03 var(--font-sans)",letterSpacing:"-0.04em",color:"var(--text-strong)",textWrap:"balance"}}>From access control to a platform for estate operations</h1>
<p style={{margin:"0",maxWidth:"760px",font:"400 clamp(18px,1.8vw,21px)/1.6 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>An estate needed a better way to manage access after experiencing security concerns. I was contracted to lead product management and design, turning the initial request into an estate-management product designed to support multiple communities. Kompound is now live in its first estate.</p>
<img src="/assets/covers/kompound.jpg" alt="" style={{display:"block",width:"100%",aspectRatio:"21/9",objectFit:"cover",borderRadius:"var(--radius-md)",background:"var(--surface-strong)"}} /><dl style={{margin:"12px 0 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:"24px 40px",padding:"28px 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Role</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Contract Product Manager & Product Designer</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Scope</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Product planning, user journeys, scope expansion, interactive prototyping, and engineering handoff</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Users</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Residents, security guards, estate administrators, operational staff, and platform administrators</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Status</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Live in the initial estate</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Expansion</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Approximately four to five additional estates awaiting app-store approval before rollout</dd>
</div>
</dl>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,360px),1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"center",padding:"clamp(24px,4vw,48px)",background:"#6b3d1c",color:"#ffffff",borderRadius:"var(--radius-md)"}}><div style={{display:"flex",flexDirection:"column",gap:"14px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#f1d9c4"}}>The central decision</div>
<p style={{margin:"0",font:"500 clamp(26px,3vw,36px)/1.22 var(--font-sans)",letterSpacing:"-0.02em",color:"#ffffff",textWrap:"balance"}}>Expand a single-estate access brief into a broader product — and use an interactive prototype to work within the budget.</p>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}><div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.12)",color:"#ffffff",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Access control for one estate</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",opacity:".85"}}>The original brief</span>
</div>
<div aria-hidden="true" style={{display:"flex",justifyContent:"center",color:"#f1d9c4"}}><Icon name="arrow-down" size={18} /></div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#ffffff",color:"#6b3d1c",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Estate operations across multiple communities</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",opacity:".85"}}>The proposed direction</span>
</div>
</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"16px"}}><div style={{padding:"28px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>What I owned</h2>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"6px",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}><li>Product planning</li>
<li>User-journey definition across roles</li>
<li>The proposal to expand beyond one estate</li>
<li>The broader estate-management scope</li>
<li>End-to-end interactive prototyping</li>
<li>Communicating the intended experience to engineering</li>
</ul>
</div>
<div style={{padding:"28px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>What engineering owned</h2>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>The production implementation. The prototype served as a behavioral reference, not production code or a completed backend.</p>
</div>
</div>
</section>
</>}>
<section id="s1" aria-labelledby="h1s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"56px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>01</div>
<h2 id="h1s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>The original problem was access control</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The project began with an estate where a friend lived. Residents had noticed security issues and wanted a platform to help manage access.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The estate also wanted to own the solution rather than commit to the annual subscription cost of an existing service.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I was contracted to handle product management and product design. The immediate brief was an access-control product, but the work needed to account for the people who would operate it every day.</p>
</section>

<section id="s2" aria-labelledby="h2s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>02</div>
<h2 id="h2s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Planning around different responsibilities</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I began by mapping the user journeys across the platform’s different roles.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Security guards needed an experience suited to managing access. Residents needed to interact with estate services. Estate administrators and operational staff, including finance officers, needed tools for their responsibilities. The platform also needed a super-administrator role.</p>
<figure style={{margin:"14px 0",padding:"clamp(20px,3vw,28px)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}><span>Simplified product-role map</span>
<span style={{fontWeight:"500",textTransform:"none",letterSpacing:"0"}}>Illustrative</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#6b3d1c",color:"#ffffff",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Platform super administrator</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",opacity:".85"}}>Across the platform</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,150px),1fr))",gap:"8px"}}><div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#f6ece3",color:"#6b3d1c",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Estate administrators</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#f6ece3",color:"#6b3d1c",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Finance and operational staff</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#f6ece3",color:"#6b3d1c",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Security guards</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#f6ece3",color:"#6b3d1c",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Residents</span>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>One product, several distinct experiences. Detailed permissions are not shown.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>These were different experiences within one product. Planning the journeys helped me work through the responsibilities and interactions before producing the prototype.</p>
</section>

<section id="s3" aria-labelledby="h3s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>03</div>
<h2 id="h3s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Expanding the opportunity beyond one estate</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>As we developed the concept, I pushed to consider a broader opportunity: why build a product that could only serve one estate?</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>That changed the direction from a single-estate access-control tool to an estate-management platform designed for multiple communities.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I also advocated expanding the functionality beyond access control to address other estate needs.</p>
<figure style={{margin:"14px 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"12px"}}><div style={{padding:"24px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Original brief</span>
<span style={{font:"600 20px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Access control for one estate</span>
</div>
<div style={{padding:"23px",border:"2px solid #6b3d1c",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"12px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#6b3d1c"}}>Expanded scope</span>
<span style={{font:"600 20px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Estate operations across multiple communities</span>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"4px",font:"400 15px/1.5 var(--font-sans)",color:"var(--text-body)"}}><li>Access control</li>
<li>Vehicle registration</li>
<li>Payments and collections</li>
<li>Estate administration</li>
<li>Registered vendors and service requests</li>
</ul>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Product scope, not a description of backend architecture.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>For example, a resident with a plumbing or air-conditioning problem could request help through the app and connect with a registered vendor.</p>
<blockquote style={{margin:"28px 0 8px",padding:"28px 0 0",borderTop:"1px solid var(--border)"}}><p style={{margin:"0",font:"500 clamp(26px,3vw,36px)/1.25 var(--serif)",color:"var(--text-strong)",textWrap:"balance"}}>“The opportunity was to support the estate’s wider operations and make the product usable by other communities.”</p>
</blockquote>
</section>

<section id="s4" aria-labelledby="h4s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>04</div>
<h2 id="h4s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Choosing a prototype that demonstrated behavior</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The budget was limited. I decided against a separate Figma design phase and used Claude Design to create an end-to-end interactive prototype.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The important work still began with planning the journeys and defining how the product should behave.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The prototype went beyond linked screens. It demonstrated actions and their visible effects, giving the engineer a way to explore the intended behavior rather than infer it from static designs.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>This made the prototype a concrete implementation reference: the engineer could click through the experience and see how the parts were expected to work together.</p>
<p style={{margin:"0",padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"var(--surface-soft)",font:"400 14px/1.55 var(--font-sans)",color:"var(--text-body)"}}>Skipping a separate Figma stage was a delivery choice for this engagement’s budget, not a general rule.</p>
</section>

<section id="s5" aria-labelledby="h5s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>05</div>
<h2 id="h5s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>My contribution</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I owned:</p>
<ul style={{margin:"4px 0",padding:"0",listStyle:"none",display:"flex",flexDirection:"column",borderTop:"1px solid var(--border)"}}><li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Product planning.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />User-journey definition across the different roles.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />The proposal to expand beyond one estate.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />The broader estate-management scope.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />End-to-end interactive prototyping.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Communicating the intended experience to engineering.</li>
</ul>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Engineering owned the production implementation.</p>
<figure style={{margin:"14px 0",display:"flex",flexDirection:"column",gap:"10px"}}><ol style={{margin:"0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,120px),1fr))",gap:"8px"}}><li style={{padding:"14px",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",border:"1px solid var(--border)",color:"var(--text-strong)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"500 13px/1 var(--font-sans)",opacity:".75"}}>1</span>
<span style={{font:"600 14px/1.3 var(--font-sans)"}}>User journeys</span>
</li>
<li style={{padding:"14px",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",border:"1px solid var(--border)",color:"var(--text-strong)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"500 13px/1 var(--font-sans)",opacity:".75"}}>2</span>
<span style={{font:"600 14px/1.3 var(--font-sans)"}}>Product scope</span>
</li>
<li style={{padding:"14px",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",border:"1px solid var(--border)",color:"var(--text-strong)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"500 13px/1 var(--font-sans)",opacity:".75"}}>3</span>
<span style={{font:"600 14px/1.3 var(--font-sans)"}}>Interactive prototype</span>
</li>
<li style={{padding:"14px",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",border:"1px solid var(--border)",color:"var(--text-strong)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"500 13px/1 var(--font-sans)",opacity:".75"}}>4</span>
<span style={{font:"600 14px/1.3 var(--font-sans)"}}>Engineering implementation</span>
</li>
<li style={{padding:"14px",borderRadius:"var(--radius-sm)",background:"#6b3d1c",color:"#ffffff",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"500 13px/1 var(--font-sans)",opacity:".75"}}>5</span>
<span style={{font:"600 14px/1.3 var(--font-sans)"}}>Initial estate launch</span>
</li>
</ol>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Sequence only; stage durations are not shown.</figcaption>
</figure>
</section>

<section id="s6" aria-labelledby="h6s" style={{scrollMarginTop:"96px",marginTop:"72px",padding:"clamp(24px,4vw,44px)",background:"var(--surface-soft)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"18px"}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}><span style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>06</span>
<Badge variant="dark">Live in initial estate</Badge>
</div>
<h2 id="h6s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>Outcome</h2>
<p style={{margin:"0",font:"600 20px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>The estate accepted the product, and Kompound is live in the initial community.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Approximately four to five additional estates are waiting for app-store approval before the planned expansion.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The distinction matters: the initial deployment is live, while the additional estates represent an expansion pipeline rather than completed rollouts.</p>
<ul style={{margin:"8px 0 0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:"8px"}}><li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Accepted by the initial estate</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Live initial deployment</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Product scope expanded beyond access control</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Designed to support multiple estates</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Further estate deployments pending app-store approval</li>
</ul>
</section>

<section id="s7" aria-labelledby="h7s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>07</div>
<h2 id="h7s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Reflection</h2>
<p style={{margin:"0",font:"500 clamp(22px,2.4vw,28px)/1.35 var(--serif)",color:"var(--text-strong)",textWrap:"pretty"}}>Kompound showed how an initial client request could reveal a broader product opportunity.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>My contribution was both strategic and practical: I helped expand the product’s direction, then translated that scope into role-based journeys and an interactive experience engineering could use.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The prototype supported the engagement’s budget constraints while making the intended behavior tangible. It also provided a shared reference for moving from product definition into implementation.</p>
</section>

</CaseLayout>
  );
}
