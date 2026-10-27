export default function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'pill',
  className = '',
}) {
  if (variant === 'underline') {
    return (
      <div className={['flex items-center gap-5 border-b border-line', className].join(' ')}>
        {tabs.map((tab) => {
          const active = tab.key === value
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange?.(tab.key)}
              className={[
                'relative -mb-px flex items-center gap-2 border-b-2 pb-2.5 pt-1 text-[12px] transition-colors',
                active
                  ? 'border-brand text-ink'
                  : 'border-transparent text-ink-soft hover:text-ink',
              ].join(' ')}
            >
              {tab.label}
              {tab.count != null ? (
                <span className="rounded-full bg-cream-200 px-1.5 text-[10px] text-ink-soft">
                  {tab.count}
                </span>
              ) : null}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className={['inline-flex items-center gap-1 rounded-lg bg-cream-200/70 p-1', className].join(' ')}>
      {tabs.map((tab) => {
        const active = tab.key === value
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange?.(tab.key)}
            className={[
              'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium transition-colors',
              active
                ? 'bg-ink text-cream-50 shadow-sm'
                : 'text-ink-soft hover:bg-cream-50 hover:text-ink',
            ].join(' ')}
          >
            {tab.label}
            {tab.count != null ? (
              <span
                className={[
                  'rounded-full px-1.5 text-[10px] leading-4',
                  active ? 'bg-cream-50/20 text-cream-50' : 'bg-cream-50 text-ink-faint',
                ].join(' ')}
              >
                {tab.count}
              </span>
            ) : null}
          </button>
        )
      })}
    </div>
  )
}
