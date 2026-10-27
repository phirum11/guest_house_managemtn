import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({
  page = 1,
  pages = 1,
  onChange,
  className = '',
}) {
  const items = Array.from({ length: pages }, (_, index) => index + 1)

  return (
    <div className={['flex items-center gap-1', className].join(' ')}>
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange?.(page - 1)}
        className="flex h-7 w-7 items-center justify-center rounded border border-line text-ink-soft transition hover:bg-cream-100 disabled:opacity-35"
        aria-label="previous"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
      </button>
      {items.slice(0, 5).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange?.(item)}
          className={[
            'flex h-7 min-w-7 items-center justify-center rounded px-1.5 text-[11px] transition',
            item === page
              ? 'bg-brand text-cream-50'
              : 'border border-transparent text-ink-soft hover:border-line hover:bg-cream-100',
          ].join(' ')}
        >
          {item}
        </button>
      ))}
      <button
        type="button"
        disabled={page >= pages}
        onClick={() => onChange?.(page + 1)}
        className="flex h-7 w-7 items-center justify-center rounded border border-line text-ink-soft transition hover:bg-cream-100 disabled:opacity-35"
        aria-label="next"
      >
        <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
