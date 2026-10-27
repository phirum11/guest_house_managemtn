import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  housekeepingProgress,
  housekeepingTasksInProgress,
} from '../../../data/dashboard'
import { useLanguage } from '../../../language'
import { paths } from '../../../router/paths'
import Avatar from '../../../components/ui/Avatar'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import ProgressBar from '../../../components/ui/ProgressBar'

export default function HousekeepingProgress() {
  const { t } = useLanguage()
  const copy = t.dashboard.housekeeping

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
        <Link
          to={paths.housekeeping}
          className="inline-flex items-center gap-1 text-[11px] text-brand hover:text-brand-strong"
        >
          {copy.board}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="space-y-3 px-5 py-4">
        {housekeepingProgress.map((item) => (
          <div key={item.key}>
            <div className="mb-1 flex items-center justify-between text-[11px]">
              <span className="text-ink-soft">{copy[item.key]}</span>
              <span className="text-ink">
                {item.done} / {item.total}
              </span>
            </div>
            <ProgressBar
              value={item.done}
              max={item.total}
              tone={item.key === 'inspections' ? 'amber' : 'sage'}
              heightClassName="h-1"
            />
          </div>
        ))}
      </div>

      <div className="mt-auto border-t border-line px-5 py-4">
        <p className="eyebrow mb-2.5">{copy.inProgress}</p>
        <div className="space-y-2.5">
          {housekeepingTasksInProgress.map((task) => (
            <div key={task.id} className="flex items-center gap-2.5">
              <Avatar name={task.name} size="xs" />
              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-[10px] font-medium text-ink">
                  {task.name} · {task.room}
                </p>
                <p className="truncate text-[9px] text-ink-faint">{task.task}</p>
              </div>
              <span className="shrink-0 text-[9px] text-ink-faint">{task.time}</span>
            </div>
          ))}
        </div>
        <Button variant="ghost" size="xs" className="mt-3 px-0 text-[10px] text-brand">
          {t.common.viewAll}
        </Button>
      </div>
    </Card>
  )
}
