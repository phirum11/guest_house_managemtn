import { ChevronLeft, ChevronRight } from 'lucide-react'
import { timelineColumns, timelineRows } from '../../../data/reservations'
import { useLanguage } from '../../../language'
import { timelineDot } from '../statusStyles'
import Card from '../../../components/ui/Card'

const barTones = {
  brand: 'border-brand bg-brand text-cream-50',
  sage: 'border-sage bg-sage text-cream-50',
  muted: 'border-line bg-cream-200 text-ink-faint',
}

export default function ReservationTimeline() {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded border border-line text-ink-soft transition hover:bg-cream-100"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded border border-line text-ink-soft transition hover:bg-cream-100"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
          <span className="ml-2 text-[11px] font-medium text-ink">{t.date.range}</span>
        </div>
        <button
          type="button"
          className="rounded-lg border border-line bg-cream-50 px-2.5 py-1 text-[10px] text-ink-soft transition hover:border-line-strong hover:text-ink"
        >
          {t.reservations.today}
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[820px]">
          <div className="flex border-b border-line">
            <div className="w-[150px] shrink-0 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              {t.reservations.roomHeader}
            </div>
            <div
              className="grid flex-1"
              style={{ gridTemplateColumns: `repeat(${timelineColumns.length}, minmax(0, 1fr))` }}
            >
              {timelineColumns.map((column, index) => (
                <div
                  key={`${column.day}-${column.date}`}
                  className={[
                    'border-l border-line/60 px-1 py-1.5 text-center',
                    index === 0 ? 'bg-brand-soft/40' : '',
                  ].join(' ')}
                >
                  <p className="text-[8px] text-ink-faint">{column.day}</p>
                  <p
                    className={[
                      'text-[10px]',
                      index === 0 ? 'font-semibold text-brand' : 'text-ink-soft',
                    ].join(' ')}
                  >
                    {column.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {timelineRows.map((row) => (
            <div key={row.id} className="flex border-b border-line/60 last:border-b-0">
              <div className="flex w-[150px] shrink-0 items-center gap-2 px-4 py-2.5">
                <span className={['h-1.5 w-1.5 shrink-0 rounded-full', timelineDot[row.status]].join(' ')} />
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-[10px] font-medium text-ink">{row.room}</p>
                  <p className="truncate text-[8px] text-ink-faint">{row.type}</p>
                </div>
              </div>

              <div className="relative h-12 flex-1">
                <div
                  className="absolute inset-0 grid"
                  style={{ gridTemplateColumns: `repeat(${timelineColumns.length}, minmax(0, 1fr))` }}
                >
                  {timelineColumns.map((column) => (
                    <div key={`${row.id}-${column.date}`} className="border-l border-line/50" />
                  ))}
                </div>

                {row.bars.map((bar) => (
                  <div
                    key={`${row.id}-${bar.name}`}
                    className={[
                      'absolute top-1/2 flex h-7 -translate-y-1/2 items-center overflow-hidden rounded border px-1.5 text-[8px] font-medium',
                      barTones[bar.tone] ?? barTones.brand,
                    ].join(' ')}
                    style={{
                      left: `${(bar.start / timelineColumns.length) * 100}%`,
                      width: `calc(${(bar.span / timelineColumns.length) * 100}% - 3px)`,
                    }}
                    title={`${bar.name} · ${bar.label}`}
                  >
                    <span className="truncate">{bar.name}</span>
                    <span className="ml-auto hidden shrink-0 pl-1 opacity-70 2xl:inline">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between px-4 py-2.5">
            <p className="text-[9px] text-ink-faint">{t.reservations.scrollNote}</p>
            <button type="button" className="text-[9px] text-brand">
              {t.reservations.allRooms}
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
