import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import Pagination from '../../../components/ui/Pagination'
import StatusBadge from '../../../components/ui/StatusBadge'
import { Table, Td, Th, Tr } from '../../../components/ui/Table'

export default function GuestTable({
  guests,
  selectedId,
  onSelect,
}) {
  const { t } = useLanguage()

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>{t.guests.table.guest}</Th>
            <Th>{t.guests.table.tag}</Th>
            <Th>{t.guests.table.lastStay}</Th>
            <Th align="center">{t.guests.table.nights}</Th>
            <Th align="right">{t.guests.table.lifetime}</Th>
            <Th align="right">{t.guests.table.balance}</Th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <Tr
              key={guest.id}
              onClick={() => onSelect(guest.id)}
              className={[
                'cursor-pointer',
                selectedId === guest.id ? 'bg-cream-100' : '',
              ].join(' ')}
            >
              <Td>
                <div className="flex items-center gap-2.5">
                  <Avatar name={guest.name} size="sm" />
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-[11px] font-medium text-ink">
                      {guest.name}
                    </p>
                    <p className="truncate text-[9px] text-ink-faint">{guest.email}</p>
                  </div>
                </div>
              </Td>
              <Td>
                <StatusBadge kind="tag" status={guest.tag} dot={false} />
              </Td>
              <Td className="text-ink-soft">{guest.lastStay}</Td>
              <Td align="center" className="text-ink-soft">
                {guest.nights}
              </Td>
              <Td align="right" className="font-medium">
                {guest.lifetime}
              </Td>
              <Td align="right">
                {guest.balance > 0 ? (
                  <Badge tone="warning">€{guest.balance} {t.guests.due}</Badge>
                ) : (
                  <span className="text-[11px] text-sage">{t.guests.settled}</span>
                )}
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      <div className="flex flex-col gap-2 border-t border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] text-ink-faint">{t.guests.showing}</p>
        <Pagination page={1} pages={3} />
      </div>
    </>
  )
}
