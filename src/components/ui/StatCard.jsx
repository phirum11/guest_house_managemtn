export default function StatCard({
  label,
  value,
  note,
  extra,
  delta,
  className = '',
  valueClassName = '',
  icon: Icon,
}) {
  return (
    <div className={['px-5 py-4', className].join(' ')}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
          {label}
        </p>
        {Icon ? <Icon className="h-4 w-4 text-ink-faint" strokeWidth={1.6} /> : null}
      </div>
      <p
        className={[
          'mt-1 font-display text-[32px] leading-tight text-ink',
          valueClassName,
        ].join(' ')}
      >
        {value}
      </p>
      {note ? <p className="mt-1 text-[11px] leading-5 text-ink-soft">{note}</p> : null}
      {extra ? <p className="mt-0.5 text-[11px] leading-5 text-ink-faint">{extra}</p> : null}
      {delta ? (
        <p className="mt-1 flex items-center gap-1 text-[11px] leading-5 text-sage">
          <span aria-hidden="true">↗</span>
          {delta}
        </p>
      ) : null}
    </div>
  )
}
