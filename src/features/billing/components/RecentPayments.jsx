import { Landmark } from 'lucide-react'
import { useLanguage } from '../../../language'
import { recentPayments } from '../../../data/folios'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import StatusBadge from '../../../components/ui/StatusBadge'
import { Table, Td, Th, Tr } from '../../../components/ui/Table'

export default function RecentPayments() {
  const { t } = useLanguage()
  const copy = t.billing.recent

  return (
    <Card className="mt-5 overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
          <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
        </div>
        <Button variant="secondary" size="sm">
          {copy.reconcile}
        </Button>
      </div>

      <Table>
        <thead>
          <tr>
            <Th>{copy.time}</Th>
            <Th>{copy.guest}</Th>
            <Th>{copy.folio}</Th>
            <Th>{copy.method}</Th>
            <Th>{copy.reference}</Th>
            <Th align="right">{copy.amount}</Th>
            <Th>{copy.status}</Th>
          </tr>
        </thead>
        <tbody>
          {recentPayments.map((payment) => (
            <Tr key={payment.id}>
              <Td className="text-ink-faint">{payment.time}</Td>
              <Td className="font-medium">{payment.guest}</Td>
              <Td className="text-ink-soft">{payment.folio}</Td>
              <Td className="text-ink-soft">{payment.method}</Td>
              <Td className="text-ink-faint">{payment.reference}</Td>
              <Td align="right" className={payment.status === 'declined' ? 'text-ink-faint line-through' : 'font-medium'}>
                {payment.amount}
              </Td>
              <Td>
                <StatusBadge kind="payment" status={payment.status} dot />
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      <div className="flex items-center gap-2 border-t border-line px-4 py-3 text-[9px] text-ink-faint">
        <Landmark className="h-3.5 w-3.5" />
        {t.billing.payout}
      </div>
    </Card>
  )
}
