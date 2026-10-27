import { useState } from 'react'
import { Import, UserPlus } from 'lucide-react'
import { guests } from '../../../data/guests'
import { useLanguage } from '../../../language'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import PageHeader from '../../../components/layout/PageHeader'
import GuestDetailPanel from '../components/GuestDetailPanel'
import GuestFilters from '../components/GuestFilters'
import GuestTable from '../components/GuestTable'

export default function GuestsPage() {
  const { t } = useLanguage()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [selectedId, setSelectedId] = useState('g2')

  const filtered = guests.filter((guest) => {
    const term = search.trim().toLowerCase()
    const matchesSearch =
      !term ||
      guest.name.toLowerCase().includes(term) ||
      guest.email.toLowerCase().includes(term) ||
      guest.phone.toLowerCase().includes(term)

    if (!matchesSearch) return false
    if (filter === 'inHouse') return guest.inHouse
    if (filter === 'returning') return guest.returning
    if (filter === 'vip') return guest.vip
    return true
  })

  const selectedGuest = guests.find((guest) => guest.id === selectedId) ?? guests[0]

  return (
    <div>
      <PageHeader
        eyebrow={t.date.todayShort}
        title={t.guests.title}
        subtitle={t.guests.subtitle}
        actions={
          <>
            <Button variant="secondary" icon={Import}>
              {t.guests.import}
            </Button>
            <Button variant="primary" icon={UserPlus}>
              {t.guests.addGuest}
            </Button>
          </>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="overflow-hidden">
          <GuestFilters
            search={search}
            onSearch={setSearch}
            filter={filter}
            onFilter={setFilter}
          />
          <GuestTable
            guests={filtered}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </Card>

        <div className="xl:sticky xl:top-[94px] xl:self-start">
          <GuestDetailPanel guest={selectedGuest} />
        </div>
      </div>
    </div>
  )
}
