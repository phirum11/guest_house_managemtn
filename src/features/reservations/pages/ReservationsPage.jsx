import { useState } from 'react'
import { reservations } from '../../../data/reservations'
import { useLanguage } from '../../../language'
import Card from '../../../components/ui/Card'
import PageHeader from '../../../components/layout/PageHeader'
import ReservationDetailPanel from '../components/ReservationDetailPanel'
import ReservationFilters from '../components/ReservationFilters'
import ReservationList from '../components/ReservationList'
import ReservationTimeline from '../components/ReservationTimeline'

export default function ReservationsPage() {
  const { t } = useLanguage()
  const [selectedId, setSelectedId] = useState('A-2038')
  const [search, setSearch] = useState('')

  const selected =
    reservations.find((reservation) => reservation.id === selectedId) ??
    reservations[0]

  const filtered = reservations.filter((reservation) => {
    const term = search.trim().toLowerCase()
    if (!term) return true
    return (
      reservation.guest.toLowerCase().includes(term) ||
      reservation.id.toLowerCase().includes(term) ||
      reservation.room.toLowerCase().includes(term)
    )
  })

  return (
    <div>
      <PageHeader
        eyebrow={t.date.range}
        title={t.reservations.title}
        subtitle={t.reservations.subtitle}
      />

      <Card className="overflow-hidden">
        <ReservationFilters />
        <div className="grid gap-4 p-4 xl:grid-cols-[minmax(0,1fr)_330px]">
          <ReservationTimeline />
          <div className="xl:sticky xl:top-[94px] xl:self-start">
            <ReservationDetailPanel reservation={selected} />
          </div>
        </div>
      </Card>

      <ReservationList
        reservations={filtered}
        selectedId={selectedId}
        onSelect={setSelectedId}
        search={search}
        onSearch={setSearch}
      />
    </div>
  )
}
