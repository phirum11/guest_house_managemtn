import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import Card from '../../../components/ui/Card'
import Pagination from '../../../components/ui/Pagination'
import StatusBadge from '../../../components/ui/StatusBadge'
import Tabs from '../../../components/ui/Tabs'
import { Table, Td, Th, Tr } from '../../../components/ui/Table'

export default function FoliosCard({
  folios,
  tabs,
  activeTab,
  onTab,
  selectedId,
  onSelect,
}) {
  const { t } = useLanguage()
  const copy = t.billing

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-4 py-3">
        <Tabs tabs={tabs} value={activeTab} onChange={onTab} variant="underline" />
      </div>

      <Table>
        <thead>
          <tr>
            <Th>{copy.table.folio}</Th>
            <Th>{copy.table.guest}</Th>
            <Th>{copy.table.room}</Th>
            <Th>{copy.table.issued}</Th>
            <Th align="right">{copy.table.total}</Th>
            <Th align="right">{copy.table.balance}</Th>
            <Th>{copy.table.status}</Th>
          </tr>
        </thead>
        <tbody>
          {folios.map((folio) => (
            <Tr
              key={folio.id}
              onClick={() => onSelect(folio.id)}
              className={['cursor-pointer', selectedId === folio.id ? 'bg-cream-100' : ''].join(' ')}
            >
              <Td className="font-medium text-ink">{folio.id}</Td>
              <Td>
                <div className="flex items-center gap-2.5">
                  <Avatar name={folio.guest} size="sm" />
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-[11px] font-medium text-ink">{folio.guest}</p>
                    <p className="text-[9px] text-ink-faint">{folio.guestMeta}</p>
                  </div>
                </div>
              </Td>
              <Td className="text-ink-soft">{folio.room}</Td>
              <Td className="text-ink-soft">{folio.issued}</Td>
              <Td align="right" className="font-medium">
                €{folio.total.toLocaleString('en-US')}
              </Td>
              <Td align="right">
                {folio.balance > 0 ? (
                  <Badge tone="warning">€{folio.balance.toLocaleString('en-US')}</Badge>
                ) : folio.balance < 0 ? (
                  <span className="text-[10px] text-sage">
                    −€{Math.abs(folio.balance).toLocaleString('en-US')}
                  </span>
                ) : (
                  <span className="text-[10px] text-ink-faint">—</span>
                )}
              </Td>
              <Td>
                <StatusBadge kind="billing" status={folio.status} dot />
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
