export default function EmptyState({ icon: Icon, title, text, action, className = '' }) {
  return (
    <div
      className={[
        'flex flex-col items-center justify-center gap-3 px-6 py-12 text-center',
        className,
      ].join(' ')}
    >
      {Icon ? (
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream-200 text-ink-soft">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
      ) : null}
      <div>
        <p className="text-[13px] font-medium text-ink">{title}</p>
        {text ? <p className="mt-1 text-[12px] text-ink-soft">{text}</p> : null}
      </div>
      {action}
    </div>
  )
}
