import {
  Bath,
  BedDouble,
  Briefcase,
  Coffee,
  Droplets,
  LogOut,
  MoveRight,
  Pencil,
  Shirt,
  Trees,
  Tv,
  Wifi,
  Wind,
  Wine,
} from 'lucide-react'
import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import StatusBadge from '../../../components/ui/StatusBadge'

const amenityIcons = {
  wifi: Wifi,
  ac: Wind,
  shower: Droplets,
  espresso: Coffee,
  terrace: Trees,
  tv: Tv,
  iron: Shirt,
  minibar: Wine,
  desk: Briefcase,
  bath: Bath,
}

export default function RoomDetailPanel({ room }) {
  const { t } = useLanguage()
  const copy = t.rooms.detail

  if (!room) return null

  const detail =
    room.guest ??
    (room.until ? `${copy.until} ${room.until}` : room.assignee ?? copy.noGuest)

  return (
    <Card className="overflow-hidden">
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#c5aa8d] via-[#9b7758] to-[#574637]">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,#f6e9d8_0,transparent_38%),radial-gradient(circle_at_80%_70%,#2f2a24_0,transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-cream-50">
          <p className="text-[9px] uppercase tracking-[0.16em] text-cream-200/80">
            {t.common.room} {room.number} · {t.floors[room.floor]}
          </p>
          <p className="font-display text-[22px] leading-tight">{room.name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <StatusBadge
          kind="room"
          status={room.status}
          dot
        />
        <button
          type="button"
          className="inline-flex items-center gap-1 text-[10px] text-ink-soft transition hover:text-brand"
        >
          <Pencil className="h-3 w-3" />
          {copy.editRoom}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-px border-b border-line bg-line">
        {[
          { label: copy.size, value: `${room.size} m²` },
          { label: copy.sleeps, value: room.sleeps },
          { label: copy.rate, value: `€${room.rate}` },
        ].map((item) => (
          <div key={item.label} className="bg-cream-50 px-4 py-3 text-center">
            <p className="text-[9px] uppercase tracking-[0.12em] text-ink-faint">
              {item.label}
            </p>
            <p className="mt-0.5 font-display text-[18px] text-ink">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="border-b border-line px-5 py-4">
        <div className="flex items-center gap-2.5">
          <Avatar name={detail} size="sm" />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[11px] font-medium text-ink">{detail}</p>
            <p className="mt-0.5 text-[9px] text-ink-faint">
              {room.guest ? copy.checkOut + ' ' + room.checkout : room.until ? copy.until + ' ' + room.until : t.status[room.status] ?? ''}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-line px-5 py-4">
        <p className="eyebrow mb-2.5">{copy.inRoom}</p>
        <div className="flex flex-wrap gap-1.5">
          {room.amenities.map((key) => {
            const Icon = amenityIcons[key] ?? BedDouble
            return (
              <span
                key={key}
                className="inline-flex items-center gap-1 rounded-full border border-line bg-cream-100 px-2 py-1 text-[9px] text-ink-soft"
              >
                <Icon className="h-3 w-3" strokeWidth={1.7} />
                {copy.amenities[key] ?? key}
              </span>
            )
          })}
        </div>
      </div>

      <div className="border-b border-line px-5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="eyebrow">{copy.photos}</p>
          <span className="text-[9px] text-ink-faint">6 {copy.photoCount}</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-16 rounded-md bg-gradient-to-br from-[#d8c4a8] to-[#8d6d4f]" />
          <div className="h-16 rounded-md bg-gradient-to-br from-[#bfa98c] to-[#6c5541]" />
          <div className="flex h-16 items-center justify-center rounded-md bg-cream-200 text-[11px] text-ink-soft">
            +3
          </div>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="eyebrow">{copy.maintenanceHistory}</p>
          <button type="button" className="text-[9px] text-brand hover:text-brand-strong">
            {copy.logJob}
          </button>
        </div>
        {room.history?.length ? (
          <div className="space-y-2.5">
            {room.history.map((item) => (
              <div key={item.title} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                <div className="min-w-0">
                  <p className="text-[10px] leading-5 text-ink">{item.title}</p>
                  <p className="text-[9px] leading-5 text-ink-faint">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[10px] text-ink-faint">{copy.noHistory}</p>
        )}
      </div>

      <div className="flex gap-2 border-t border-line bg-cream-100/40 px-5 py-4">
        <Button variant="primary" size="sm" icon={LogOut} className="flex-1">
          {copy.checkOut}
        </Button>
        <Button variant="secondary" size="sm" icon={MoveRight} className="flex-1">
          {copy.moveRoom}
        </Button>
      </div>
    </Card>
  )
}
