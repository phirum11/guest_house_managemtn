import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useLanguage } from '../../language'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AppLayout() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenuClick={() => setOpen(true)} />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto w-full max-w-[1480px]">
            <Outlet />
          </div>
        </main>

        <footer className="border-t border-line px-4 py-4 text-[10px] text-ink-faint sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1480px] flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <span>{t.app.footer}</span>
            <span>{t.app.synced}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
