import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Badge } from '../components/ds.jsx';
import CaseLayout from '../components/CaseLayout.jsx';
import useDocumentMeta from '../components/useDocumentMeta.js';

const TOC = [{"id":"s1","label":"An earlier marketplace"},{"id":"s2","label":"Requirements first"},{"id":"s3","label":"A consistent design direction"},{"id":"s4","label":"An explorable experience"},{"id":"s5","label":"Available for evaluation"},{"id":"s6","label":"My contribution"},{"id":"s7","label":"Current outcome"},{"id":"s8","label":"Reflection"}];

export default function Titaaria() {
  useDocumentMeta("Titaaria — Kolom Oden-Ikpi", "Case study: turning a substantial social-commerce PRD into journeys, a design system, and an interactive proof of concept for Titaaria.");
  return (
<CaseLayout current="titaaria" toc={TOC} hero={<><section aria-labelledby="cs-title" style={{maxWidth:"1200px",margin:"0 auto",padding:"40px clamp(20px,4vw,48px) 56px",display:"flex",flexDirection:"column",gap:"28px"}}><Link to="/#work" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-muted)",textDecoration:"none",padding:"6px 0"}} className="h6"><Icon name="arrow-left" size={16} />Selected work</Link>
<div style={{font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#1d4f91",paddingTop:"24px"}}>Titaaria / Social commerce</div>
<h1 id="cs-title" style={{margin:"0",maxWidth:"980px",font:"600 clamp(40px,6.2vw,76px)/1.03 var(--font-sans)",letterSpacing:"-0.04em",color:"var(--text-strong)",textWrap:"balance"}}>Making a social-commerce platform tangible before full development</h1>
<p style={{margin:"0",maxWidth:"760px",font:"400 clamp(18px,1.8vw,21px)/1.6 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Titaaria brings social interaction and commerce into one product concept for Christian creators and their communities. I translated a substantial PRD into user journeys, a design system, and an interactive proof of concept that stakeholders could explore before committing to full development.</p>
<img src="/assets/covers/titaaria.jpg" alt="" style={{display:"block",width:"100%",aspectRatio:"21/9",objectFit:"cover",borderRadius:"var(--radius-md)",background:"var(--surface-strong)"}} /><dl style={{margin:"12px 0 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:"24px 40px",padding:"28px 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Role</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Product Management, Product Design & Limited Frontend Work</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Scope</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Requirements analysis, journey mapping, design system, design requirements, interactive prototyping, and proof-of-concept deployment</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Status</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Ongoing</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Deliverable</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Interactive proof of concept on a private server</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Purpose</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Product evaluation and support for funding discussions</dd>
</div>
</dl>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,360px),1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"center",padding:"clamp(24px,4vw,48px)",background:"#1d4f91",color:"#ffffff",borderRadius:"var(--radius-md)"}}><div style={{display:"flex",flexDirection:"column",gap:"14px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#cfe0f5"}}>The central decision</div>
<p style={{margin:"0",font:"500 clamp(26px,3vw,36px)/1.22 var(--font-sans)",letterSpacing:"-0.02em",color:"#ffffff",textWrap:"balance"}}>Turn a substantial PRD into a structured, explorable proof of concept — requirements first, then journeys, then a design system.</p>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}><div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.12)",color:"#ffffff",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>PRD</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.12)",color:"#ffffff",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>12–15 journey maps</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.12)",color:"#ffffff",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Design system + requirements</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#ffffff",color:"#1d4f91",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Interactive proof of concept</span>
</div>
</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"16px"}}><div style={{padding:"28px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>What I owned</h2>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"6px",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}><li>Reviewing and interpreting the PRD</li>
<li>User-journey maps</li>
<li>The design system and design requirements</li>
<li>Directing AI-assisted interface creation</li>
<li>Supporting imagery</li>
<li>Product design and limited frontend work</li>
<li>Deploying the proof of concept for review</li>
</ul>
</div>
<div style={{padding:"28px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Not my responsibility</h2>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>The production backend. Remaining work includes revisions, proper testing, and backend implementation.</p>
</div>
</div>
</section>
</>}>
<section id="s1" aria-labelledby="h1s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"56px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>01</div>
<h2 id="h1s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Building on an earlier marketplace concept</h2>
<div style={{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap",padding:"14px 18px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",background:"#ffffff",alignSelf:"flex-start"}}><img src="/assets/logos/titaar.png" alt="Titaar" style={{height:"26px",width:"auto"}} /><span style={{font:"500 14px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>The earlier marketplace Titaaria developed from</span>
</div>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Titaaria developed from Titaar, an earlier e-commerce platform aimed at Christian content creators selling digital and physical products.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I had worked on Titaar approximately two years earlier, contributing user journeys, product design, feature definition, and some system-structure planning. That project was not completed.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Titaaria introduced a different direction: a social-commerce experience combining content discovery, community interaction, and buying and selling.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The concept drew on familiar qualities of social feeds, creator storefronts, and marketplaces. The challenge was to turn that broad idea into a coherent experience.</p>
</section>

<section id="s2" aria-labelledby="h2s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>02</div>
<h2 id="h2s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Understanding the requirements before generating screens</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I began by reading the PRD and used AI to help summarize and work through its contents.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>That supported the analysis, but the next task was product definition: understanding the different users, identifying their journeys, and deciding how those journeys should shape the experience.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I created approximately 12 to 15 user-journey maps covering roles and states such as:</p>
<figure style={{margin:"8px 0",padding:"clamp(20px,3vw,28px)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}><span>Journey-map overview · ~12–15 maps</span>
<span style={{fontWeight:"500",textTransform:"none",letterSpacing:"0"}}>Illustrative</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,150px),1fr))",gap:"8px"}}><div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#e8f0fa",color:"#1d4f91",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Content creators</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#e8f0fa",color:"#1d4f91",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Visitors not signed in</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#e8f0fa",color:"#1d4f91",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Organizations</span>
</div>
<div style={{padding:"14px 16px",borderRadius:"var(--radius-sm)",background:"#e8f0fa",color:"#1d4f91",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)"}}>Administrators</span>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Example user groups covered by the journey maps.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The journeys gave structure to the design work and helped connect the requirements to what people would actually do in the product.</p>
</section>

<section id="s3" aria-labelledby="h3s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>03</div>
<h2 id="h3s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Creating a consistent design direction</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Before generating the interface, I established a design system.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I took inspiration from how Airbnb handles its interface and combined that direction with shadcn components to suit Titaaria’s needs.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The aim was to give the product a coherent visual and interaction language across its different journeys.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I also created a design requirements document describing how the experience should be executed. Together with the PRD and journey maps, this provided a more structured foundation for Claude Design.</p>
<blockquote style={{margin:"28px 0 8px",padding:"28px 0 0",borderTop:"1px solid var(--border)"}}><p style={{margin:"0",font:"500 clamp(26px,3vw,36px)/1.25 var(--serif)",color:"var(--text-strong)",textWrap:"balance"}}>“The prototype started with requirements, journeys, and a design system—not a single prompt asking for a marketplace.”</p>
</blockquote>
</section>

<section id="s4" aria-labelledby="h4s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>04</div>
<h2 id="h4s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Using AI to build an experience people could explore</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I used the PRD and design requirements to guide Claude Design in creating the interface.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I then generated supporting imagery with ChatGPT to populate the experience. The purpose was to make the prototype feel concrete enough for someone to understand how the platform could work.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The result went beyond a sequence of static screens. People could explore actions such as creating posts, liking content, and commenting, and see the interface respond.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The prototype also included error feedback and demonstration flows for account-related interactions.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>These interactions used temporary browser state. Changes cleared on refresh, so the experience demonstrated behavior without representing a production backend.</p>
<figure style={{margin:"14px 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"12px"}}><div style={{padding:"23px",border:"2px solid #1d4f91",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"10px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#1d4f91"}}>Interactive proof of concept</span>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"4px",font:"400 15px/1.5 var(--font-sans)",color:"var(--text-body)"}}><li>Visible actions: posting, liking, commenting</li>
<li>Feedback and error states</li>
<li>Temporary state that clears on refresh</li>
</ul>
</div>
<div style={{padding:"24px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"10px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Production development · still required</span>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"4px",font:"400 15px/1.5 var(--font-sans)",color:"var(--text-body)"}}><li>Backend implementation</li>
<li>Persistent data</li>
</ul>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>What the proof of concept demonstrates, and what it does not.</figcaption>
</figure>
</section>

<section id="s5" aria-labelledby="h5s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>05</div>
<h2 id="h5s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Making the concept available for evaluation</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I deployed the proof of concept to a friend’s private server so it could be reviewed outside the design environment.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>This created a tangible demonstration for stakeholder evaluation and funding discussions. Instead of relying only on a document describing the platform, we could show an experience people could navigate and test.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The proof of concept was intended to support the case for continuing the project. Funding has not been confirmed.</p>
</section>

<section id="s6" aria-labelledby="h6s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>06</div>
<h2 id="h6s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>My contribution</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I owned:</p>
<ul style={{margin:"4px 0",padding:"0",listStyle:"none",display:"flex",flexDirection:"column",borderTop:"1px solid var(--border)"}}><li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Reviewing and interpreting the PRD.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Using AI to support requirements analysis.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Creating approximately 12 to 15 user-journey maps.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Establishing the design system.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Producing the design requirements document.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Directing the AI-assisted interface creation.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Creating supporting imagery.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Product design and limited frontend work.</li>
<li style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Deploying the proof of concept for review.</li>
</ul>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I am not responsible for the production backend.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The remaining work includes revisions, proper testing, and backend implementation.</p>
</section>

<section id="s7" aria-labelledby="h7s" style={{scrollMarginTop:"96px",marginTop:"72px",padding:"clamp(24px,4vw,44px)",background:"var(--surface-soft)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"18px"}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}><span style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>07</span>
<Badge variant="dark">Ongoing · Proof of concept</Badge>
</div>
<h2 id="h7s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>Current outcome</h2>
<p style={{margin:"0",font:"600 20px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Titaaria is an ongoing project with an interactive proof of concept deployed on a private server.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The prototype makes the proposed experience explorable across several user journeys and demonstrates selected social interactions using temporary state.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>It provides a concrete foundation for evaluation and further development, rather than evidence of a launched platform or validated market demand.</p>
<h3 style={{margin:"4px 0 0",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-muted)"}}>Current deliverables</h3>
<ul style={{margin:"8px 0 0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:"8px"}}><li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Approximately 12 to 15 user-journey maps</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />A defined design system</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />A design requirements document</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />An interactive proof of concept</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Supporting generated imagery</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />A privately deployed demonstration</li>
</ul>
</section>

<section id="s8" aria-labelledby="h8s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>08</div>
<h2 id="h8s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Reflection</h2>
<p style={{margin:"0",font:"500 clamp(22px,2.4vw,28px)/1.35 var(--serif)",color:"var(--text-strong)",textWrap:"pretty"}}>The value of this approach came from the structure around the AI tools.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The PRD established the requirements. Journey mapping organized the experience around different users. The design system gave the interface consistency. The interactive prototype then made those decisions visible and testable.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>For a product with substantial scope, this provided a way to evaluate the experience before completing production engineering.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The next stage is to refine the prototype through review and testing, then connect the agreed experience to a production backend.</p>
</section>

</CaseLayout>
  );
}
