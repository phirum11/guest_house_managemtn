import { revenueWeek } from '../../../data/dashboard'
import { useLanguage } from '../../../language'
import BarChart from '../../../components/charts/BarChart'
import Badge from '../../../components/ui/Badge'
import Card, { CardHeader } from '../../../components/ui/Card'

export default function RevenueChart() {
  const { t } = useLanguage()
  const copy = t.dashboard.revenue

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <CardHeader
          title={copy.title}
          subtitle={copy.subtitle}
          action={<Badge tone="neutral">{copy.currency}</Badge>}
        />
      </div>
      <div className="px-5 pb-4 pt-8">
        <BarChart data={revenueWeek} height={150} />
      </div>
    </Card>
  )
}
