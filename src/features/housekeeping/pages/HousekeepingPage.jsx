import { useState } from 'react'
import { Plus, Printer, SlidersHorizontal } from 'lucide-react'
import { useLanguage } from '../../../language'
import Button from '../../../components/ui/Button'
import Tabs from '../../../components/ui/Tabs'
import PageHeader from '../../../components/layout/PageHeader'
import ChecklistPanel from '../components/ChecklistPanel'
import HousekeepingBoard from '../components/HousekeepingBoard'
import HousekeepingProgress from '../components/HousekeepingProgress'
import StaffOverview from '../components/StaffOverview'

export default function HousekeepingPage() {
  const { t } = useLanguage()
  const [view, setView] = useState('board')

  const views = [
    { key: 'board', label: t.housekeeping.views.board },
    { key: 'byStaff', label: t.housekeeping.views.byStaff },
    { key: 'checklists', label: t.housekeeping.views.checklists },
  ]

  return (
    <div>
      <PageHeader
        eyebrow={t.housekeeping.eyebrow}
        title={t.housekeeping.title}
        subtitle={t.housekeeping.subtitle}
        actions={
          <>
            <Button variant="secondary" icon={Printer}>
              {t.housekeeping.views.printSheets}
            </Button>
            <Button variant="primary" icon={Plus}>
              {t.housekeeping.addTask}
            </Button>
          </>
        }
      />

      <HousekeepingProgress />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <Tabs tabs={views} value={view} onChange={setView} />
        <Button variant="ghost" size="sm" icon={SlidersHorizontal}>
          {t.housekeeping.filter}
        </Button>
      </div>

      <div className="mt-4">
        {view === 'board' ? <HousekeepingBoard /> : null}
        {view === 'byStaff' ? <StaffOverview /> : null}
        {view === 'checklists' ? <ChecklistPanel /> : null}
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-[9px] text-ink-faint">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
        {t.housekeeping.footer}
      </div>
    </div>
  )
}
