import { X } from 'lucide-react'
import Card from './Card'

export default function DetailPanel({
  title,
  subtitle,
  badge,
  onClose,
  headerExtra,
  children,
  footer,
  className = '',
  bodyClassName = '',
}) {
  return (
    <Card className={['overflow-hidden', className].join(' ')}>
      <div className="border-b border-line px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {badge ? <div className="mb-2">{badge}</div> : null}
            <h2 className="truncate font-display text-[22px] leading-tight text-ink">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-1 text-[11px] leading-6 text-ink-soft">{subtitle}</p>
            ) : null}
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {headerExtra}
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-faint transition hover:bg-cream-100 hover:text-ink"
                aria-label="close"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className={['px-5 py-4', bodyClassName].join(' ')}>{children}</div>
      {footer ? (
        <div className="border-t border-line bg-cream-100/40 px-5 py-4">{footer}</div>
      ) : null}
    </Card>
  )
}
