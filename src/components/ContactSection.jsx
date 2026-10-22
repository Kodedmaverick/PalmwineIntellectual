import { useState } from 'react';
import { Button, Icon } from './ds.jsx';

const EMPTY = { name: '', email: '', phone: '', message: '', company: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,40}$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Add your name.';
  if (!v.email.trim() && !v.phone.trim()) e.contact = 'Add an email or phone number so I can reply.';
  if (v.email.trim() && !EMAIL_RE.test(v.email.trim())) e.email = 'That email doesn’t look right.';
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim())) e.phone = 'That phone number doesn’t look right.';
  if (v.message.trim().length < 10) e.message = 'Write a little more so I have context.';
  return e;
}

function FieldError({ id, children }) {
  if (!children) return null;
  return <span id={id} className="ti-helper ti-helper--error"><Icon name="circle-alert" size={14} />{children}</span>;
}

export default function ContactSection() {
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [serverMsg, setServerMsg] = useState('');

  const set = k => e => setV(s => ({ ...s, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = ['name', 'email', 'phone', 'message'].find(k => errs[k] || (k === 'email' && errs.contact));
      document.getElementById('cf-' + first)?.focus();
      return;
    }
    setStatus('sending');
    setServerMsg('');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(v)
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        if (data.fields) setErrors(data.fields);
        throw new Error(data.error || 'Your message couldn’t be sent.');
      }
      setStatus('sent');
      setV(EMPTY);
    } catch (err) {
      setStatus('error');
      setServerMsg(err.message || 'Your message couldn’t be sent.');
    }
  }

  const contactErr = errors.contact;

  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-band">
    <div className="container contact">
      <div className="contact__intro">
        <div className="eyebrow">Contact</div>
        <h2 id="contact-title" className="contact__title">Have a complex product to <span className="accent">untangle?</span></h2>
        <p className="contact__lede">Send a message and I’ll reply by email or phone — whichever you leave. You can also reach me directly.</p>
        <div className="contact__direct">
          <a href="mailto:kolomodenikpi@gmail.com" className="text-link"><Icon name="mail" size={18} />kolomodenikpi@gmail.com</a>
          <a href="https://www.linkedin.com/in/kolom-oden-ikpi-02516b32a/" target="_blank" rel="noopener noreferrer" className="text-link"><Icon name="arrow-up-right" size={18} />LinkedIn</a>
        </div>
      </div>

      <div className="contact__card">
        {status === 'sent' ? (
          <div className="contact__sent" role="status">
            <Icon name="circle-check" size={28} />
            <h3>Message sent</h3>
            <p>Thanks for reaching out. I’ll get back to you soon.</p>
            <Button variant="secondary" onClick={() => setStatus('idle')}>Send another</Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="contact__form">
            <div className="ti-field">
              <label className="ti-label" htmlFor="cf-name">Name</label>
              <input id="cf-name" className="ti-input" autoComplete="name" value={v.name} onChange={set('name')} maxLength={120}
                aria-invalid={errors.name ? 'true' : undefined} aria-describedby={errors.name ? 'cf-name-err' : undefined} />
              <FieldError id="cf-name-err">{errors.name}</FieldError>
            </div>

            <fieldset className="contact__pair" aria-describedby="cf-contact-hint">
              <legend className="ti-label">How can I reach you?</legend>
              <div className="contact__pair-grid">
                <div className="ti-field">
                  <label className="ti-label ti-label--sub" htmlFor="cf-email">Email</label>
                  <input id="cf-email" type="email" inputMode="email" className="ti-input" autoComplete="email" value={v.email} onChange={set('email')} maxLength={200}
                    aria-invalid={errors.email || contactErr ? 'true' : undefined} aria-describedby={errors.email ? 'cf-email-err' : undefined} />
                  <FieldError id="cf-email-err">{errors.email}</FieldError>
                </div>
                <div className="ti-field">
                  <label className="ti-label ti-label--sub" htmlFor="cf-phone">Phone</label>
                  <input id="cf-phone" type="tel" inputMode="tel" className="ti-input" autoComplete="tel" value={v.phone} onChange={set('phone')} maxLength={40}
                    aria-invalid={errors.phone || contactErr ? 'true' : undefined} aria-describedby={errors.phone ? 'cf-phone-err' : undefined} />
                  <FieldError id="cf-phone-err">{errors.phone}</FieldError>
                </div>
              </div>
              {contactErr ? <FieldError id="cf-contact-hint">{contactErr}</FieldError> : <span id="cf-contact-hint" className="ti-helper">Leave at least one.</span>}
            </fieldset>

            <div className="ti-field">
              <label className="ti-label" htmlFor="cf-message">Message</label>
              <textarea id="cf-message" className="ti-input ti-textarea" rows={6} value={v.message} onChange={set('message')} maxLength={5000}
                aria-invalid={errors.message ? 'true' : undefined} aria-describedby={errors.message ? 'cf-message-err' : undefined} />
              <FieldError id="cf-message-err">{errors.message}</FieldError>
            </div>

            <div className="hp" aria-hidden="true">
              <label htmlFor="cf-company">Company</label>
              <input id="cf-company" tabIndex={-1} autoComplete="off" value={v.company} onChange={set('company')} />
            </div>

            {status === 'error' && (
              <p className="contact__error" role="alert">
                {serverMsg} You can also email <a href="mailto:kolomodenikpi@gmail.com">kolomodenikpi@gmail.com</a>.
              </p>
            )}

            <div className="contact__actions">
              <Button type="submit" loading={status === 'sending'} iconRight="send">Send message</Button>
              <span className="ti-helper">Your details are only used to reply to you.</span>
            </div>
          </form>
        )}
      </div>
    </div>
    </section>
  );
}
