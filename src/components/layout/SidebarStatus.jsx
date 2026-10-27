import ProgressBar from '../ui/ProgressBar'
import { useLanguage } from '../../language'

export default function SidebarStatus() {
  const { t } = useLanguage()

  return (
    <div className="rounded-lg border border-line bg-cream-50 px-3.5 py-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-medium text-ink">{t.app.roomsReady}</span>
        <span className="text-[11px] text-ink-soft">4 / 18</span>
      </div>
      <ProgressBar value={4} max={18} tone="brand" className="mt-2" heightClassName="h-1" />
      <p className="mt-2 text-[10px] leading-5 text-ink-faint">{t.app.nextInspection}</p>
    </div>
  )
}
