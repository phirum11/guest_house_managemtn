import { CalendarDays, SlidersHorizontal, X } from 'lucide-react'
import { useLanguage } from '../../../language'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'

export default function ReservationFilters() {
  const { t } = useLanguage()
  const copy = t.reservations

  return (
    <div className="flex flex-col gap-2 border-b border-line px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-line bg-cream-50 px-2.5 text-[11px] text-ink transition hover:border-line-strong"
        >
          <CalendarDays className="h-3.5 w-3.5 text-ink-faint" />
          {copy.dateRange}
        </button>

        <label className="relative">
          <select className="h-8 appearance-none rounded-lg border border-line bg-cream-50 pl-2.5 pr-7 text-[11px] text-ink outline-none transition hover:border-line-strong">
            <option>{copy.allRoomTypes}</option>
            <option>{t.roomTypes.suite}</option>
            <option>{t.roomTypes.double}</option>
            <option>{t.roomTypes.studio}</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[8px] text-ink-faint">▼</span>
        </label>

        <Badge tone="outline">
          {t.status.reservation.confirmed}
          <X className="h-3 w-3 text-ink-faint" />
        </Badge>
        <Badge tone="outline">
          {t.channels.direct}
          <X className="h-3 w-3 text-ink-faint" />
        </Badge>

        <Button variant="ghost" size="sm" icon={SlidersHorizontal}>
          {copy.filters}
          <span className="rounded-full bg-brand-soft px-1.5 text-[9px] text-brand-strong">2</span>
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-[9px] text-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-brand" />
          {t.status.reservation.confirmed}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-sage" />
          {t.status.reservation.inHouse}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm border border-line-strong bg-cream-100" />
          {t.status.reservation.tentative}
        </span>
      </div>
    </div>
  )
}
