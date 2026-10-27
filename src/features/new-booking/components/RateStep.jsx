import { useLanguage } from '../../../language'
import { bookingExtras, bookingRates } from '../../../data/booking'
import Card from '../../../components/ui/Card'
import Checkbox from '../../../components/ui/Checkbox'
import Textarea from '../../../components/ui/Textarea'
import StepHeader from './StepHeader'

export default function RateStep({ selectedRateId, onSelectRate }) {
  const { t } = useLanguage()
  const copy = t.newBooking

  return (
    <Card className="overflow-hidden">
      <StepHeader number={3} title={copy.steps.rate} subtitle={copy.steps.rateSub} />

      <div className="space-y-4 p-5">
        <div className="grid gap-2 md:grid-cols-3">
          {bookingRates.map((rate) => {
            const selected = selectedRateId === rate.id
            return (
              <button
                key={rate.id}
                type="button"
                onClick={() => onSelectRate(rate.id)}
                className={[
                  'flex flex-col rounded-lg border p-3 text-left transition',
                  selected
                    ? 'border-brand bg-brand-soft/40 ring-1 ring-brand-line'
                    : 'border-line bg-cream-50 hover:border-line-strong hover:bg-cream-100/50',
                ].join(' ')}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[10px] font-medium leading-5 text-ink">
                    {copy.rate[rate.id]}
                  </p>
                  <span
                    className={[
                      'mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border',
                      selected ? 'border-brand bg-brand' : 'border-line-strong',
                    ].join(' ')}
                  >
                    {selected ? <span className="h-1.5 w-1.5 rounded-full bg-cream-50" /> : null}
                  </span>
                </div>
                <p className="mt-1 flex-1 text-[9px] leading-5 text-ink-faint">
                  {copy.rate[`${rate.id}Desc`]}
                </p>
                <p className="mt-2 font-display text-[16px] leading-none text-ink">
                  €{rate.price}
                  <span className="ml-0.5 font-sans text-[8px] font-normal text-ink-faint">
                    {t.common.perNight}
                  </span>
                </p>
              </button>
            )
          })}
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <p className="text-[10px] font-medium text-ink-soft">{copy.rate.extras}</p>
            <span className="text-[9px] text-ink-faint">2 {t.common.selected}</span>
          </div>
          <div className="divide-y divide-line rounded-lg border border-line bg-cream-50">
            {bookingExtras.map((extra) => (
              <div key={extra.id} className="flex items-center justify-between gap-3 px-3 py-2.5">
                <Checkbox
                  label={copy.rate[extra.id]}
                  defaultChecked={extra.checked}
                  className="text-[10px]"
                />
                <span className="shrink-0 text-[10px] font-medium text-ink-soft">
                  {extra.price != null ? `€${extra.price}` : copy.rate.onRequest}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Textarea
          label={copy.rate.internalNote}
          placeholder={copy.rate.internalPlaceholder}
          defaultValue={copy.rate.internalPlaceholder}
        />
      </div>
    </Card>
  )
}
