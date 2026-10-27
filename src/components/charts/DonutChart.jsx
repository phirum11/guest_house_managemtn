export default function DonutChart({
  segments = [],
  size = 168,
  thickness = 18,
  centerLabel,
  centerSub,
  className = '',
}) {
  const total = segments.reduce((sum, item) => sum + item.value, 0) || 1
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const arcs = segments.reduce((items, segment) => {
    const length = (segment.value / total) * circumference
    const previous = items[items.length - 1]
    const offset = previous ? previous.offset + previous.length : 0
    items.push({
      ...segment,
      length,
      dash: Math.max(0, length - 2),
      offset,
    })
    return items
  }, [])

  return (
    <div
      className={['relative shrink-0', className].join(' ')}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="var(--color-cream-300)"
          strokeWidth={thickness}
        />
        {arcs.map((segment) => (
          <circle
            key={segment.label}
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth={thickness}
            strokeDasharray={`${segment.dash} ${circumference - segment.dash}`}
            strokeDashoffset={-segment.offset}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-display text-[28px] leading-none text-ink">
          {centerLabel}
        </span>
        {centerSub ? (
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            {centerSub}
          </span>
        ) : null}
      </div>
    </div>
  )
}
