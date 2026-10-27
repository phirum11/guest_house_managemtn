import { Check, MoreHorizontal } from 'lucide-react'
import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import ProgressBar from '../../../components/ui/ProgressBar'

export default function TaskCard({ task }) {
  const { t } = useLanguage()
  const copy = t.housekeeping

  const isBlocked = task.column === 'blocked'
  const isInspected = task.column === 'inspected'
  const isInProgress = task.column === 'inProgress'

  return (
    <div
      className={[
        'rounded-lg border p-3 transition',
        isBlocked
          ? 'border-dashed border-line-strong bg-cream-100/50'
          : 'border-line bg-cream-50 hover:border-line-strong',
      ].join(' ')}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
          {copy.taskTypes[task.type] ?? task.type}
        </span>
        {task.priority ? (
          <Badge tone="danger" dot={false} className="px-1.5 py-0 text-[9px]">
            {copy.priority}
          </Badge>
        ) : (
          <button type="button" className="text-ink-faint hover:text-ink">
            <MoreHorizontal className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <p className="mt-1.5 text-[11px] font-medium text-ink">{task.room}</p>
      <p className="mt-0.5 text-[8px] text-ink-faint">{task.roomMeta}</p>
      <p className="mt-1.5 text-[9px] leading-5 text-ink-soft">{task.label}</p>

      {isInProgress ? (
        <div className="mt-2">
          <div className="mb-1 flex items-center justify-between text-[8px] text-ink-faint">
            <span>{copy.labels.checklistProgress}</span>
            <span>{task.checklistDone}/{task.checklistTotal}</span>
          </div>
          <ProgressBar
            value={task.checklistDone}
            max={task.checklistTotal}
            tone="amber"
            heightClassName="h-1"
          />
        </div>
      ) : null}

      {isInspected ? (
        <div className="mt-2">
          {task.ready ? (
            <Badge tone="success" className="text-[9px]">
              <Check className="h-2.5 w-2.5" />
              {copy.labels.ready}
            </Badge>
          ) : (
            <Badge tone="warning" className="text-[9px]">
              {copy.labels.awaitingInspection}
            </Badge>
          )}
        </div>
      ) : null}

      {isBlocked ? (
        <div className="mt-2 rounded-md bg-amber-soft/50 px-2 py-1.5">
          <p className="text-[8px] leading-4 text-amber">{copy.labels.blockedNote}</p>
        </div>
      ) : null}

      <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-line/70 pt-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <Avatar name={task.assignee} size="xs" />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[9px] text-ink-soft">{task.assignee}</p>
            {task.inspector ? (
              <p className="truncate text-[8px] text-ink-faint">{task.inspector}</p>
            ) : null}
          </div>
        </div>
        <span className="shrink-0 text-[8px] text-ink-faint">
          {isBlocked ? copy.labels.backOn : isInProgress ? task.time : task.minutes}
        </span>
      </div>
    </div>
  )
}
