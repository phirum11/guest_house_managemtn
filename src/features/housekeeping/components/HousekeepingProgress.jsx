import { useLanguage } from '../../../language'
import Card from '../../../components/ui/Card'
import ProgressBar from '../../../components/ui/ProgressBar'

export default function HousekeepingProgress() {
  const { t } = useLanguage()
  const copy = t.housekeeping.progress

  return (
    <Card className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center">
      <div className="flex items-baseline gap-2">
        <p className="font-display text-[30px] leading-none text-ink">{copy.percent}</p>
        <p className="text-[10px] text-ink-faint">{t.housekeeping.title}</p>
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-ink-soft">{copy.complete}</p>
          <p className="text-[9px] text-ink-faint">{copy.pace}</p>
        </div>
        <ProgressBar value={13} max={22} tone="sage" heightClassName="h-1.5" />
      </div>
    </Card>
  )
}
