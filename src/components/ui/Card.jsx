export default function Card({ className = '', children, ...props }) {
  return (
    <section
      className={[
        'rounded-xl border border-line bg-cream-50 shadow-card',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </section>
  )
}

export function CardHeader({
  title,
  subtitle,
  action,
  eyebrow,
  className = '',
  titleClassName = '',
}) {
  return (
    <div className={['flex items-start justify-between gap-4', className].join(' ')}>
      <div className="min-w-0">
        {eyebrow ? <p className="eyebrow mb-1">{eyebrow}</p> : null}
        <h2
          className={[
            'font-display text-[20px] leading-snug text-ink',
            titleClassName,
          ].join(' ')}
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-[12px] leading-6 text-ink-soft">{subtitle}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
