import { useState } from 'react'
import { useLanguage } from '../../../language'
import Card, { CardHeader } from '../../../components/ui/Card'

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={[
        'relative h-5 w-9 shrink-0 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50',
        checked ? 'bg-brand' : 'bg-cream-300',
      ].join(' ')}
    >
      <span
        className={[
          'absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-cream-50 shadow-sm transition-transform',
          checked ? 'translate-x-4' : 'translate-x-0',
        ].join(' ')}
      />
    </button>
  )
}

export default function NotificationSettings() {
  const { t } = useLanguage()
  const copy = t.settings.notifications
  const [enabled, setEnabled] = useState({
    newBooking: true,
    payment: true,
    housekeeping: false,
  })

  const rows = ['newBooking', 'payment', 'housekeeping']

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <CardHeader title={copy.title} subtitle={copy.subtitle} />
      </div>

      <div className="divide-y divide-line">
        {rows.map((key) => (
          <div key={key} className="flex items-start justify-between gap-4 px-5 py-3.5">
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-ink">{copy[key]}</p>
              <p className="mt-0.5 text-[9px] leading-5 text-ink-faint">{copy[`${key}Desc`]}</p>
            </div>
            <Toggle
              checked={enabled[key]}
              onChange={(next) => setEnabled((state) => ({ ...state, [key]: next }))}
              label={copy[key]}
            />
          </div>
        ))}
      </div>
    </Card>
  )
}
