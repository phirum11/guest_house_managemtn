const tones = {
  neutral: 'border-line bg-cream-100 text-ink-soft',
  brand: 'border-brand-line bg-brand-soft text-brand-strong',
  success: 'border-sage-line bg-sage-soft text-sage',
  warning: 'border-amber-line bg-amber-soft text-amber',
  danger: 'border-danger-line bg-danger-soft text-danger',
  muted: 'border-line bg-transparent text-ink-faint',
  outline: 'border-line-strong bg-transparent text-ink-soft',
  info: 'border-[#cdd8de] bg-info-soft text-info',
}

export default function Badge({
  tone = 'neutral',
  dot = false,
  className = '',
  children,
}) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11px] font-medium leading-5',
        tones[tone] ?? tones.neutral,
        className,
      ].join(' ')}
    >
      {dot ? <span className="h-1.5 w-1.5 rounded-full bg-current" /> : null}
      {children}
    </span>
  )
}
