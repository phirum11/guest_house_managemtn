import { AlertTriangle, CreditCard, Wrench } from 'lucide-react'
import { useLanguage } from '../../../language'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'

export default function NeedsAttention() {
  const { t } = useLanguage()
  const attention = t.dashboard.attention

  const items = [
    {
      key: 'overdue',
      icon: AlertTriangle,
      tone: 'bg-amber-soft text-amber',
      title: attention.overdueTitle,
      meta: attention.overdueMeta,
      actions: (
        <>
          <Button variant="primary" size="sm">
            {attention.checkOut}
          </Button>
          <Button variant="ghost" size="sm">
            {attention.callRoom}
          </Button>
        </>
      ),
    },
    {
      key: 'unpaid',
      icon: CreditCard,
      tone: 'bg-brand-soft text-brand',
      title: attention.unpaidTitle,
      meta: attention.unpaidMeta,
      actions: (
        <Button variant="secondary" size="sm">
          {attention.sendLink}
        </Button>
      ),
    },
    {
      key: 'out',
      icon: Wrench,
      tone: 'bg-cream-200 text-ink-soft',
      title: attention.outOfOrderTitle,
      meta: attention.outOfOrderMeta,
      actions: (
        <Button variant="secondary" size="sm">
          {attention.viewJob}
        </Button>
      ),
    },
  ]

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
        <h2 className="font-display text-[20px] leading-snug text-ink">
          {attention.title}
        </h2>
        <Badge tone="brand">{attention.count}</Badge>
      </div>

      <div className="divide-y divide-line">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.key} className="flex gap-3 px-5 py-4">
              <span
                className={[
                  'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                  item.tone,
                ].join(' ')}
              >
                <Icon className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-medium leading-6 text-ink">{item.title}</p>
                <p className="mt-1 text-[10px] leading-6 text-ink-soft">{item.meta}</p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  {item.actions}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
