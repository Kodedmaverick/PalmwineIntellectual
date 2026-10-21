import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Badge } from '../components/ds.jsx';
import CaseLayout from '../components/CaseLayout.jsx';
import useDocumentMeta from '../components/useDocumentMeta.js';

const TOC = [{"id":"s1","label":"The client need"},{"id":"s2","label":"Buy before design"},{"id":"s3","label":"Verification economics"},{"id":"s4","label":"Product connections"},{"id":"s5","label":"End-to-end design"},{"id":"s6","label":"The provider pivot"},{"id":"s7","label":"Outcome"},{"id":"s8","label":"Reflection"}];

export default function Documents() {
  useDocumentMeta("Documents — Kolom Oden-Ikpi", "Case study: building Migranium’s Documents module within startup constraints — provider research, identity verification economics, connected workflows, and an implementation pivot.");
  return (
<CaseLayout current="documents" toc={TOC} hero={<><section aria-labelledby="cs-title" style={{maxWidth:"1200px",margin:"0 auto",padding:"40px clamp(20px,4vw,48px) 56px",display:"flex",flexDirection:"column",gap:"28px"}}><Link to="/#work" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-muted)",textDecoration:"none",padding:"6px 0"}}><Icon name="arrow-left" size={16} />Selected work</Link>
<div style={{font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)",paddingTop:"24px"}}>Migranium / Documents</div>
<h1 id="cs-title" style={{margin:"0",maxWidth:"980px",font:"600 clamp(40px,6.2vw,76px)/1.03 var(--font-sans)",letterSpacing:"-0.04em",color:"var(--text-strong)",textWrap:"balance"}}>Building a document experience within <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:"400",letterSpacing:"-0.01em"}}>startup constraints</span>
</h1>
<p style={{margin:"0",maxWidth:"760px",font:"400 clamp(18px,1.8vw,21px)/1.6 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>A prospective fertility-clinic client needed a way to manage sensitive documents. I led product definition and design for Migranium’s Documents module, balancing confidentiality requirements, signing and identity-verification capabilities, and the economics of an early-stage startup.</p>
<dl style={{margin:"12px 0 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:"24px 40px",padding:"28px 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Role</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Product Manager & Product Designer</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Company</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Migranium</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Scope</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Provider research, API evaluation, workflow definition, stakeholder alignment, end-to-end design, and engineering handoff</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Status</dt>
<dd style={{margin:"0"}}><Badge variant="dark">Live</Badge>
</dd>
</div>
</dl>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,360px),1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"center",padding:"clamp(24px,4vw,48px)",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-md)"}}><div style={{display:"flex",flexDirection:"column",gap:"14px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#b9cdb9"}}>The central decision</div>
<p style={{margin:"0",font:"400 italic clamp(28px,3.2vw,40px)/1.2 var(--serif)",color:"#f6f3eb",textWrap:"balance"}}>Decide what to buy before deciding what to design — then plan the workflow around the provider’s constraints.</p>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px"}}><div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px 16px",padding:"14px 18px",border:"1px solid #4c6a57",borderRadius:"var(--radius-sm)"}}><span style={{font:"400 14px/1.4 var(--font-sans)",color:"#c9d6c8"}}>Document signing</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"#f6f3eb"}}>DocuSeal, as an interim option</span>
</div>
<div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px 16px",padding:"14px 18px",border:"1px solid #4c6a57",borderRadius:"var(--radius-sm)"}}><span style={{font:"400 14px/1.4 var(--font-sans)",color:"#c9d6c8"}}>Identity verification</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"#f6f3eb"}}>Didit</span>
</div>
<div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"8px 16px",padding:"14px 18px",background:"#f6f3eb",borderRadius:"var(--radius-sm)"}}><span style={{font:"400 14px/1.4 var(--font-sans)",color:"#2e4a3a"}}>Shipped by engineering</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"#1c3a2a"}}>Documenso + DocuSeal</span>
</div>
</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"16px"}}><div style={{padding:"28px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>What I owned</h2>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"6px",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}><li>Interpreting the initial requirements</li>
<li>Researching providers and reading their API documentation</li>
<li>Evaluating cost and capability tradeoffs</li>
<li>Defining the workflow and refining scope with stakeholders</li>
<li>Connecting the experience to existing modules</li>
<li>End-to-end UI design, adapted to Migranium’s branding</li>
<li>Final reviews, recorded walkthroughs, and handoff</li>
</ul>
</div>
<div style={{padding:"28px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>What engineering owned</h2>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"6px",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}><li>Implementation of the Documents module</li>
<li>The API integration, including combining Documenso with DocuSeal for signing after a capability limitation emerged</li>
</ul>
</div>
</div>
</section>
</>}>
<section id="s1" aria-labelledby="h1s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"56px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>01</div>
<h2 id="h1s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>A client need became a product opportunity</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The project began after a meeting with a prospective fertility-clinic client. The clinic needed a way to handle sensitive documents, with confidentiality and HIPAA-related requirements forming part of the brief.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>For Migranium, the challenge extended beyond adding a document-signing screen. We needed to understand how documents would be prepared, presented to patients, verified, and signed—and how that experience would fit into the healthcare platform we were already building.</p>
<figure style={{margin:"10px 0",display:"flex",flexDirection:"column",gap:"10px"}}><ol style={{margin:"0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,140px),1fr))",gap:"8px"}}><li style={{padding:"16px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"400 italic 18px/1 var(--serif)",color:"var(--primary)"}}>1</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Prepared</span>
</li>
<li style={{padding:"16px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"400 italic 18px/1 var(--serif)",color:"var(--primary)"}}>2</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Presented to patients</span>
</li>
<li style={{padding:"16px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"400 italic 18px/1 var(--serif)",color:"var(--primary)"}}>3</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Verified</span>
</li>
<li style={{padding:"16px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"400 italic 18px/1 var(--serif)",color:"var(--primary)"}}>4</span>
<span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Signed</span>
</li>
</ol>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>The questions the module had to answer, in the order a document moves.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>As both Product Manager and Product Designer, I started by translating the initial request into requirements and investigating how we could deliver the capability within our startup’s constraints.</p>
</section>

<section id="s2" aria-labelledby="h2s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>02</div>
<h2 id="h2s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Deciding what to buy before deciding what to design</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>My first decision was to explore existing providers rather than build document signing and identity verification from scratch.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I researched the available options and read their API documentation to understand their capabilities, integration requirements, and commercial limitations. This work helped establish what we could reasonably offer before I committed to the interface.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>For document signing, I evaluated DocuSign and DocuSeal. DocuSign was our preferred option, but its cost was difficult to justify against our expected early-stage usage. We needed an approach that could support initial customers without committing to recurring costs ahead of demand.</p>
<figure style={{margin:"14px 0",display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"12px"}}><div style={{padding:"24px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}}><Badge variant="outline">Preferred, longer term</Badge>
<div style={{font:"600 24px/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>DocuSign</div>
<p style={{margin:"0",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}>Preferred longer-term option; difficult to justify financially at initial usage.</p>
</div>
<div style={{padding:"23px",border:"2px solid var(--foreground)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}}><Badge variant="dark" icon="check">Selected initially</Badge>
<div style={{font:"600 24px/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>DocuSeal</div>
<p style={{margin:"0",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}>Selected initial option; a more practical fit for the startup’s immediate constraints.</p>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>A qualitative comparison of the two signing providers I evaluated.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>We selected DocuSeal as an interim option, with the possibility of moving to DocuSign as our client base grew. I planned the workflow with that potential transition in mind.</p>
<blockquote style={{margin:"28px 0 8px",padding:"28px 0 0",borderTop:"1px solid var(--border)",display:"flex",flexDirection:"column",gap:"12px"}}><p style={{margin:"0",font:"400 italic clamp(26px,3vw,36px)/1.25 var(--serif)",color:"var(--text-strong)",textWrap:"balance"}}>“The provider decision had to work for the product we needed to deliver and the stage the business was in.”</p>
</blockquote>
</section>

<section id="s3" aria-labelledby="h3s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>03</div>
<h2 id="h3s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Treating verification as a product economics decision</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Identity verification required a separate evaluation. I explored approximately three to four providers before selecting Didit.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Its free monthly allowance suited the initial period when document volumes would be low. At the time of evaluation, our identity-verification planning estimate was approximately US$0.35 per form.</p>
<div style={{margin:"14px 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,240px),1fr))",gap:"24px",alignItems:"end",padding:"28px",background:"var(--surface-soft)",borderRadius:"var(--radius-md)"}}><div style={{display:"flex",flexDirection:"column",gap:"8px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Planning estimate, at evaluation</div>
<div style={{font:"600 clamp(48px,6vw,64px)/1 var(--font-sans)",letterSpacing:"-0.04em",color:"var(--text-strong)"}}>~US$0.35</div>
<div style={{font:"500 15px/1.4 var(--font-sans)",color:"var(--text-body)"}}>per form, for identity verification</div>
</div>
<p style={{margin:"0",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}>This was an early planning estimate, rather than a measured operating cost or a current vendor quote.</p>
</div>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>That gave us a cost to consider within the Documents module’s pricing. We could assess whether verification costs should be passed through to the clinic rather than absorbed without a plan.</p>
</section>

<section id="s4" aria-labelledby="h4s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>04</div>
<h2 id="h4s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Connecting Documents to the existing product</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>After the provider research, I worked with stakeholders through several meetings to refine the scope and agree on how the module should connect to the wider platform.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>One addition was integration with Forms, a module that was already running. We wanted clinics to be able to include a document within a form or use it as a section in the form experience.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The other important connection was Patient Experience: the patient-facing layer through which patients interact with our clinic customers.</p>
<figure style={{margin:"14px 0",padding:"clamp(20px,3vw,32px)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"20px"}}><div style={{display:"flex",flexWrap:"wrap",alignItems:"stretch",gap:"10px"}}><div style={{flex:"1 1 150px",padding:"18px",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 16px/1.25 var(--font-sans)"}}>Documents</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",color:"#c9d6c8"}}>New module: preparation, verification, signing</span>
</div>
<div style={{flex:"0 0 auto",display:"flex",alignItems:"center",color:"var(--text-muted)"}}><Icon name="arrow-right" size={18} /></div>
<div style={{flex:"1 1 150px",padding:"18px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 16px/1.25 var(--font-sans)",color:"var(--text-strong)"}}>Forms</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-body)"}}>Already running; a document inside a form or as a section</span>
</div>
<div style={{flex:"0 0 auto",display:"flex",alignItems:"center",color:"var(--text-muted)"}}><Icon name="arrow-right" size={18} /></div>
<div style={{flex:"1 1 150px",padding:"18px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 16px/1.25 var(--font-sans)",color:"var(--text-strong)"}}>Patient Experience</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-body)"}}>Where patients interact with clinic customers</span>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>A conceptual map of the connected experience, rather than an API architecture diagram.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>These connections shaped the design. Documents needed to work within existing clinic and patient workflows rather than introduce a disconnected signing experience.</p>
</section>

<section id="s5" aria-labelledby="h5s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>05</div>
<h2 id="h5s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Designing the experience from end to end</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Once the scope was aligned, I designed the complete interface and the different user journeys.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The work included adapting the provider-backed experience to Migranium’s branding. We were using external functionality, but the interface needed to feel consistent with the rest of our product.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I took the designs through final reviews and recorded walkthrough videos showing the user journeys. These recordings supported the engineering handoff by making the intended behavior easier to understand alongside the screens.</p>
<div style={{margin:"10px 0",display:"flex",flexDirection:"column",gap:"12px"}}><h3 style={{margin:"0",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-muted)"}}>My deliverables</h3>
<ul style={{margin:"0",padding:"0",listStyle:"none",display:"flex",flexDirection:"column",borderTop:"1px solid var(--border)"}}><li style={{display:"flex",gap:"12px",alignItems:"center",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.4 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} />End-to-end interface designs</li>
<li style={{display:"flex",gap:"12px",alignItems:"center",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.4 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} />Stakeholder-reviewed workflows</li>
<li style={{display:"flex",gap:"12px",alignItems:"center",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.4 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} />A branded provider-backed experience</li>
<li style={{display:"flex",gap:"12px",alignItems:"center",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.4 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} />Recorded user-journey walkthroughs</li>
<li style={{display:"flex",gap:"12px",alignItems:"center",padding:"12px 0",borderBottom:"1px solid var(--border)",font:"500 16px/1.4 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} />Engineering handoff</li>
</ul>
</div>
</section>

<section id="s6" aria-labelledby="h6s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>06</div>
<h2 id="h6s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Adapting when a provider assumption changed</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>During implementation, engineering discovered a limitation in the selected DocuSeal offering: the signing-builder functionality was available, but the expected AI capability was not available at the intended cost.</p>
<figure style={{margin:"14px 0",display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"12px"}}><div style={{padding:"24px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Initial provider choice</div>
<div style={{font:"600 22px/1.2 var(--font-sans)",color:"var(--text-strong)"}}>DocuSeal</div>
<ul style={{margin:"0",padding:"0",listStyle:"none",display:"flex",flexDirection:"column",gap:"8px",font:"400 15px/1.45 var(--font-sans)",color:"var(--text-body)"}}><li style={{display:"flex",gap:"10px",alignItems:"flex-start"}}><Icon name="check" size={16} style={{marginTop:"3px"}} />Signing builder available</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",color:"var(--text-muted)"}}><Icon name="x" size={16} style={{marginTop:"3px"}} />Expected AI capability not available at the intended cost</li>
</ul>
</div>
<div style={{padding:"24px",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"14px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#b9cdb9"}}>Implementation pivot · engineering</div>
<div style={{font:"600 22px/1.2 var(--font-sans)",color:"#f6f3eb"}}>Documenso + DocuSeal</div>
<p style={{margin:"0",font:"400 15px/1.5 var(--font-sans)",color:"#dfe6d6"}}>The engineering team combined the two for signing to make the experience work.</p>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>What I selected during research, and how engineering adapted it during implementation.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The implementation approach changed. The engineering team combined Documenso with DocuSeal for signing to make the experience work.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Engineering owned that API integration. My contribution was the provider research, workflow definition, stakeholder alignment, and end-to-end design that preceded implementation.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>This was an important distinction in the project. Evaluating a provider’s overall offering had not fully validated access to every capability we expected to use.</p>
<blockquote style={{margin:"28px 0 8px",padding:"28px 0 0",borderTop:"1px solid var(--border)"}}><p style={{margin:"0",font:"400 italic clamp(26px,3vw,36px)/1.25 var(--serif)",color:"var(--text-strong)",textWrap:"balance"}}>“Access to one provider feature did not establish access to every capability the product needed.”</p>
</blockquote>
</section>

<section id="s7" aria-labelledby="h7s" style={{scrollMarginTop:"96px",marginTop:"72px",padding:"clamp(24px,4vw,44px)",background:"var(--surface-soft)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"18px"}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}><span style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>07</span>
<Badge variant="dark">Live</Badge>
</div>
<h2 id="h7s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>Outcome</h2>
<p style={{margin:"0",font:"600 20px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>The Documents module is live.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The project progressed from a prospective client’s requirement through provider evaluation, product definition, design, and engineering implementation. When a capability constraint emerged, the team adapted the provider approach while continuing toward the intended experience.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>My contribution connected the business constraints, integration options, and user workflows into a product that engineering could implement.</p>
<ul style={{margin:"8px 0 0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"8px"}}><li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Live Documents module</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Signing supported through Documenso and DocuSeal</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Identity-verification provider selected through research</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Forms and Patient Experience connections defined in the product scope</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Complete design and walkthrough package handed to engineering</li>
</ul>
</section>

<section id="s8" aria-labelledby="h8s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"400 italic 22px/1 var(--serif)",color:"var(--primary)"}}>08</div>
<h2 id="h8s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>What I would carry into the next integration</h2>
<p style={{margin:"0",font:"400 italic clamp(24px,2.6vw,30px)/1.3 var(--serif)",color:"var(--text-strong)",textWrap:"pretty"}}>The main lesson was to validate critical provider capabilities individually, including their API availability and commercial access.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>For a similar project, I would bring engineering into an early technical spike covering the complete intended journey. That would help test signing, AI, verification, and pricing assumptions before the workflow becomes dependent on them.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The project reinforced that provider selection is part of product design: its constraints affect what users can do, how the experience works, and what the business can sustainably offer.</p>
</section>

</CaseLayout>
  );
}
