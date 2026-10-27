import { Download } from 'lucide-react'
import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import Pagination from '../../../components/ui/Pagination'
import SearchBar from '../../../components/ui/SearchBar'
import StatusBadge from '../../../components/ui/StatusBadge'
import { Table, Td, Th, Tr } from '../../../components/ui/Table'

export default function ReservationList({
  reservations,
  selectedId,
  onSelect,
  search,
  onSearch,
}) {
  const { t } = useLanguage()
  const copy = t.reservations.all

  return (
    <Card className="mt-5 overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
          <p className="mt-0.5 text-[10px] text-ink-faint">{copy.records}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SearchBar
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder={copy.findGuest}
            className="w-full sm:w-[220px]"
          />
          <Button variant="secondary" size="sm" icon={Download}>
            {copy.export}
          </Button>
        </div>
      </div>

      <Table>
        <thead>
          <tr>
            <Th>{copy.guest}</Th>
            <Th>{copy.room}</Th>
            <Th>{copy.arrival}</Th>
            <Th>{copy.departure}</Th>
            <Th align="center">{copy.nights}</Th>
            <Th>{copy.channel}</Th>
            <Th align="right">{copy.total}</Th>
            <Th>{copy.status}</Th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <Tr
              key={reservation.id}
              onClick={() => onSelect(reservation.id)}
              className={[
                'cursor-pointer',
                selectedId === reservation.id ? 'bg-cream-100' : '',
              ].join(' ')}
            >
              <Td>
                <div className="flex items-center gap-2.5">
                  <Avatar name={reservation.guest} size="sm" />
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-[11px] font-medium text-ink">
                      {reservation.guest}
                    </p>
                    <p className="text-[9px] text-ink-faint">{reservation.id}</p>
                  </div>
                </div>
              </Td>
              <Td className="text-ink-soft">{reservation.room}</Td>
              <Td className="text-ink-soft">{reservation.checkIn}</Td>
              <Td className="text-ink-soft">{reservation.checkOut}</Td>
              <Td align="center" className="text-ink-soft">
                {reservation.nights}
              </Td>
              <Td className="text-ink-soft">{t.channels[reservation.channel]}</Td>
              <Td align="right" className="font-medium">
                €{reservation.total.toLocaleString('en-US')}
              </Td>
              <Td>
                <StatusBadge kind="reservation" status={reservation.status} dot />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      <div className="flex flex-col gap-2 border-t border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] text-ink-faint">{copy.showing}</p>
        <Pagination page={1} pages={3} />
      </div>
    </Card>
  )
}
