import {
  ArrowRight,
  LogIn,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  X,
} from 'lucide-react'
import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import StatusBadge from '../../../components/ui/StatusBadge'

export default function ReservationDetailPanel({ reservation }) {
  const { t } = useLanguage()
  const copy = t.reservations.detail

  if (!reservation) return null

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div className="border-b border-line px-5 py-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="eyebrow mb-1.5">{reservation.id}</p>
              <h2 className="font-display text-[22px] leading-tight text-ink">
                {reservation.guest}
              </h2>
              <p className="mt-1 text-[10px] leading-5 text-ink-soft">
                {reservation.guests} {t.common.guests} · {t.channels[reservation.channel]} ·{' '}
                {reservation.booked}
              </p>
            </div>
            <button
              type="button"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink-faint transition hover:bg-cream-100 hover:text-ink"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-2.5">
            <Avatar name={reservation.guest} size="md" />
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[11px] font-medium text-ink">
                {reservation.guest}
              </p>
              <p className="mt-0.5 truncate text-[9px] text-ink-faint">
                {reservation.guestMeta}
              </p>
            </div>
            <Button variant="secondary" size="xs">
              {t.reservations.detail.profile}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border-b border-line bg-line">
          <div className="bg-cream-50 px-4 py-3">
            <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
              {copy.checkIn}
            </p>
            <p className="mt-1 text-[11px] font-medium text-ink">{reservation.checkIn}</p>
            <p className="text-[9px] text-ink-soft">{copy.from} {reservation.from}</p>
          </div>
          <div className="bg-cream-50 px-4 py-3">
            <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
              {copy.checkOut}
            </p>
            <p className="mt-1 text-[11px] font-medium text-ink">{reservation.checkOut}</p>
            <p className="text-[9px] text-ink-soft">11:00</p>
          </div>
        </div>

        <div className="space-y-3 border-b border-line px-5 py-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
                {copy.room}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-ink">{reservation.room}</p>
              <p className="text-[9px] text-ink-soft">{reservation.roomMeta}</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
                {copy.rate}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-ink">{copy.flexible}</p>
              <p className="text-[9px] text-ink-soft">{reservation.rateMeta}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
                {copy.addOns}
              </p>
              <button type="button" className="inline-flex items-center gap-1 text-[9px] text-ink-soft hover:text-brand">
                <Pencil className="h-2.5 w-2.5" />
                {copy.edit}
              </button>
            </div>
            <div className="mt-1.5 space-y-1">
              {reservation.addOns.length ? (
                reservation.addOns.map((item) => (
                  <div key={item.label} className="flex justify-between gap-2 text-[10px]">
                    <span className="text-ink-soft">{item.label}</span>
                    <span className="text-ink">{item.value}</span>
                  </div>
                ))
              ) : (
                <p className="text-[10px] text-ink-faint">{copy.noAddOns}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2 border-b border-line bg-cream-100/40 px-5 py-4">
          <div className="flex items-center justify-between">
            <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
              {copy.payment}
            </p>
            <StatusBadge kind="reservation" status={reservation.status} dot />
          </div>
          {[
            { label: copy.total, value: `€${reservation.total.toLocaleString('en-US')}`, strong: true },
            { label: copy.paid, value: `−€${reservation.paid.toLocaleString('en-US')}` },
          ].map((row) => (
            <div key={row.label} className="flex justify-between gap-2 text-[10px]">
              <span className="text-ink-soft">{row.label}</span>
              <span className={row.strong ? 'font-medium text-ink' : 'text-ink-soft'}>
                {row.value}
              </span>
            </div>
          ))}
          <div className="flex justify-between gap-2 border-t border-line pt-2 text-[11px]">
            <span className="text-ink-soft">{copy.balanceDue}</span>
            <span className="font-semibold text-brand">
              €{reservation.balance.toLocaleString('en-US')}
            </span>
          </div>
        </div>

        <div className="border-b border-line px-5 py-4">
          <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
            {copy.notes}
          </p>
          <p className="mt-1 text-[10px] leading-6 text-ink-soft">{reservation.notes}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {reservation.tags.map((tag) => (
              <Badge key={tag} tone="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2 px-5 py-4">
          <Button variant="primary" size="sm" icon={LogIn} className="flex-1">
            {copy.checkInAction}
          </Button>
          <Button variant="secondary" size="sm" icon={MessageSquare}>
            {copy.message}
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <p className="font-display text-[16px] text-ink">{copy.stayHistory}</p>
          <button type="button" className="inline-flex items-center gap-1 text-[9px] text-brand">
            {t.common.viewAll}
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
        <div className="space-y-2.5 px-5 py-3.5">
          {reservation.history.length ? (
            reservation.history.map((stay) => (
              <div key={`${stay.room}-${stay.dates}`} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="text-[10px] font-medium text-ink">{stay.room}</p>
                  <p className="text-[9px] text-ink-faint">{stay.dates}</p>
                  <p className="text-[9px] text-ink-faint">{stay.meta}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[10px] text-ink-faint">{copy.noHistory}</p>
          )}
        </div>
      </Card>
    </div>
  )
}
