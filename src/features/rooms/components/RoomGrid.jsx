import { Plus } from 'lucide-react'
import { floors } from '../../../data/rooms'
import { useLanguage } from '../../../language'
import RoomCard from './RoomCard'

export default function RoomGrid({ rooms, selectedId, onSelect }) {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {floors.map((floor, floorIndex) => {
        const floorRooms = rooms.filter((room) => room.floor === floor)
        if (!floorRooms.length) return null
        const isLast = floorIndex === floors.length - 1

        return (
          <section key={floor}>
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                {t.floors[floor]} · {floorRooms.length} {t.rooms.floorMeta}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
              {floorRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  selected={room.id === selectedId}
                  onSelect={onSelect}
                />
              ))}

              {isLast ? (
                <button
                  type="button"
                  className="flex min-h-[130px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line-strong bg-transparent text-ink-faint transition hover:border-brand-line hover:text-brand"
                >
                  <Plus className="h-5 w-5" strokeWidth={1.6} />
                  <span className="text-[10px]">{t.rooms.addUnit}</span>
                </button>
              ) : null}
            </div>
          </section>
        )
      })}
    </div>
  )
}
