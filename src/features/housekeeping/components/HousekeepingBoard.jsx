import {
  housekeepingColumns,
  housekeepingTasks,
} from '../../../data/housekeeping'
import { useLanguage } from '../../../language'
import Badge from '../../../components/ui/Badge'
import TaskCard from './TaskCard'

export default function HousekeepingBoard() {
  const { t } = useLanguage()
  const copy = t.housekeeping

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {housekeepingColumns.map((column) => {
        const tasks = housekeepingTasks.filter((task) => task.column === column)
        return (
          <section
            key={column}
            className="rounded-xl border border-line bg-cream-100/35 p-2.5"
          >
            <div className="flex items-center justify-between px-1 pb-2.5 pt-1">
              <div className="flex items-center gap-1.5">
                <h2 className="text-[11px] font-medium text-ink">{copy.columns[column]}</h2>
                <Badge tone="neutral" className="px-1.5 py-0 text-[9px]">
                  {copy.counts[column]}
                </Badge>
              </div>
              {column === 'blocked' ? (
                <span className="text-[8px] text-ink-faint">{copy.labels.outOfOrder}</span>
              ) : null}
            </div>
            <div className="space-y-2">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
