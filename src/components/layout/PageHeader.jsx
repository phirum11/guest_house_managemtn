import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  actions,
  backTo,
  backLabel,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        {backTo ? (
          <Link
            to={backTo}
            className="mb-3 inline-flex items-center gap-1 text-[12px] text-ink-soft transition hover:text-brand"
          >
            <ChevronLeft className="h-4 w-4" />
            {backLabel}
          </Link>
        ) : null}
        {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
        <h1 className="font-display text-[32px] leading-[1.5] text-ink sm:text-[38px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-1.5 max-w-3xl text-[12px] leading-7 text-ink-soft">
            {subtitle}
          </p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex flex-wrap items-center gap-2">{actions}</div>
      ) : null}
    </div>
  )
}
