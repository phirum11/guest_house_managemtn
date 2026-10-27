import {
  Download,
  Mail,
  Plus,
  Printer,
  ReceiptText,
  RotateCcw,
  X,
} from 'lucide-react'
import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import StatusBadge from '../../../components/ui/StatusBadge'

export default function FolioDetailPanel({ folio, detail }) {
  const { t } = useLanguage()
  const copy = t.billing.detail

  if (!folio || !detail) return null

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="eyebrow mb-1">{folio.id}</p>
            <h2 className="font-display text-[21px] leading-tight text-ink">{folio.guest}</h2>
            <p className="mt-1 text-[9px] leading-5 text-ink-soft">{folio.stayMeta}</p>
          </div>
          <button
            type="button"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink-faint transition hover:bg-cream-100 hover:text-ink"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Avatar name={folio.guest} size="sm" />
          <span className="text-[9px] text-ink-faint">{folio.guestMeta}</span>
          <StatusBadge kind="billing" status={folio.status} dot />
        </div>
      </div>

      <div className="border-b border-line px-5 py-4">
        <p className="eyebrow mb-2.5">{copy.charges}</p>
        <div className="space-y-2">
          {detail.charges.map((charge) => (
            <div key={`${charge.label}-${charge.amount}`} className="flex items-start justify-between gap-3 text-[10px]">
              <div className="min-w-0">
                <p className="text-ink">{charge.label}</p>
                <p className="text-[9px] text-ink-faint">{charge.meta}</p>
              </div>
              <span className="shrink-0 text-ink">{charge.amount}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-1.5 border-t border-line pt-2.5 text-[10px]">
          <div className="flex justify-between">
            <span className="text-ink-soft">{copy.subtotal}</span>
            <span className="text-ink">{detail.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-soft">{copy.vatAccommodation}</span>
            <span className="text-ink-soft">{detail.vatAccommodation}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink-soft">{copy.vatExtras}</span>
            <span className="text-ink-soft">{detail.vatExtras}</span>
          </div>
          <div className="flex items-end justify-between border-t border-line pt-2">
            <span className="text-[11px] font-medium text-ink">{copy.totalDue}</span>
            <span className="font-display text-[20px] leading-none text-ink">{detail.totalDue}</span>
          </div>
        </div>
      </div>

      <div className="border-b border-line px-5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="eyebrow">{copy.payments}</p>
          <button type="button" className="inline-flex items-center gap-1 text-[9px] text-brand">
            <Plus className="h-2.5 w-2.5" />
            {copy.addPayment}
          </button>
        </div>
        <div className="space-y-2">
          {detail.payments.length ? (
            detail.payments.map((payment) => (
              <div key={`${payment.method}-${payment.meta}`} className="rounded-lg border border-line bg-cream-100/50 px-2.5 py-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[10px] text-ink">{payment.method}</p>
                    <p className="text-[8px] text-ink-faint">{payment.meta}</p>
                  </div>
                  <div className="text-right">
                    <p className={['text-[10px]', payment.declined ? 'text-ink-faint line-through' : 'text-ink'].join(' ')}>
                      {payment.amount}
                    </p>
                    {payment.declined ? (
                      <Badge tone="danger">{t.status.payment.declined}</Badge>
                    ) : null}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[10px] text-ink-faint">—</p>
          )}
        </div>

        <div className="mt-2.5 flex items-center justify-between rounded-md bg-brand-soft/60 px-3 py-2">
          <span className="text-[9px] text-brand-strong">{copy.balanceDue}</span>
          <span className="text-[12px] font-semibold text-brand-strong">{detail.balanceDue}</span>
        </div>
      </div>

      <div className="border-b border-line px-5 py-4">
        <p className="eyebrow mb-2.5">{copy.activity}</p>
        <div className="space-y-2.5">
          {detail.activity.map((item) => (
            <div key={`${item.text}-${item.meta}`} className="flex gap-2">
              <span className={['mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', item.brand ? 'bg-brand' : 'bg-line-strong'].join(' ')} />
              <div className="min-w-0">
                <p className="text-[10px] leading-5 text-ink-soft">{item.text}</p>
                <p className="text-[8px] text-ink-faint">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-4">
        <Button variant="primary" size="sm" icon={ReceiptText} className="w-full">
          {copy.takePayment}
        </Button>
        <div className="mt-2 flex gap-2">
          <Button variant="secondary" size="xs" icon={RotateCcw} className="flex-1">
            {copy.refund}
          </Button>
          <Button variant="secondary" size="icon" aria-label={copy.printFolio}>
            <Printer className="h-3.5 w-3.5" />
          </Button>
          <Button variant="secondary" size="icon" aria-label={copy.email}>
            <Mail className="h-3.5 w-3.5" />
          </Button>
          <Button variant="secondary" size="icon" aria-label={t.common.export}>
            <Download className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
