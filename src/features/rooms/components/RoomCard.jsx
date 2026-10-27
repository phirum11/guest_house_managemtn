import { useLanguage } from '../../../language'
import StatusBadge from '../../../components/ui/StatusBadge'

const dotTone = {
  occupied: 'bg-brand',
  vacantClean: 'bg-sage',
  dirty: 'bg-amber',
  inspected: 'bg-ink',
  outOfOrder: 'bg-ink-faint',
}

export default function RoomCard({ room, selected, onSelect }) {
  const { t } = useLanguage()
  const detail =
    room.guest ??
    (room.until
      ? `${t.rooms.detail.until} ${room.until}`
      : room.assignee ?? t.rooms.detail.noGuest)

  return (
    <button
      type="button"
      onClick={() => onSelect?.(room.id)}
      className={[
        'group rounded-xl border bg-cream-50 p-4 text-left transition-all',
        selected
          ? 'border-brand-line bg-white shadow-card ring-1 ring-brand-line'
          : 'border-line hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card',
      ].join(' ')}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[9px] uppercase tracking-[0.12em] text-ink-faint">
          {t.common.room} {room.number}
        </span>
        <span className={['h-1.5 w-1.5 rounded-full', dotTone[room.status]].join(' ')} />
      </div>

      <p className="mt-1.5 font-display text-[16px] leading-snug text-ink">{room.name}</p>
      <p className="mt-0.5 text-[9px] text-ink-soft">
        {t.roomTypes[room.type]} · គេង {room.sleeps}
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <StatusBadge kind="room" status={room.status} dot />
        <span className="truncate text-[10px] text-ink-faint">{detail}</span>
      </div>
    </button>
  )
}
