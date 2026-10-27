import { BrowserRouter } from 'react-router-dom'
import RouteGuard from './RouteGuard'
import AppRoutes from './routes'
import ScrollToTop from './ScrollToTop'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <RouteGuard>
        <ScrollToTop />
        <AppRoutes />
      </RouteGuard>
    </BrowserRouter>
  )
}
