import { channelMix } from '../../../data/reports'
import { useLanguage } from '../../../language'
import DonutChart from '../../../components/charts/DonutChart'
import Card from '../../../components/ui/Card'

export default function ChannelMixCard() {
  const { t } = useLanguage()
  const copy = t.reports.channelMix

  const segments = channelMix.map((segment) => ({
    ...segment,
    label:
      segment.key === 'direct'
        ? copy.direct
        : t.channels[segment.key] ?? segment.key,
  }))

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
        <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
      </div>

      <div className="flex flex-1 flex-col items-center gap-4 px-5 py-5 sm:flex-row lg:flex-col xl:flex-row">
        <DonutChart
          segments={segments}
          size={168}
          thickness={20}
          centerLabel={`${segments[0]?.percent ?? 0}%`}
          centerSub={copy.direct}
        />
        <div className="w-full min-w-0 flex-1 space-y-2">
          {segments.map((segment) => (
            <div key={segment.key} className="flex items-center gap-2">
              <span
                className="h-2 w-2 shrink-0 rounded-sm"
                style={{ backgroundColor: segment.color }}
              />
              <span className="min-w-0 flex-1 truncate text-[10px] text-ink-soft">
                {segment.label}
              </span>
              <span className="text-[10px] font-medium text-ink">{segment.percent}%</span>
              <span className="w-14 text-right text-[8px] text-ink-faint">
                {segment.value} {copy.nights}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="border-t border-line px-5 py-3 text-[9px] leading-5 text-ink-faint">
        {copy.note}
      </p>
    </Card>
  )
}
