import { Check, Clock } from 'lucide-react'
import { turnoverChecklist } from '../../../data/housekeeping'
import { useLanguage } from '../../../language'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import ProgressBar from '../../../components/ui/ProgressBar'

export default function ChecklistPanel() {
  const { t } = useLanguage()
  const copy = t.housekeeping.checklist

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
            <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
          </div>
          <div className="w-full sm:w-[220px]">
            <div className="mb-1 flex items-center justify-between text-[9px]">
              <span className="text-ink-soft">{copy.progress}</span>
              <span className="text-ink-faint">6 / 11</span>
            </div>
            <ProgressBar value={6} max={11} tone="amber" heightClassName="h-1" />
            <p className="mt-1 text-right text-[8px] text-ink-faint">{copy.estimate}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="divide-y divide-line/70">
          {turnoverChecklist.map((item) => (
            <div
              key={item.key}
              className={[
                'flex items-center gap-2.5 px-5 py-2.5',
                item.now ? 'bg-amber-soft/30' : '',
              ].join(' ')}
            >
              <span
                className={[
                  'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border',
                  item.done
                    ? 'border-sage bg-sage text-cream-50'
                    : item.now
                      ? 'border-amber bg-amber-soft'
                      : 'border-line-strong',
                ].join(' ')}
              >
                {item.done ? <Check className="h-2.5 w-2.5" /> : null}
              </span>
              <p
                className={[
                  'min-w-0 flex-1 text-[10px]',
                  item.done ? 'text-ink-faint line-through' : 'text-ink',
                ].join(' ')}
              >
                {copy.items[item.key]}
              </p>
              {item.now ? (
                <Badge tone="warning" dot={false} className="px-1.5 py-0 text-[8px]">
                  {copy.now}
                </Badge>
              ) : null}
              <span className="w-6 shrink-0 text-right text-[8px] text-ink-faint">
                {item.by}
              </span>
            </div>
          ))}
        </div>

        <aside className="border-t border-line bg-cream-100/50 p-5 lg:border-l lg:border-t-0">
          <p className="flex items-center gap-1.5 text-[9px] text-ink-faint">
            <Clock className="h-3 w-3" />
            {copy.estimate}
          </p>
          <p className="mt-3 rounded-lg border border-amber-line bg-amber-soft/40 px-3 py-2.5 text-[9px] leading-5 text-amber">
            {copy.note}
          </p>
          <Button variant="primary" size="sm" icon={Check} className="mt-4 w-full">
            {copy.completeTask}
          </Button>
        </aside>
      </div>
    </Card>
  )
}
