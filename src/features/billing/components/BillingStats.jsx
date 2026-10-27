import { Hourglass, ReceiptText, RotateCcw, TrendingUp } from 'lucide-react'
import { useLanguage } from '../../../language'
import Card from '../../../components/ui/Card'
import StatCard from '../../../components/ui/StatCard'

export default function BillingStats() {
  const { t } = useLanguage()
  const copy = t.billing.stats

  const items = [
    {
      key: 'outstanding',
      icon: Hourglass,
      value: copy.outstandingValue,
      valueClassName: 'text-danger',
    },
    {
      key: 'collected',
      icon: TrendingUp,
      value: copy.collectedValue,
      valueClassName: 'text-sage',
    },
    {
      key: 'refunds',
      icon: RotateCcw,
      value: copy.refundsValue,
    },
    {
      key: 'average',
      icon: ReceiptText,
      value: copy.averageValue,
    },
  ]

  return (
    <Card className="grid grid-cols-2 gap-px overflow-hidden bg-line lg:grid-cols-4">
      {items.map((item) => (
        <StatCard
          key={item.key}
          label={copy[item.key]}
          value={item.value}
          note={copy[`${item.key}Note`]}
          icon={item.icon}
          valueClassName={['text-[26px]', item.valueClassName].join(' ')}
          className="bg-cream-50"
        />
      ))}
    </Card>
  )
}
