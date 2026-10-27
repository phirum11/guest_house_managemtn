import { useState } from 'react'
import { Plus } from 'lucide-react'
import { rooms } from '../../../data/rooms'
import { useLanguage } from '../../../language'
import Button from '../../../components/ui/Button'
import PageHeader from '../../../components/layout/PageHeader'
import RoomDetailPanel from '../components/RoomDetailPanel'
import RoomFilters from '../components/RoomFilters'
import RoomGrid from '../components/RoomGrid'
import RoomStats from '../components/RoomStats'

export default function RoomsPage() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [view, setView] = useState('grid')
  const [selectedId, setSelectedId] = useState('r01')

  const filteredRooms = rooms.filter((room) => {
    if (filter === 'all') return true
    if (filter === 'suites') return room.type === 'suite'
    if (filter === 'doubles') return room.type === 'double'
    if (filter === 'studios') return room.type === 'studio'
    return true
  })

  const selectedRoom = rooms.find((room) => room.id === selectedId) ?? rooms[0]

  return (
    <div>
      <PageHeader
        eyebrow={t.date.todayShort}
        title={t.rooms.title}
        subtitle={t.rooms.subtitle}
        actions={
          <Button variant="primary" icon={Plus}>
            {t.rooms.addUnit}
          </Button>
        }
      />

      <RoomStats />

      <RoomFilters
        value={filter}
        onChange={setFilter}
        view={view}
        onViewChange={setView}
      />

      <div className="mt-2 grid gap-5 xl:grid-cols-[minmax(0,1fr)_350px]">
        <RoomGrid
          rooms={filteredRooms}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <div className="xl:sticky xl:top-[94px] xl:self-start">
          <RoomDetailPanel room={selectedRoom} />
        </div>
      </div>
    </div>
  )
}
