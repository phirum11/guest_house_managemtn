import { roomStats } from '../../../data/rooms'
import { useLanguage } from '../../../language'
import Card from '../../../components/ui/Card'

const rows = [
  { key: 'vacantClean', dot: 'bg-sage' },
  { key: 'occupied', dot: 'bg-brand' },
  { key: 'dirty', dot: 'bg-amber' },
  { key: 'inspected', dot: 'bg-ink' },
  { key: 'outOfOrder', dot: 'bg-ink-faint' },
]

export default function RoomStats() {
  const { t } = useLanguage()

  return (
    <Card className="grid grid-cols-2 gap-px overflow-hidden bg-line sm:grid-cols-3 lg:grid-cols-5">
      {rows.map((row) => (
        <div key={row.key} className="bg-cream-50 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className={['h-1.5 w-1.5 rounded-full', row.dot].join(' ')} />
            <span className="text-[10px] text-ink-soft">{t.rooms.stats[row.key]}</span>
          </div>
          <p className="mt-0.5 font-display text-[28px] leading-tight text-ink">
            {roomStats[row.key]}
          </p>
        </div>
      ))}
    </Card>
  )
}
