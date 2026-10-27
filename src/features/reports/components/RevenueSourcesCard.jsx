import { revenueSources } from '../../../data/reports'
import { useLanguage } from '../../../language'
import Card from '../../../components/ui/Card'
import ProgressBar from '../../../components/ui/ProgressBar'

const tones = ['brand', 'sage', 'amber', 'ink', 'muted']

export default function RevenueSourcesCard() {
  const { t } = useLanguage()
  const copy = t.reports.revenueSource

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
        <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
      </div>

      <div className="flex-1 space-y-3.5 px-5 py-4">
        {revenueSources.map((source, index) => (
          <div key={source.key}>
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="text-[10px] text-ink-soft">{copy[source.key]}</span>
              <span className="text-[10px] font-medium text-ink">
                €{source.value.toLocaleString('en-US')}
                <span className="ml-1.5 text-[8px] font-normal text-ink-faint">
                  {source.percent}%
                </span>
              </span>
            </div>
            <ProgressBar
              value={source.percent}
              max={100}
              tone={tones[index] ?? 'brand'}
              heightClassName="h-1"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-line px-5 py-3">
        <span className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
          {t.common.total}
        </span>
        <span className="font-display text-[18px] text-ink">€46,820</span>
      </div>
    </Card>
  )
}
