import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Badge } from '../components/ds.jsx';
import CaseLayout from '../components/CaseLayout.jsx';
import useDocumentMeta from '../components/useDocumentMeta.js';

const TOC = [{"id":"s1","label":"Beyond automation"},{"id":"s2","label":"The proposed solution"},{"id":"s3","label":"Combining the builders"},{"id":"s4","label":"Managing complexity"},{"id":"s5","label":"Product model"},{"id":"s6","label":"Behavior beyond the builder"},{"id":"s7","label":"Kanban and Relay"},{"id":"s8","label":"Client demonstration"},{"id":"s9","label":"Outcome"},{"id":"s10","label":"Reflection"}];

export default function PatientJourneys() {
  useDocumentMeta("Patient Journeys — Kolom Oden-Ikpi", "Case study: defining and prototyping one visual builder for complex patient workflows at Migranium — combining two proposed builders and managing configuration complexity.");
  const [adv, setAdv] = useState(false);
  const toggleAdv = () => setAdv(a => !a);
  const advExpanded = adv;
  const advIcon = adv ? 'chevron-up' : 'chevron-down';
  return (
<CaseLayout current="journeys" toc={TOC} hero={<><section aria-labelledby="cs-title" style={{maxWidth:"1200px",margin:"0 auto",padding:"40px clamp(20px,4vw,48px) 56px",display:"flex",flexDirection:"column",gap:"28px"}}><Link to="/#work" style={{alignSelf:"flex-start",display:"inline-flex",alignItems:"center",gap:"8px",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-muted)",textDecoration:"none",padding:"6px 0"}} className="h2"><Icon name="arrow-left" size={16} />Selected work</Link>
<div style={{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap",paddingTop:"24px"}}><img src="/assets/logos/migranium.png" alt="Migranium" style={{height:"32px",width:"auto",mixBlendMode:"multiply"}} /><span style={{font:"600 13px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--primary)"}}>Migranium / Patient Journeys</span>
</div>
<h1 id="cs-title" style={{margin:"0",maxWidth:"980px",font:"600 clamp(40px,6.2vw,76px)/1.03 var(--font-sans)",letterSpacing:"-0.04em",color:"var(--text-strong)",textWrap:"balance"}}>One builder for <span style={{color:"var(--primary)",letterSpacing:"-0.01em"}}>complex patient workflows</span>
</h1>
<p style={{margin:"0",maxWidth:"760px",font:"400 clamp(18px,1.8vw,21px)/1.6 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Two prospective clients needed a way to coordinate care across appointments, tests, forms, and clinical decisions. I defined and prototyped a combined visual builder that made these workflows configurable while keeping the primary experience manageable.</p>
<img src="/assets/covers/patient-journeys.jpg" alt="" style={{display:"block",width:"100%",aspectRatio:"21/9",objectFit:"cover",borderRadius:"var(--radius-md)",background:"var(--surface-strong)"}} /><dl style={{margin:"12px 0 0",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,200px),1fr))",gap:"24px 40px",padding:"28px 0",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}><div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Role</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Product definition, workflow architecture, product design, and prototyping</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Company</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Migranium</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Scope</dt>
<dd style={{margin:"0",font:"500 15px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Journey configuration, builder interaction model, operational views, client demonstration, and engineering handoff</dd>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"}}><dt style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Status</dt>
<dd style={{margin:"0",display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"}}><Badge variant="neutral">Handed over to engineering</Badge>
<span style={{font:"400 14px/1.45 var(--font-sans)",color:"var(--text-body)"}}>Interactive prototype demonstrated to a prospective client</span>
</dd>
</div>
</dl>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,360px),1fr))",gap:"clamp(24px,4vw,56px)",alignItems:"center",padding:"clamp(24px,4vw,48px)",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-md)"}}><div style={{display:"flex",flexDirection:"column",gap:"14px"}}><div style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"#b9cdb9"}}>The central decision</div>
<p style={{margin:"0",font:"500 clamp(28px,3.2vw,40px)/1.2 var(--serif)",color:"#f6f3eb",textWrap:"balance"}}>Combine visual understanding and detailed configuration in one experience.</p>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"#dfe6d6"}}>Instead of choosing between the two proposed builders, I merged their strengths, then controlled when deeper settings appeared.</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) auto minmax(0,1fr)",gap:"12px",alignItems:"center"}}><div style={{display:"flex",flexDirection:"column",gap:"8px"}}><div style={{padding:"14px",border:"1px dashed #6f8b77",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"#dfe6d6"}}>Dropdown builder</div>
<div style={{padding:"14px",border:"1px dashed #6f8b77",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"#dfe6d6"}}>Node builder</div>
</div>
<span style={{color:"#b9cdb9",display:"flex"}}><Icon name="arrow-right" size={20} /></span>
<div style={{padding:"18px 14px",background:"#f6f3eb",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"4px"}}><span style={{font:"600 15px/1.3 var(--font-sans)",color:"#1c3a2a"}}>One visual builder</span>
<span style={{font:"400 13px/1.4 var(--font-sans)",color:"#2e4a3a"}}>with node-level configuration</span>
</div>
</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:"16px"}}><div style={{padding:"28px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>What I owned</h2>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"6px",font:"400 15px/1.55 var(--font-sans)",color:"var(--text-body)"}}><li>Evaluating the initial two-builder proposal</li>
<li>The combined builder interaction model</li>
<li>Defaults and advanced settings to manage complexity</li>
<li>Workflow behavior and module boundaries</li>
<li>The interactive prototype and client demonstration</li>
<li>Product design and engineering handoff</li>
</ul>
</div>
<div style={{padding:"28px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"14px"}}><h2 style={{margin:"0",font:"600 18px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Where it stands</h2>
<p style={{margin:"0",font:"400 15px/1.6 var(--font-sans)",color:"var(--text-body)"}}>The CEO supplied the initial concept. The behaviors described here are defined requirements handed to engineering, rather than claims about a live implementation.</p>
</div>
</div>
</section>
</>}>
<section id="s1" aria-labelledby="h1s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"56px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>01</div>
<h2 id="h1s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>The workflow continued beyond a single automation</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Migranium already had an automation module for discrete trigger–condition–action rules.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Patient Journeys addressed a broader need. A patient might enter a clinic, complete tests, attend an appointment, fill out forms, and wait for a doctor to review the results. The doctor’s decision could then determine the treatment, further appointments, or the next set of requirements.</p>
<figure style={{margin:"14px 0",padding:"clamp(20px,3vw,28px)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"16px"}}><div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}><span>A simplified journey</span>
<span style={{fontWeight:"500",textTransform:"none",letterSpacing:"0"}}>Illustrative</span>
</div>
<ol style={{margin:"0",padding:"0",listStyle:"none",display:"flex",flexWrap:"wrap",alignItems:"center",gap:"8px"}}><li style={{padding:"10px 14px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Enters clinic</li>
<li aria-hidden="true" style={{display:"flex",color:"var(--text-muted)"}}><Icon name="arrow-right" size={16} /></li>
<li style={{padding:"10px 14px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Tests</li>
<li aria-hidden="true" style={{display:"flex",color:"var(--text-muted)"}}><Icon name="arrow-right" size={16} /></li>
<li style={{padding:"10px 14px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Appointment</li>
<li aria-hidden="true" style={{display:"flex",color:"var(--text-muted)"}}><Icon name="arrow-right" size={16} /></li>
<li style={{padding:"10px 14px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Forms</li>
<li aria-hidden="true" style={{display:"flex",color:"var(--text-muted)"}}><Icon name="arrow-right" size={16} /></li>
<li style={{padding:"10px 14px",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-sm)",font:"600 14px/1.3 var(--font-sans)"}}>Doctor reviews results</li>
</ol>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,170px),1fr))",gap:"8px",paddingLeft:"clamp(0px,4vw,40px)",borderLeft:"2px solid var(--border)"}}><div style={{padding:"12px 14px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Treatment</div>
<div style={{padding:"12px 14px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Further appointments</div>
<div style={{padding:"12px 14px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",font:"500 14px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Next set of requirements</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>The doctor’s decision is where the path can branch.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The product needed to coordinate that longer sequence across multiple people and modules, including the points where the path could change.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Two prospective clients had requirements in this area, giving us a clear reason to develop the feature.</p>
</section>

<section id="s2" aria-labelledby="h2s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>02</div>
<h2 id="h2s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Starting with a proposed solution</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I took ownership of Patient Journeys after returning from leave.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The CEO had supplied an initial mockup that proposed two ways to build a journey: a dropdown-based builder and a separate node-based builder.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>My task was to work through the complexity of the feature and determine how staff could configure these workflows successfully.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>As I researched the approach and examined how the interactions would work, I identified limitations in both proposed builders.</p>
</section>

<section id="s3" aria-labelledby="h3s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>03</div>
<h2 id="h3s" style={{margin:"0 0 6px",font:"600 clamp(30px,3.6vw,42px)/1.15 var(--font-sans)",letterSpacing:"-0.025em",color:"var(--text-strong)",textWrap:"balance"}}>Why I combined the builders</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>A dropdown-only builder would make the relationships within a complex journey difficult to follow. Users could configure individual settings, but understanding how those settings formed a branching workflow would become cumbersome.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>A node-based builder made those relationships visible. However, a canvas alone did not solve the configuration problem: each node could still require detailed settings, assignments, and outcomes.</p>
<figure style={{margin:"14px 0",display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:"12px"}}><div style={{padding:"24px",border:"1px dashed var(--border-strong)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"16px"}}><div style={{display:"flex",justifyContent:"space-between",gap:"8px",flexWrap:"wrap"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}>Initial proposal</span>
<span style={{font:"500 12px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Illustrative</span>
</div>
<p style={{margin:"0",font:"600 17px/1.4 var(--font-sans)",color:"var(--text-strong)"}}>Two separate creation experiences</p>
<div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"8px"}}><div style={{padding:"12px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"7px"}}><span style={{font:"500 12px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Dropdown builder</span>
<span style={{height:"22px",border:"1px solid var(--border)",borderRadius:"5px"}}></span>
<span style={{height:"22px",border:"1px solid var(--border)",borderRadius:"5px"}}></span>
<span style={{height:"22px",border:"1px solid var(--border)",borderRadius:"5px"}}></span>
</div>
<div style={{padding:"12px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"7px"}}><span style={{font:"500 12px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Node builder</span>
<span style={{display:"flex",alignItems:"center",gap:"4px",padding:"8px 0"}}><span style={{width:"16px",height:"16px",borderRadius:"4px",border:"1.5px solid var(--border-strong)"}}></span>
<span style={{flex:"1",height:"1.5px",background:"var(--border-strong)"}}></span>
<span style={{width:"16px",height:"16px",borderRadius:"4px",border:"1.5px solid var(--border-strong)"}}></span>
</span>
<span style={{display:"flex",alignItems:"center",gap:"4px",paddingLeft:"20px"}}><span style={{flex:"1",height:"1.5px",background:"var(--border-strong)"}}></span>
<span style={{width:"16px",height:"16px",borderRadius:"4px",border:"1.5px solid var(--border-strong)"}}></span>
</span>
</div>
</div>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"6px",font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}><li>Dropdowns hide how settings form a branching workflow</li>
<li>A canvas alone leaves detailed configuration unsolved</li>
</ul>
</div>
<div style={{padding:"23px",border:"2px solid var(--foreground)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"16px"}}><div style={{display:"flex",justifyContent:"space-between",gap:"8px",flexWrap:"wrap"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>Proposed approach</span>
<span style={{font:"500 12px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Illustrative</span>
</div>
<p style={{margin:"0",font:"600 17px/1.4 var(--font-sans)",color:"var(--text-strong)"}}>One visual builder with configuration controls associated with its nodes</p>
<div style={{display:"grid",gridTemplateColumns:"minmax(0,1.2fr) minmax(0,1fr)",gap:"8px",padding:"12px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)"}}><div style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"8px"}}><span style={{display:"flex",alignItems:"center",gap:"4px"}}><span style={{width:"18px",height:"18px",borderRadius:"5px",background:"var(--surface-card)",border:"1.5px solid var(--text-strong)"}}></span>
<span style={{flex:"1",height:"1.5px",background:"var(--text-strong)"}}></span>
<span style={{width:"18px",height:"18px",borderRadius:"5px",background:"var(--foreground)"}}></span>
</span>
<span style={{display:"flex",alignItems:"center",gap:"4px",paddingLeft:"24px"}}><span style={{flex:"1",height:"1.5px",background:"var(--text-strong)"}}></span>
<span style={{width:"18px",height:"18px",borderRadius:"5px",background:"var(--surface-card)",border:"1.5px solid var(--text-strong)"}}></span>
</span>
</div>
<div style={{padding:"8px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"6px",display:"flex",flexDirection:"column",gap:"6px"}}><span style={{font:"600 11px/1.2 var(--font-sans)",color:"var(--text-strong)"}}>Selected node</span>
<span style={{height:"16px",border:"1px solid var(--border)",borderRadius:"4px"}}></span>
<span style={{height:"16px",border:"1px solid var(--border)",borderRadius:"4px"}}></span>
</div>
</div>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"6px",font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}><li>The canvas shows structure and connections</li>
<li>Dropdowns define the details of each node</li>
</ul>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Schematic comparison; not a screenshot of the product.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I proposed combining the strengths of both approaches into one experience.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The visual builder would show the journey’s structure and connections. Configuration controls, including dropdowns, would allow users to define the details associated with each node.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>This gave users a way to understand the workflow and configure it within the same builder.</p>
<blockquote style={{margin:"28px 0 8px",padding:"28px 0 0",borderTop:"1px solid var(--border)"}}><p style={{margin:"0",font:"500 clamp(26px,3vw,36px)/1.25 var(--serif)",color:"var(--text-strong)",textWrap:"balance"}}>“The key decision was to combine visual understanding and detailed configuration in one experience.”</p>
</blockquote>
</section>

<section id="s4" aria-labelledby="h4s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>04</div>
<h2 id="h4s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Keeping complexity available without exposing it all at once</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Combining the builders still left a large number of possible settings.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I separated the configuration needed for a straightforward journey from the controls needed for more complex cases.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The primary experience used defaults for routine behavior and exposed a limited set of settings. Additional configuration remained available through advanced settings.</p>
<figure style={{margin:"14px 0",padding:"clamp(20px,3vw,32px)",background:"var(--surface-soft)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"16px"}}><div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--text-muted)"}}><span>A conceptual node</span>
<span style={{fontWeight:"500",textTransform:"none",letterSpacing:"0"}}>Illustrative · try the toggle</span>
</div>
<div style={{maxWidth:"420px",width:"100%",alignSelf:"center",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-float)",overflow:"hidden"}}><div style={{padding:"16px 18px",borderBottom:"1px solid var(--border-soft)",display:"flex",alignItems:"center",gap:"12px"}}><span style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--foreground)",color:"var(--background)",display:"flex",alignItems:"center",justifyContent:"center"}}><Icon name="stethoscope" size={16} /></span>
<div style={{display:"flex",flexDirection:"column",gap:"2px"}}><span style={{font:"600 15px/1.25 var(--font-sans)",color:"var(--text-strong)"}}>Doctor reviews results</span>
<span style={{font:"400 13px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Step</span>
</div>
</div>
<div style={{padding:"16px 18px",display:"flex",flexDirection:"column",gap:"12px"}}><div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"400 14px/1.4 var(--font-sans)"}}><span style={{color:"var(--text-muted)"}}>Assigned to</span>
<span style={{color:"var(--text-strong)",fontWeight:"500"}}>Reviewing doctor</span>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"400 14px/1.4 var(--font-sans)"}}><span style={{color:"var(--text-muted)"}}>Requirement</span>
<span style={{color:"var(--text-strong)",fontWeight:"500"}}>Test results available</span>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"400 14px/1.4 var(--font-sans)"}}><span style={{color:"var(--text-muted)"}}>Outcomes</span>
<span style={{color:"var(--text-strong)",fontWeight:"500",textAlign:"right"}}>Treatment · Further appointment</span>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"400 14px/1.4 var(--font-sans)"}}><span style={{color:"var(--text-muted)"}}>Everything else</span>
<span style={{color:"var(--text-strong)",fontWeight:"500"}}>Defaults</span>
</div>
</div>
<button type="button" onClick={toggleAdv} aria-expanded={advExpanded} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",padding:"14px 18px",border:"0",borderTop:"1px solid var(--border-soft)",background:"transparent",cursor:"pointer",font:"600 14px/1.3 var(--font-sans)",color:"var(--text-strong)"}} className="h3"><span>Advanced settings</span>
<Icon name={advIcon} size={16} /></button>
{adv && (<><div style={{padding:"4px 18px 18px",display:"flex",flexDirection:"column",gap:"10px",background:"var(--surface-soft)"}}><div style={{paddingTop:"12px",display:"flex",justifyContent:"space-between",gap:"12px",font:"400 14px/1.4 var(--font-sans)"}}><span style={{color:"var(--text-muted)"}}>Timing</span>
<span style={{color:"var(--text-strong)",fontWeight:"500"}}>Custom</span>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"400 14px/1.4 var(--font-sans)"}}><span style={{color:"var(--text-muted)"}}>Assignment rules</span>
<span style={{color:"var(--text-strong)",fontWeight:"500"}}>Custom</span>
</div>
<div style={{display:"flex",justifyContent:"space-between",gap:"12px",font:"400 14px/1.4 var(--font-sans)"}}><span style={{color:"var(--text-muted)"}}>Connection conditions</span>
<span style={{color:"var(--text-strong)",fontWeight:"500"}}>Custom</span>
</div>
</div>
</>)}</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Routine behavior is handled by defaults; deeper controls stay one step away. Fictional example.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The aim was to let clinic staff begin with a manageable workflow while still supporting the detail required for more complicated journeys.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>This was progressive disclosure applied to the product’s configuration model, rather than simply hiding fields to make the interface look cleaner.</p>
</section>

<section id="s5" aria-labelledby="h5s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>05</div>
<h2 id="h5s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Defining the underlying product model</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>A journey template defines a reusable workflow: its enrollment triggers, steps, requirements, assignments, timing, connections, and outcomes.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>When a patient is enrolled, they receive an individual journey instance. That instance maintains its own progress, state, version, and history.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>This separation matters because a patient may participate in more than one journey. Progress in one workflow should not change the state of another.</p>
<figure style={{margin:"14px 0",padding:"clamp(20px,3vw,32px)",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,180px),1fr))",gap:"10px"}}><div style={{padding:"18px",background:"var(--foreground)",color:"var(--background)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"#b9cdb9"}}>1 · Journey template</span>
<span style={{font:"400 13px/1.5 var(--font-sans)",color:"#e8ece2"}}>Triggers, steps, requirements, assignments, timing, connections, outcomes</span>
</div>
<div style={{padding:"18px",background:"var(--surface-soft)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>2 · Patient instance</span>
<span style={{font:"400 13px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Its own progress, state, version, and history</span>
</div>
<div style={{padding:"18px",border:"1px solid var(--border)",borderRadius:"var(--radius-sm)",display:"flex",flexDirection:"column",gap:"8px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>3 · Module activity</span>
<span style={{font:"400 13px/1.5 var(--font-sans)",color:"var(--text-body)"}}>Existing modules execute; the journey monitors completion events</span>
</div>
</div>
<div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}><Badge variant="outline">Task Manager</Badge>
<Badge variant="outline">Forms</Badge>
<Badge variant="outline">Documents</Badge>
<Badge variant="outline">Appointments</Badge>
<Badge variant="outline">Patient Experience</Badge>
<Badge variant="outline">Payments</Badge>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>A simplified product model showing how reusable configuration relates to patient progress and module execution.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The product definition also kept the boundaries between modules clear. Task Manager continues to own task execution; Forms owns forms; Documents owns document delivery and signing; and Appointments owns booking records.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Patient Journeys coordinates the path and monitors the relevant completion events.</p>
</section>

<section id="s6" aria-labelledby="h6s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>06</div>
<h2 id="h6s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Defining behavior beyond the builder</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The handoff covered more than journey creation. It specified how a journey should be validated, activated, monitored, and changed.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>In the builder, configuration and visual connections should stay synchronized. Changing a destination should update the connection, and changing the connection should update the destination.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Test mode should identify problems such as missing destinations, unreachable requirements, loops, and journeys without a valid completion path. It should do this without creating live tasks, bookings, or patient communications.</p>
<figure style={{margin:"14px 0",display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:"10px",alignItems:"stretch"}}><div style={{padding:"20px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"10px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>Test mode checks</span>
<ul style={{margin:"0",padding:"0 0 0 18px",display:"flex",flexDirection:"column",gap:"4px",font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}><li>Missing destinations</li>
<li>Unreachable requirements</li>
<li>Loops</li>
<li>No valid completion path</li>
</ul>
<span style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>No live tasks, bookings, or patient communications</span>
</div>
<div style={{padding:"20px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"10px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>Activation gate</span>
<span style={{font:"600 17px/1.35 var(--font-sans)",color:"var(--text-strong)"}}>Failed validation blocks activation.</span>
</div>
<div style={{padding:"20px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"10px"}}><span style={{font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--primary)"}}>Changing an active journey</span>
<span style={{font:"400 14px/1.5 var(--font-sans)",color:"var(--text-body)"}}>A new version, with an explicit choice of who it affects:</span>
<div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}><Badge variant="neutral">Future enrollments</Badge>
<Badge variant="neutral">Existing patients</Badge>
<Badge variant="neutral">Selected patients</Badge>
</div>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Specified in the handoff; not a description of a live implementation.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Failed validation should block activation.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>For active journeys, the handoff specifies versioning and an explicit decision about whether changes affect future enrollments, existing patients, or selected patients.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>These are defined requirements handed to engineering, rather than claims about a live implementation.</p>
</section>

<section id="s7" aria-labelledby="h7s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>07</div>
<h2 id="h7s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Two operational views of the same journey</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>For monitoring patients, the product includes two Progress Board views: Kanban and Relay.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Kanban supports detailed operational work. Patients appear as cards within the step they have reached, making it easier to inspect requirements, ownership, and outstanding work.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Relay provides a more compact overview. Patients appear along the journey’s sequence of steps, helping staff understand their distribution and progress.</p>
<figure style={{margin:"14px 0",display:"flex",flexDirection:"column",gap:"10px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:"12px"}}><div style={{padding:"20px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px",minWidth:"0"}}><div style={{display:"flex",justifyContent:"space-between",gap:"8px"}}><span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Kanban</span>
<span style={{font:"500 12px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Detailed work</span>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"6px"}}><div style={{display:"flex",flexDirection:"column",gap:"6px",padding:"8px",background:"var(--surface-soft)",borderRadius:"6px"}}><span style={{font:"600 11px/1.2 var(--font-sans)",color:"var(--text-muted)"}}>Tests</span>
<span style={{padding:"8px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"5px",font:"600 12px/1 var(--font-sans)",color:"var(--text-strong)"}}>A.B.</span>
<span style={{padding:"8px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"5px",font:"600 12px/1 var(--font-sans)",color:"var(--text-strong)"}}>C.D.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px",padding:"8px",background:"var(--surface-soft)",borderRadius:"6px"}}><span style={{font:"600 11px/1.2 var(--font-sans)",color:"var(--text-muted)"}}>Review</span>
<span style={{padding:"8px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"5px",font:"600 12px/1 var(--font-sans)",color:"var(--text-strong)"}}>E.F.</span>
</div>
<div style={{display:"flex",flexDirection:"column",gap:"6px",padding:"8px",background:"var(--surface-soft)",borderRadius:"6px"}}><span style={{font:"600 11px/1.2 var(--font-sans)",color:"var(--text-muted)"}}>Treatment</span>
<span style={{padding:"8px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"5px",font:"600 12px/1 var(--font-sans)",color:"var(--text-strong)"}}>G.H.</span>
<span style={{padding:"8px",background:"var(--surface-card)",border:"1px solid var(--border)",borderRadius:"5px",font:"600 12px/1 var(--font-sans)",color:"var(--text-strong)"}}>J.K.</span>
</div>
</div>
</div>
<div style={{padding:"20px",border:"1px solid var(--border)",borderRadius:"var(--radius-md)",background:"var(--surface-card)",display:"flex",flexDirection:"column",gap:"14px",minWidth:"0"}}><div style={{display:"flex",justifyContent:"space-between",gap:"8px"}}><span style={{font:"600 15px/1.3 var(--font-sans)",color:"var(--text-strong)"}}>Relay</span>
<span style={{font:"500 12px/1.3 var(--font-sans)",color:"var(--text-muted)"}}>Compact overview</span>
</div>
<div style={{position:"relative",display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"6px",paddingTop:"8px"}}><span style={{position:"absolute",left:"8%",right:"8%",top:"22px",height:"2px",background:"var(--border)"}}></span>
<div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}}><span style={{width:"14px",height:"14px",borderRadius:"50%",background:"var(--foreground)",border:"3px solid var(--surface-card)"}}></span>
<span style={{font:"600 11px/1.2 var(--font-sans)",color:"var(--text-muted)"}}>Tests</span>
<span style={{display:"flex",gap:"3px"}}><span style={{width:"24px",height:"24px",borderRadius:"50%",background:"var(--surface-strong)",font:"600 9px/24px var(--font-sans)",textAlign:"center",color:"var(--text-strong)"}}>AB</span>
<span style={{width:"24px",height:"24px",borderRadius:"50%",background:"var(--surface-strong)",font:"600 9px/24px var(--font-sans)",textAlign:"center",color:"var(--text-strong)"}}>CD</span>
</span>
</div>
<div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}}><span style={{width:"14px",height:"14px",borderRadius:"50%",background:"var(--foreground)",border:"3px solid var(--surface-card)"}}></span>
<span style={{font:"600 11px/1.2 var(--font-sans)",color:"var(--text-muted)"}}>Review</span>
<span style={{display:"flex",gap:"3px"}}><span style={{width:"24px",height:"24px",borderRadius:"50%",background:"var(--surface-strong)",font:"600 9px/24px var(--font-sans)",textAlign:"center",color:"var(--text-strong)"}}>EF</span>
</span>
</div>
<div style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}}><span style={{width:"14px",height:"14px",borderRadius:"50%",background:"var(--foreground)",border:"3px solid var(--surface-card)"}}></span>
<span style={{font:"600 11px/1.2 var(--font-sans)",color:"var(--text-muted)"}}>Treatment</span>
<span style={{display:"flex",gap:"3px"}}><span style={{width:"24px",height:"24px",borderRadius:"50%",background:"var(--surface-strong)",font:"600 9px/24px var(--font-sans)",textAlign:"center",color:"var(--text-strong)"}}>GH</span>
<span style={{width:"24px",height:"24px",borderRadius:"50%",background:"var(--surface-strong)",font:"600 9px/24px var(--font-sans)",textAlign:"center",color:"var(--text-strong)"}}>JK</span>
</span>
</div>
</div>
</div>
</div>
<figcaption style={{font:"400 13px/1.4 var(--font-sans)",color:"var(--text-muted)"}}>Conceptual comparison using fictional initials. Both views show the same patients.</figcaption>
</figure>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The views serve different tasks, but the underlying patient set, filters, counts, and status rules should remain consistent.</p>
</section>

<section id="s8" aria-labelledby="h8s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>08</div>
<h2 id="h8s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)",textWrap:"balance"}}>Making the concept tangible for a prospective client</h2>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>A prospective client wanted to see the feature rather than hear only a description of what we planned to build.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>I created a full interactive prototype and personally demonstrated the experience.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>The demo allowed me to show how the journey could be configured and how its complexity could be managed. It won the prospect’s support for the proposed approach.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>This was a meaningful validation point for the concept. It demonstrated support for the experience without establishing a signed contract or production rollout.</p>
</section>

<section id="s9" aria-labelledby="h9s" style={{scrollMarginTop:"96px",marginTop:"72px",padding:"clamp(24px,4vw,44px)",background:"var(--surface-soft)",borderRadius:"var(--radius-md)",display:"flex",flexDirection:"column",gap:"18px"}}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"}}><span style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>09</span>
<Badge variant="dark">Handed over to engineering</Badge>
</div>
<h2 id="h9s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>Outcome</h2>
<p style={{margin:"0",font:"600 20px/1.5 var(--font-sans)",color:"var(--text-strong)"}}>Patient Journeys has been handed over to engineering.</p>
<h3 style={{margin:"4px 0 0",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-muted)"}}>My contribution included</h3>
<ul style={{margin:"0",padding:"0",listStyle:"none",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"8px"}}><li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Evaluating the initial two-builder proposal</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Defining the combined builder interaction model</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Using defaults and advanced settings to manage configuration complexity</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Defining workflow behavior and module boundaries</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Creating the interactive prototype</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Delivering the prospective-client demonstration</li>
<li style={{display:"flex",gap:"10px",alignItems:"flex-start",padding:"14px 16px",background:"var(--background)",borderRadius:"var(--radius-sm)",font:"500 15px/1.45 var(--font-sans)",color:"var(--text-strong)"}}><Icon name="check" size={16} style={{marginTop:"2px"}} />Preparing the product design and engineering handoff</li>
</ul>
<div style={{display:"flex",flexDirection:"column",gap:"10px",paddingTop:"12px",borderTop:"1px solid var(--border)"}}><h3 style={{margin:"0",font:"600 12px/1.3 var(--font-sans)",letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--text-muted)"}}>Planned measures for future evaluation</h3>
<div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}><Badge variant="outline">Completion time</Badge>
<Badge variant="outline">Time in step</Badge>
<Badge variant="outline">Overdue rate</Badge>
<Badge variant="outline">Common blockers</Badge>
<Badge variant="outline">Journey completion rate</Badge>
</div>
</div>
</section>

<section id="s10" aria-labelledby="h10s" style={{scrollMarginTop:"96px",display:"flex",flexDirection:"column",gap:"18px",paddingTop:"72px"}}><div style={{font:"500 22px/1 var(--serif)",color:"var(--primary)"}}>10</div>
<h2 id="h10s" style={{margin:"0 0 6px",font:"600 clamp(26px,3vw,34px)/1.2 var(--font-sans)",letterSpacing:"-0.02em",color:"var(--text-strong)"}}>Reflection</h2>
<p style={{margin:"0",font:"500 clamp(24px,2.6vw,30px)/1.3 var(--serif)",color:"var(--text-strong)",textWrap:"pretty"}}>The central challenge was making a complex workflow understandable without removing the flexibility it needed.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Working through the proposed builders showed me that the right interaction model did not need to follow the original separation between dropdown configuration and visual nodes.</p>
<p style={{margin:"0",font:"400 17px/1.7 var(--font-sans)",color:"var(--text-body)",textWrap:"pretty"}}>Combining them, then controlling when deeper settings appeared, gave the product a clearer direction. The client demonstration helped communicate that direction in a form the prospect could experience.</p>
</section>

</CaseLayout>
  );
}
