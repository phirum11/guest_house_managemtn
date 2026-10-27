import { Plus, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../language'
import { paths } from '../../../router/paths'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import StatCard from '../../../components/ui/StatCard'
import PageHeader from '../../../components/layout/PageHeader'
import ArrivalsTimeline from '../components/ArrivalsTimeline'
import DeparturesTable from '../components/DeparturesTable'
import HousekeepingProgress from '../components/HousekeepingProgress'
import NeedsAttention from '../components/NeedsAttention'
import RevenueChart from '../components/RevenueChart'
import ShiftNotes from '../components/ShiftNotes'

export default function TodayPage() {
  const { t } = useLanguage()
  const stats = t.dashboard.stats

  return (
    <div>
      <PageHeader
        eyebrow={t.dashboard.eyebrow}
        title={t.dashboard.title}
        subtitle={t.dashboard.subtitle}
        actions={
          <>
            <Button
              variant="secondary"
              icon={Printer}
              onClick={() => window.print()}
            >
              {t.dashboard.daySheet}
            </Button>
            <Button as={Link} to={paths.newBooking} icon={Plus}>
              {t.nav.newBooking}
            </Button>
          </>
        }
      />

      <Card className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          className="bg-cream-50"
          label={stats.occupancy}
          value={stats.occupancyValue}
          note={stats.roomsSold}
          delta={stats.occupancyDelta}
        />
        <StatCard
          className="bg-cream-50"
          label={stats.arrivals}
          value={stats.arrivalsValue}
          note={stats.awaitingCheckIn}
          extra={stats.lastArrival}
        />
        <StatCard
          className="bg-cream-50"
          label={stats.departures}
          value={stats.departuresValue}
          note={stats.checkedOut}
          extra={stats.departuresNote}
        />
        <StatCard
          className="bg-cream-50"
          label={stats.revenue}
          value={stats.revenueValue}
          note={stats.adrRevpar}
          delta={stats.revenueDelta}
        />
      </Card>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)]">
        <ArrivalsTimeline />
        <NeedsAttention />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)]">
        <DeparturesTable />
        <HousekeepingProgress />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)]">
        <RevenueChart />
        <ShiftNotes />
      </div>
    </div>
  )
}
