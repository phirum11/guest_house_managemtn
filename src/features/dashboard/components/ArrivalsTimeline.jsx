import { ArrowRight, Check, Clock3, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'
import { arrivals } from '../../../data/dashboard'
import { useLanguage } from '../../../language'
import { paths } from '../../../router/paths'
import Avatar from '../../../components/ui/Avatar'
import Card, { CardHeader } from '../../../components/ui/Card'

const statusStyles = {
  checkedIn: 'border-sage-line bg-sage-soft text-sage',
  due: 'border-brand bg-brand text-cream-50',
  unpaid: 'border-amber-line bg-amber-soft text-amber',
}

const statusIcons = {
  checkedIn: Check,
  due: Clock3,
  unpaid: Wallet,
}

export default function ArrivalsTimeline() {
  const { t } = useLanguage()

  const legend = (
    <div className="flex flex-wrap items-center gap-3 text-[10px] text-ink-soft">
      <span className="inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-sage" />
        {t.dashboard.arrivals.checkedIn}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        {t.dashboard.arrivals.due}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
        {t.dashboard.arrivals.unpaid}
      </span>
    </div>
  )

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <CardHeader
          title={t.dashboard.arrivals.title}
          subtitle={t.dashboard.arrivals.subtitle}
          action={legend}
        />
      </div>

      <div className="px-5 pb-2 pt-4">
        <div className="flex">
          <div className="w-[150px] shrink-0 sm:w-[170px]" />
          <div className="relative flex-1">
            <div className="flex justify-between text-[9px] text-ink-faint">
              {['11:00', '13:00', '15:00', '17:00', '19:00', '21:00'].map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
            <span className="absolute -top-6 left-[42%] -translate-x-1/2 rounded bg-brand px-1.5 py-0.5 text-[8px] font-medium text-cream-50">
              {t.dashboard.arrivals.now}
            </span>
          </div>
        </div>

        <div>
          {arrivals.map((arrival) => {
            const Icon = statusIcons[arrival.status]
            return (
              <div
                key={arrival.id}
                className="flex items-center gap-3 border-t border-line/60 py-2.5 first:border-t-0"
              >
                <div className="flex w-[150px] shrink-0 items-center gap-2 sm:w-[170px]">
                  <Avatar name={arrival.name} size="xs" />
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-[11px] font-medium text-ink">
                      {arrival.name}
                    </p>
                    <p className="truncate text-[9px] text-ink-faint">{arrival.room}</p>
                  </div>
                </div>
                <div className="relative h-8 flex-1">
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-line" />
                  <span
                    className={[
                      'absolute top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded border px-2 py-1 text-[9px] font-medium',
                      statusStyles[arrival.status],
                    ].join(' ')}
                    style={{ left: `${arrival.position}%` }}
                  >
                    <Icon className="h-2.5 w-2.5" strokeWidth={2} />
                    {arrival.barLabel}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-line px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] text-ink-faint">{t.dashboard.arrivals.completed}</p>
        <Link
          to={paths.reservations}
          className="inline-flex items-center gap-1 text-[11px] font-medium text-brand hover:text-brand-strong"
        >
          {t.dashboard.arrivals.openBoard}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  )
}
