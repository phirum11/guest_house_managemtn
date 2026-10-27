import { ArrowRight, ReceiptText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { departureList } from '../../../data/dashboard'
import { useLanguage } from '../../../language'
import { paths } from '../../../router/paths'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Card, { CardHeader } from '../../../components/ui/Card'
import { Table, Td, Th, Tr } from '../../../components/ui/Table'

export default function DeparturesTable() {
  const { t } = useLanguage()
  const copy = t.dashboard.departures

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <CardHeader
          title={copy.title}
          subtitle={copy.subtitle}
          action={
            <Link
              to={paths.reservations}
              className="inline-flex items-center gap-1 text-[11px] text-ink-soft hover:text-brand"
            >
              {t.common.viewAll}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          }
        />
      </div>

      <Table className="px-2">
        <thead>
          <tr>
            <Th>{copy.guest}</Th>
            <Th>{copy.room}</Th>
            <Th>{copy.dueOut}</Th>
            <Th align="right">{copy.balance}</Th>
            <Th>{copy.status}</Th>
            <Th align="right">{copy.action}</Th>
          </tr>
        </thead>
        <tbody>
          {departureList.map((row) => (
            <Tr key={row.id}>
              <Td>
                <div className="flex items-center gap-2">
                  <Avatar name={row.name} size="sm" />
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-[11px] font-medium text-ink">{row.name}</p>
                    <p className="text-[9px] text-ink-faint">
                      {row.nights} {t.common.nights}
                    </p>
                  </div>
                </div>
              </Td>
              <Td className="text-ink-soft">{row.room}</Td>
              <Td className="text-ink-soft">{row.due}</Td>
              <Td align="right" className="font-medium">
                {row.balance}
              </Td>
              <Td>
                {row.status === 'overdue' ? (
                  <Badge tone="warning" dot>
                    {t.status.overdue}
                  </Badge>
                ) : (
                  <Badge tone="success" dot>
                    {t.status.checkedOut}
                  </Badge>
                )}
              </Td>
              <Td align="right">
                {row.action === 'checkOut' ? (
                  <Button variant="secondary" size="xs">
                    {copy.checkOut}
                  </Button>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-[11px] text-ink-soft transition hover:text-brand"
                  >
                    <ReceiptText className="h-3.5 w-3.5" />
                    {copy.receipt}
                  </button>
                )}
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Card>
  )
}
