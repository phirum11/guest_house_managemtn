import Badge from './Badge'
import { useLanguage } from '../../language'

const toneMap = {
  room: {
    occupied: 'brand',
    vacantClean: 'success',
    dirty: 'warning',
    inspected: 'neutral',
    outOfOrder: 'muted',
  },
  reservation: {
    confirmed: 'success',
    inHouse: 'success',
    tentative: 'outline',
    arriving: 'warning',
    paymentDue: 'warning',
    checkedOut: 'neutral',
  },
  billing: {
    open: 'outline',
    paid: 'success',
    partPaid: 'warning',
    cardDeclined: 'danger',
    depositHeld: 'warning',
    refunded: 'muted',
  },
  payment: {
    settled: 'success',
    declined: 'danger',
  },
  housekeeping: {
    toClean: 'neutral',
    inProgress: 'warning',
    inspected: 'success',
    blocked: 'muted',
    ready: 'success',
    awaitingInspection: 'warning',
  },
  tag: {
    returning: 'success',
    vip: 'brand',
    repeat: 'neutral',
    new: 'outline',
  },
}

export default function StatusBadge({ kind = 'room', status, dot = true }) {
  const { t } = useLanguage()
  const label =
    kind === 'tag' ? t.guestTags[status] : t.status[kind]?.[status] ?? status

  return (
    <Badge tone={toneMap[kind]?.[status] ?? 'neutral'} dot={dot}>
      {label}
    </Badge>
  )
}
