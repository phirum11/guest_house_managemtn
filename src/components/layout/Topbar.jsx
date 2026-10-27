import {
  Bell,
  CalendarDays,
  ChevronDown,
  LogOut,
  Menu,
  Search,
  Settings,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../language'
import { paths } from '../../router/paths'
import Avatar from '../ui/Avatar'
import Dropdown from '../ui/Dropdown'

export default function Topbar({ onMenuClick }) {
  const { t } = useLanguage()

  const menuItems = [
    { key: 'profile', label: t.topbar.profile, icon: UserRound },
    {
      key: 'settings',
      label: t.topbar.settings,
      icon: Settings,
      onClick: () => window.location.assign(paths.settings),
    },
    { divider: true },
    { key: 'logout', label: t.topbar.logout, icon: LogOut, danger: true },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream-100/90 backdrop-blur">
      <div className="flex h-[78px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-cream-50 text-ink-soft lg:hidden"
          aria-label={t.topbar.menu}
        >
          <Menu className="h-4 w-4" />
        </button>

        <div className="flex min-w-0 items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-line bg-cream-50 px-2.5 py-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-brand-soft text-[10px] font-semibold text-brand-strong">
              AH
            </span>
            <div className="hidden min-w-0 leading-tight sm:block">
              <p className="truncate text-[11px] font-medium text-ink">
                {t.app.property}
              </p>
              <p className="text-[9px] text-ink-faint">{t.app.propertyMeta}</p>
            </div>
            <ChevronDown className="hidden h-3.5 w-3.5 text-ink-faint sm:block" />
          </div>

          <span className="hidden items-center gap-1.5 text-[11px] text-ink-soft md:flex">
            <CalendarDays className="h-3.5 w-3.5" />
            {t.date.todayShort}
          </span>
          <span className="hidden rounded-full border border-brand-line bg-brand-soft px-2 py-0.5 text-[10px] text-brand-strong md:inline-flex">
            {t.date.todayClock}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Link
            to={paths.guests}
            className="hidden h-9 w-[300px] items-center gap-2 rounded-lg border border-line bg-cream-50 px-3 text-ink-soft transition hover:border-line-strong xl:flex"
          >
            <Search className="h-4 w-4 shrink-0 text-ink-faint" />
            <span className="min-w-0 flex-1 truncate text-left text-[11px] text-ink-faint">
              {t.topbar.search}
            </span>
            <span className="kbd">⌘K</span>
          </Link>

          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-ink-soft transition hover:border-line hover:bg-cream-50"
            aria-label={t.topbar.notifications}
          >
            <Bell className="h-4 w-4" strokeWidth={1.7} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-brand" />
          </button>

          <Dropdown
            trigger={
              <span className="flex items-center gap-2 rounded-lg border border-transparent py-1 pl-1 pr-2 transition hover:border-line hover:bg-cream-50">
                <Avatar name={t.app.ownerName} size="sm" />
                <span className="hidden text-left leading-tight md:block">
                  <span className="block text-[11px] font-medium text-ink">
                    {t.app.ownerName}
                  </span>
                  <span className="block text-[9px] text-ink-faint">{t.app.owner}</span>
                </span>
                <ChevronDown className="hidden h-3.5 w-3.5 text-ink-faint md:block" />
              </span>
            }
            items={menuItems}
          />
        </div>
      </div>
    </header>
  )
}
