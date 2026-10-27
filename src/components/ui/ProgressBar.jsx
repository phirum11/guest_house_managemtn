const tones = {
  brand: 'bg-brand',
  sage: 'bg-sage',
  amber: 'bg-amber',
  danger: 'bg-danger',
  ink: 'bg-ink',
  muted: 'bg-line-strong',
}

export default function ProgressBar({
  value = 0,
  max = 100,
  tone = 'brand',
  className = '',
  trackClassName = '',
  heightClassName = 'h-1.5',
}) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0

  return (
    <div
      className={[
        'w-full overflow-hidden rounded-full bg-cream-300/70',
        heightClassName,
        trackClassName,
      ].join(' ')}
    >
      <div
        className={['h-full rounded-full transition-all', tones[tone] ?? tones.brand, className].join(' ')}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
