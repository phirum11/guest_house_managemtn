import { useLanguage } from '../../../language'
import Card from '../../../components/ui/Card'
import StatCard from '../../../components/ui/StatCard'

export default function ReportStats() {
  const { t } = useLanguage()
  const copy = t.reports.stats

  const items = [
    { key: 'occupancy', value: copy.occupancyValue, delta: copy.occupancyDelta },
    { key: 'adr', value: copy.adrValue, delta: copy.adrDelta },
    { key: 'revpar', value: copy.revparValue, delta: copy.revparDelta },
    { key: 'trevpar', value: copy.trevparValue, delta: copy.trevparDelta },
  ]

  return (
    <Card className="grid grid-cols-2 gap-px overflow-hidden bg-line lg:grid-cols-4">
      {items.map((item) => (
        <StatCard
          key={item.key}
          label={copy[item.key]}
          value={item.value}
          delta={item.delta}
          className="bg-cream-50"
          valueClassName="text-[28px]"
        />
      ))}
    </Card>
  )
}
