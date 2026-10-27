export default function BarChart({
  data = [],
  height = 150,
  className = '',
  valueClassName = '',
  barClassName = '',
  highlightClassName = 'bg-brand',
  baseClassName = 'bg-cream-300',
}) {
  const max = Math.max(...data.map((item) => item.value), 1) * 1.08

  return (
    <div className={className}>
      <div className="flex items-end gap-2 sm:gap-3" style={{ height }}>
        {data.map((item) => {
          const percent = Math.max(3, (item.value / max) * 100)
          return (
            <div key={item.label} className="flex h-full min-w-0 flex-1 flex-col justify-end">
              <div
                className={[
                  'relative w-full rounded-t-md transition-all',
                  item.highlight ? highlightClassName : baseClassName,
                  barClassName,
                ].join(' ')}
                style={{ height: `${percent}%` }}
                title={item.display ?? String(item.value)}
              >
                <span
                  className={[
                    'absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px]',
                    item.highlight ? 'font-semibold text-brand' : 'text-ink-soft',
                    valueClassName,
                  ].join(' ')}
                >
                  {item.display ?? item.value}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-2 flex gap-2 border-t border-line pt-2 sm:gap-3">
        {data.map((item) => (
          <span
            key={item.label}
            className={[
              'min-w-0 flex-1 truncate text-center text-[10px]',
              item.highlight ? 'font-semibold text-ink' : 'text-ink-soft',
            ].join(' ')}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
