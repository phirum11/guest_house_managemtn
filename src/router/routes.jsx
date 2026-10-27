import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import { BillingPage } from '../features/billing'
import { TodayPage } from '../features/dashboard'
import { GuestsPage } from '../features/guests'
import { HousekeepingPage } from '../features/housekeeping'
import { NewBookingPage } from '../features/new-booking'
import { NotFoundPage } from '../features/not-found'
import { ReportsPage } from '../features/reports'
import { ReservationsPage } from '../features/reservations'
import { RoomsPage } from '../features/rooms'
import { SettingsPage } from '../features/settings'
import { paths } from './paths'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={paths.today} element={<TodayPage />} />
        <Route path={paths.reservations} element={<ReservationsPage />} />
        <Route path={paths.newBooking} element={<NewBookingPage />} />
        <Route path={paths.rooms} element={<RoomsPage />} />
        <Route path={paths.housekeeping} element={<HousekeepingPage />} />
        <Route path={paths.guests} element={<GuestsPage />} />
        <Route path={paths.billing} element={<BillingPage />} />
        <Route path={paths.reports} element={<ReportsPage />} />
        <Route path={paths.settings} element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
