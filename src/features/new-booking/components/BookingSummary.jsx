import { CreditCard, Link2, Lock, Wallet } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../../../language'
import { bookingDates, bookingSummary } from '../../../data/booking'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import Checkbox from '../../../components/ui/Checkbox'

function formatEuro(value) {
  return `€${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export default function BookingSummary({ selectedRoom }) {
  const { t } = useLanguage()
  const copy = t.newBooking.summary
  const [paymentMethod, setPaymentMethod] = useState('card')

  const nights = bookingDates.nights
  const roomTotal = selectedRoom.rate * nights
  const breakfast = bookingSummary.breakfastTotal
  const transfer = bookingSummary.transferTotal
  const touristTax = bookingSummary.touristTax
  const subtotal = roomTotal + breakfast + transfer + touristTax
  const discount = Math.round(subtotal * 0.05 * 100) / 100
  const total = subtotal - discount
  const deposit = Math.round(total * 0.3 * 100) / 100

  const methods = [
    { id: 'card', icon: CreditCard, label: copy.cardOnFile },
    { id: 'link', icon: Link2, label: copy.paymentLink },
    { id: 'desk', icon: Wallet, label: copy.payAtDesk },
  ]

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
        <Badge tone="success" dot>
          {copy.available}
        </Badge>
      </div>

      <div className="border-b border-line px-5 py-4">
        <div className="rounded-lg bg-cream-100/70 px-3 py-3">
          <p className="text-[13px] font-medium text-ink">{selectedRoom.name}</p>
          <p className="mt-0.5 text-[9px] text-ink-faint">{copy.roomMeta}</p>
          <p className="mt-2 text-[10px] text-ink-soft">{copy.nights}</p>
          <p className="text-[9px] text-ink-faint">{copy.season}</p>
        </div>
      </div>

      <div className="space-y-2 border-b border-line px-5 py-4 text-[10px]">
        {[
          { label: copy.roomLine, value: formatEuro(roomTotal) },
          { label: copy.breakfastLine, value: formatEuro(breakfast) },
          { label: copy.transferLine, value: formatEuro(transfer) },
          { label: copy.touristTax, value: formatEuro(touristTax) },
        ].map((line) => (
          <div key={line.label} className="flex items-start justify-between gap-3">
            <span className="text-ink-soft">{line.label}</span>
            <span className="shrink-0 text-ink">{line.value}</span>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-line pt-2">
          <span className="text-ink-soft">{copy.subtotal}</span>
          <span className="text-ink">{formatEuro(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sage">{copy.discount}</span>
          <span className="text-sage">−{formatEuro(discount)}</span>
        </div>
        <div className="flex items-end justify-between border-t border-line pt-2">
          <span className="text-[11px] font-medium text-ink">{copy.total}</span>
          <span className="font-display text-[22px] leading-none text-ink">{formatEuro(total)}</span>
        </div>
      </div>

      <div className="border-b border-line bg-amber-soft/45 px-5 py-3.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[9px] text-amber">{copy.depositDue}</p>
          <p className="text-[12px] font-semibold text-amber">{formatEuro(deposit)}</p>
        </div>
      </div>

      <div className="border-b border-line px-5 py-4">
        <p className="mb-2 text-[8px] uppercase tracking-[0.14em] text-ink-faint">
          {t.common.method}
        </p>
        <div className="space-y-1.5">
          {methods.map((method) => {
            const Icon = method.icon
            const active = paymentMethod === method.id
            return (
              <button
                key={method.id}
                type="button"
                onClick={() => setPaymentMethod(method.id)}
                className={[
                  'flex w-full items-center gap-2 rounded-md border px-2.5 py-2 text-left text-[10px] transition',
                  active
                    ? 'border-brand-line bg-brand-soft/50 text-ink'
                    : 'border-line text-ink-soft hover:border-line-strong',
                ].join(' ')}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-ink-faint" strokeWidth={1.7} />
                <span className="flex-1">{method.label}</span>
                <span className={['h-3 w-3 rounded-full border', active ? 'border-brand bg-brand' : 'border-line-strong'].join(' ')} />
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-3 px-5 py-4">
        <Checkbox
          label={copy.sendConfirmation}
          defaultChecked
          className="items-start text-[9px] leading-5"
        />
        <Button variant="primary" size="md" className="w-full">
          {copy.confirm}
        </Button>
        <p className="flex items-center justify-center gap-1 text-[8px] text-ink-faint">
          <Lock className="h-2.5 w-2.5" />
          {copy.holds}
        </p>
      </div>
    </Card>
  )
}
