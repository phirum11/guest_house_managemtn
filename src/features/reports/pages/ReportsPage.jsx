import { useState } from 'react'
import { CalendarDays, Download } from 'lucide-react'
import { useLanguage } from '../../../language'
import Button from '../../../components/ui/Button'
import Tabs from '../../../components/ui/Tabs'
import PageHeader from '../../../components/layout/PageHeader'
import AdrRevparCard from '../components/AdrRevparCard'
import ChannelMixCard from '../components/ChannelMixCard'
import OccupancyCard from '../components/OccupancyCard'
import PerformanceTable from '../components/PerformanceTable'
import ReportStats from '../components/ReportStats'
import RevenueSourcesCard from '../components/RevenueSourcesCard'

export default function ReportsPage() {
  const { t } = useLanguage()
  const [period, setPeriod] = useState('monthly')

  const periods = [
    { key: 'monthly', label: t.reports.monthly },
    { key: 'weekly', label: t.reports.weekly },
    { key: 'daily', label: t.reports.daily },
  ]

  return (
    <div>
      <PageHeader
        eyebrow={t.reports.eyebrow}
        title={t.reports.title}
        subtitle={t.reports.subtitle}
        actions={
          <>
            <Button variant="secondary" icon={CalendarDays}>
              {t.reports.range}
            </Button>
            <Button variant="primary" icon={Download}>
              {t.reports.export}
            </Button>
          </>
        }
      />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <Tabs tabs={periods} value={period} onChange={setPeriod} />
        <p className="text-[9px] text-ink-faint">{t.reports.performance.source}</p>
      </div>

      <ReportStats />

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <OccupancyCard />
        <ChannelMixCard />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <RevenueSourcesCard />
        <AdrRevparCard />
      </div>

      <PerformanceTable />
    </div>
  )
}
