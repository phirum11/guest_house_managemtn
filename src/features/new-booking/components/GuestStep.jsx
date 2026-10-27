import { useLanguage } from '../../../language'
import { bookingGuest } from '../../../data/booking'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import SearchBar from '../../../components/ui/SearchBar'
import Textarea from '../../../components/ui/Textarea'
import StepHeader from './StepHeader'

export default function GuestStep() {
  const { t } = useLanguage()
  const copy = t.newBooking

  return (
    <Card className="overflow-hidden">
      <StepHeader number={1} title={copy.steps.guest} subtitle={copy.steps.guestSub}>
        <Badge tone="success" dot>
          {copy.steps.selected}
        </Badge>
      </StepHeader>

      <div className="space-y-3 p-5">
        <SearchBar placeholder={copy.guest.search} />

        <div className="flex flex-col gap-3 rounded-xl border border-line bg-cream-100/60 p-3.5 sm:flex-row sm:items-center">
          <Avatar name={bookingGuest.name} size="lg" />
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium text-ink">{bookingGuest.name}</p>
            <p className="mt-0.5 text-[10px] text-ink-soft">{bookingGuest.meta}</p>
            <p className="mt-1 text-[9px] text-brand">{bookingGuest.returning}</p>
          </div>
          <div className="flex items-center gap-4 sm:flex-col sm:items-end">
            <div className="text-left sm:text-right">
              <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
                {copy.guest.lifetime}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-ink">{bookingGuest.lifetime}</p>
            </div>
            <Button variant="secondary" size="xs">
              {copy.guest.change}
            </Button>
          </div>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2">
          <label className="flex items-center justify-between rounded-lg border border-line bg-cream-50 px-3 py-2.5">
            <span className="text-[10px] text-ink-soft">{copy.guest.adults}</span>
            <select className="bg-transparent text-right text-[11px] font-medium text-ink outline-none">
              <option>2</option>
              <option>1</option>
              <option>3</option>
              <option>4</option>
            </select>
          </label>
          <label className="flex items-center justify-between rounded-lg border border-line bg-cream-50 px-3 py-2.5">
            <span className="text-[10px] text-ink-soft">{copy.guest.children}</span>
            <select className="bg-transparent text-right text-[11px] font-medium text-ink outline-none">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </label>
        </div>

        <Textarea
          label={copy.guest.guestNote}
          placeholder={copy.guest.notePlaceholder}
          defaultValue={copy.guest.preference}
        />
      </div>
    </Card>
  )
}
