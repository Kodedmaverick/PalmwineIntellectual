// React versions of the Titaaria design-system primitives used by the site.
// They emit the same class names as the DS so components.css styles them.
import { Link } from 'react-router-dom';
import { icons } from 'lucide-react';

const toPascal = s => String(s).replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());

export function Icon({ name, size = 16, strokeWidth = 2, style, ...rest }) {
  const Glyph = icons[toPascal(name)];
  const s = { display: 'inline-block', flex: 'none', verticalAlign: 'middle', ...style };
  if (!Glyph) return <span aria-hidden="true" style={{ ...s, width: size, height: size }} />;
  return <Glyph size={size} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" style={s} {...rest} />;
}

export function Badge({ variant = 'float', icon, className = '', children, ...rest }) {
  return (
    <span className={['ti-badge', 'ti-badge--' + variant, className].filter(Boolean).join(' ')} {...rest}>
      {icon ? <Icon name={icon} size={12} strokeWidth={2.5} /> : null}
      {children}
    </span>
  );
}

export function Button({ variant = 'primary', size = 'md', block = false, iconLeft, iconRight, loading = false, className = '', children, href, type = 'button', ...rest }) {
  const v = variant === 'pill' ? 'ti-btn--primary ti-btn--pill' : 'ti-btn--' + variant;
  const cls = ['ti-btn', v, size === 'sm' ? 'ti-btn--sm' : '', block ? 'ti-btn--block' : '', className].filter(Boolean).join(' ');
  const isz = size === 'sm' || variant === 'pill' ? 16 : 18;
  const inner = (
    <>
      {iconLeft && !loading ? <Icon name={iconLeft} size={isz} /> : null}
      {loading ? <span className="ti-btn__dots" aria-hidden="true"><i /><i /><i /></span> : null}
      {loading ? <span className="sr-only">Sending</span> : children}
      {iconRight && !loading ? <Icon name={iconRight} size={isz} /> : null}
    </>
  );
  if (href && href.startsWith('/')) return <Link to={href} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type={type} className={cls} aria-busy={loading || undefined} {...rest}>{inner}</button>;
}
