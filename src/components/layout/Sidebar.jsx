import {
  BarChart3,
  BedDouble,
  CalendarDays,
  CirclePlus,
  LayoutGrid,
  Settings,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../language'
import { paths } from '../../router/paths'
import SidebarStatus from './SidebarStatus'

function NavItem({ to, label, icon: Icon, end, count, onNavigate }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors',
          isActive
            ? 'border border-line bg-cream-50 font-medium text-ink shadow-sm'
            : 'border border-transparent text-[#e7e0d5] hover:bg-cream-50/70 hover:text-ink',
        ]
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={[
              'h-4 w-4 shrink-0',
              isActive ? 'text-brand' : 'text-[#cfc6b8] group-hover:text-ink-soft',
            ].join(' ')}
            strokeWidth={1.7}
          />
          <span className="min-w-0 flex-1 truncate">{label}</span>
          {count ? (
            <span
              className={[
                'rounded-full px-1.5 text-[10px] leading-5',
                isActive
                  ? 'bg-brand-soft text-brand-strong'
                  : 'bg-cream-200 text-ink-soft',
              ].join(' ')}
            >
              {count}
            </span>
          ) : null}
        </>
      )}
    </NavLink>
  )
}

export default function Sidebar({ open, onClose }) {
  const { t } = useLanguage()

  const groups = [
    {
      title: t.nav.groups.frontDesk,
      items: [
        { to: paths.today, label: t.nav.today, icon: LayoutGrid, end: true },
        { to: paths.reservations, label: t.nav.reservations, icon: CalendarDays, end: true, count: '42' },
        { to: paths.newBooking, label: t.nav.newBooking, icon: CirclePlus },
      ],
    },
    {
      title: t.nav.groups.property,
      items: [
        { to: paths.rooms, label: t.nav.rooms, icon: BedDouble },
        { to: paths.housekeeping, label: t.nav.housekeeping, icon: Sparkles, count: '6' },
        { to: paths.guests, label: t.nav.guests, icon: Users },
      ],
    },
    {
      title: t.nav.groups.business,
      items: [
        { to: paths.billing, label: t.nav.billing, icon: BarChart3 },
        { to: paths.reports, label: t.nav.reports, icon: BarChart3 },
      ],
    },
  ]

  return (
    <>
      <div
        className={[
          'fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm transition-opacity lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 flex w-[264px] shrink-0 select-none flex-col border-r border-line bg-[#454444] transition-transform lg:sticky lg:top-0 lg:z-30 lg:h-screen lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        <div className="flex h-[78px] shrink-0 items-center justify-between border-b border-line px-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cream-50 font-display text-[20px] leading-none text-brand shadow-sm">
              A
            </span>
            <div className="leading-tight">
              <p className="font-display text-[16px] text-[#f3eee6]">{t.app.name}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-[#cfc6b8]">
                {t.app.house}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-faint transition hover:bg-cream-200 hover:text-ink lg:hidden"
            aria-label="close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          {groups.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d6cec2]">
                {group.title}
              </p>
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <NavItem key={item.to} {...item} onNavigate={onClose} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-2 border-t border-line pt-4">
            <NavItem
              to={paths.settings}
              label={t.nav.settings}
              icon={Settings}
              onNavigate={onClose}
            />
          </div>
        </nav>

        <div className="shrink-0 border-t border-line px-3 py-4">
          <SidebarStatus />
        </div>
      </aside>
    </>
  )
}
