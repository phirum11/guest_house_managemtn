import { AlertCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../../language'
import {
  bookingAssignedUnit,
  bookingDates,
  bookingRoomTypes,
} from '../../../data/booking'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import DateInput from '../../../components/ui/DateInput'
import Select from '../../../components/ui/Select'
import StepHeader from './StepHeader'

const availabilityTone = {
  available: 'bg-sage',
  last: 'bg-amber',
  soldOut: 'bg-line-strong',
}

export default function StayStep({ selectedRoomId, onSelectRoom }) {
  const { t } = useLanguage()
  const copy = t.newBooking.stay

  return (
    <Card className="overflow-hidden">
      <StepHeader number={2} title={t.newBooking.steps.stay} subtitle={copy.liveAvailability}>
        <span className="inline-flex items-center gap-1.5 text-[9px] text-sage">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
          {copy.liveShort}
        </span>
      </StepHeader>

      <div className="space-y-4 p-5">
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          <DateInput label={copy.checkIn} defaultValue={bookingDates.checkIn} />
          <DateInput label={copy.checkOut} defaultValue={bookingDates.checkOut} />
          <label className="flex flex-col gap-1.5">
            <span className="text-[11px] font-medium text-ink-soft">{copy.nights}</span>
            <span className="field flex items-center font-medium">{bookingDates.nights} {t.common.nights}</span>
          </label>
          <Select label={copy.arrivalTime} defaultValue={bookingDates.arrivalTime}>
            {['14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map((time) => (
              <option key={time}>{time}</option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-line bg-cream-100/50 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-1.5 text-[9px] text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            {bookingDates.columns.join(' · ')}
          </span>
          <div className="flex flex-wrap items-center gap-3 text-[8px] text-ink-soft">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              {copy.legendAvailable}
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {copy.legendLast}
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
              {copy.legendSoldOut}
            </span>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-medium text-ink-soft">{copy.roomType}</p>
            <p className="text-[9px] text-ink-faint">{copy.ratePerNight}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {bookingRoomTypes.map((room) => {
              const selected = selectedRoomId === room.id
              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => onSelectRoom(room.id)}
                  className={[
                    'rounded-lg border p-3 text-left transition',
                    selected
                      ? 'border-brand bg-brand-soft/40 ring-1 ring-brand-line'
                      : 'border-line bg-cream-50 hover:border-line-strong hover:bg-cream-100/50',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[11px] font-medium text-ink">{room.name}</p>
                    <span
                      className={[
                        'mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border',
                        selected ? 'border-brand bg-brand' : 'border-line-strong',
                      ].join(' ')}
                    >
                      {selected ? <span className="h-1.5 w-1.5 rounded-full bg-cream-50" /> : null}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[9px] text-ink-faint">{room.meta}</p>
                  <div className="mt-2 flex items-end justify-between gap-2">
                    <p className="font-display text-[16px] leading-none text-ink">
                      €{room.rate}
                      <span className="ml-0.5 font-sans text-[8px] font-normal text-ink-faint">
                        {t.common.perNight}
                      </span>
                    </p>
                    <div className="flex gap-1">
                      {room.availability.map((state, index) => (
                        <span
                          key={`${room.id}-${index}`}
                          title={`${bookingDates.columns[index]} — ${copy[state]}`}
                          className={['h-1.5 w-3.5 rounded-sm', availabilityTone[state]].join(' ')}
                        />
                      ))}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-line bg-cream-100/60 px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">
              {copy.assignedUnit}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-ink">
              {bookingAssignedUnit.name}
            </p>
            <p className="text-[9px] text-ink-faint">{bookingAssignedUnit.meta}</p>
          </div>
          <Button variant="ghost" size="xs" iconRight={ArrowRight}>
            {copy.changeUnit}
          </Button>
        </div>

        <p className="inline-flex items-start gap-1.5 text-[9px] leading-5 text-amber">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {copy.excluded}
        </p>
      </div>
    </Card>
  )
}
