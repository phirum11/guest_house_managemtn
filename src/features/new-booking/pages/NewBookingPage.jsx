import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Save, X } from 'lucide-react'
import { bookingRoomTypes } from '../../../data/booking'
import { useLanguage } from '../../../language'
import { paths } from '../../../router/paths'
import Button from '../../../components/ui/Button'
import PageHeader from '../../../components/layout/PageHeader'
import BookingSummary from '../components/BookingSummary'
import GuestStep from '../components/GuestStep'
import RateStep from '../components/RateStep'
import StayStep from '../components/StayStep'

export default function NewBookingPage() {
  const { t } = useLanguage()
  const [selectedRoomId, setSelectedRoomId] = useState('cedar')
  const [selectedRateId, setSelectedRateId] = useState('flexible')

  const selectedRoom =
    bookingRoomTypes.find((room) => room.id === selectedRoomId) ?? bookingRoomTypes[1]

  return (
    <div>
      <PageHeader
        eyebrow={t.newBooking.eyebrow}
        title={t.newBooking.title}
        subtitle={t.newBooking.subtitle}
        actions={
          <>
            <Button as={Link} to={paths.reservations} variant="ghost" icon={X}>
              {t.newBooking.discard}
            </Button>
            <Button variant="secondary" icon={Save}>
              {t.newBooking.saveTentative}
            </Button>
          </>
        }
      />

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-4">
          <GuestStep />
          <StayStep selectedRoomId={selectedRoomId} onSelectRoom={setSelectedRoomId} />
          <RateStep selectedRateId={selectedRateId} onSelectRate={setSelectedRateId} />
        </div>

        <div className="xl:sticky xl:top-[94px]">
          <BookingSummary selectedRoom={selectedRoom} />
        </div>
      </div>
    </div>
  )
}
