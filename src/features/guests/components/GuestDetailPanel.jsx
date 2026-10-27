import {
  CalendarPlus,
  CreditCard,
  Mail,
  MapPin,
  MessageSquare,
  Pencil,
  Phone,
  Star,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../language'
import { paths } from '../../../router/paths'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import StatusBadge from '../../../components/ui/StatusBadge'

export default function GuestDetailPanel({ guest }) {
  const { t } = useLanguage()
  const copy = t.guests.detail

  if (!guest) return null

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-5 pb-4 pt-5">
        <div className="flex items-start gap-3">
          <Avatar name={guest.name} size="lg" />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-display text-[22px] leading-tight text-ink">
                  {guest.name}
                </h2>
                <p className="mt-1 text-[10px] text-ink-soft">{guest.location} · {guest.language}</p>
              </div>
              <button
                type="button"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink-faint transition hover:bg-cream-100 hover:text-ink"
                aria-label={t.common.edit}
              >
                <Pencil className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {guest.vip ? (
                <Badge tone="brand">
                  <Star className="h-3 w-3" /> VIP
                </Badge>
              ) : (
                <StatusBadge kind="tag" status={guest.tag} dot={false} />
              )}
              {guest.returning ? <Badge tone="success">{copy.returning}</Badge> : null}
              <Badge tone="neutral">{copy.direct}</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px border-b border-line bg-line">
        {[
          { label: copy.stays, value: '3' },
          { label: copy.nights, value: guest.nights },
          { label: copy.lifetime, value: guest.lifetime },
        ].map((item) => (
          <div key={item.label} className="bg-cream-50 px-3 py-3 text-center">
            <p className="text-[9px] text-ink-faint">{item.label}</p>
            <p className="mt-0.5 font-display text-[18px] leading-tight text-ink">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-2.5 border-b border-line px-5 py-4 text-[10px] text-ink-soft">
        {[
          { icon: Mail, value: guest.email },
          { icon: Phone, value: guest.phone },
          { icon: MapPin, value: guest.location },
          { icon: CreditCard, value: 'Visa ••4192 · ផុតកំណត់ 08/27' },
        ].map((item) => {
          const Icon = item.icon
          return (
            <div key={item.value} className="flex items-start gap-2">
              <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-faint" strokeWidth={1.6} />
              <span className="min-w-0 break-words">{item.value}</span>
            </div>
          )
        })}
      </div>

      <div className="border-b border-line px-5 py-4">
        <p className="eyebrow mb-2">{copy.preferences}</p>
        <div className="flex flex-wrap gap-1.5">
          {guest.preferences.map((key) => (
            <Badge key={key} tone="outline">
              {t.guests.preferences[key] ?? key}
            </Badge>
          ))}
        </div>
        <p className="mt-3 text-[10px] leading-6 text-ink-soft">
          {guest.notes[0]?.text}
        </p>
      </div>

      <div className="border-b border-line px-5 py-4">
        <div className="mb-2.5 flex items-center justify-between">
          <p className="eyebrow">{copy.stayHistory}</p>
          <button type="button" className="text-[9px] text-brand">
            {copy.all}
          </button>
        </div>
        <div className="space-y-2.5">
          {guest.stays.map((stay) => (
            <div key={`${stay.room}-${stay.dates}`} className="flex gap-2">
              <span
                className={[
                  'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
                  stay.status === 'upcoming' ? 'bg-brand' : 'bg-line-strong',
                ].join(' ')}
              />
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-ink">{stay.room}</p>
                <p className="text-[9px] text-ink-faint">{stay.dates}</p>
                <p className="text-[9px] text-ink-faint">{stay.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-4">
        <p className="eyebrow mb-2">{copy.staffNotes}</p>
        <div className="space-y-2">
          {guest.notes.map((note) => (
            <div key={note.text} className="rounded-lg bg-cream-100 px-3 py-2.5">
              <p className="text-[10px] leading-6 text-ink-soft">{note.text}</p>
              <p className="mt-1 text-[8px] text-ink-faint">{note.meta}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 border-t border-line bg-cream-100/40 px-5 py-4">
        <Button as={Link} to={paths.newBooking} variant="primary" size="sm" icon={CalendarPlus} className="flex-1">
          {copy.newBooking}
        </Button>
        <Button variant="secondary" size="sm" icon={MessageSquare}>
          {copy.message}
        </Button>
      </div>
    </Card>
  )
}
