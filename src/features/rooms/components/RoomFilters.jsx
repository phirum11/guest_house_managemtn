import { LayoutGrid, List, RefreshCw, Wrench } from 'lucide-react'
import { useLanguage } from '../../../language'
import Button from '../../../components/ui/Button'
import Tabs from '../../../components/ui/Tabs'

const filters = ['all', 'suites', 'doubles', 'studios']

export default function RoomFilters({
  value,
  onChange,
  view,
  onViewChange,
}) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-3 py-1 lg:flex-row lg:items-center lg:justify-between">
      <Tabs
        value={value}
        onChange={onChange}
        tabs={filters.map((key) => ({ key, label: t.rooms.filters[key] }))}
      />

      <div className="flex flex-wrap items-center gap-2">
        <span className="hidden items-center gap-1 text-[10px] text-ink-faint sm:flex">
          <RefreshCw className="h-3 w-3" />
          {t.rooms.refreshed}
        </span>
        <div className="inline-flex rounded-lg border border-line bg-cream-50 p-0.5">
          <button
            type="button"
            onClick={() => onViewChange('grid')}
            className={[
              'flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] transition',
              view === 'grid' ? 'bg-cream-200 text-ink' : 'text-ink-soft hover:text-ink',
            ].join(' ')}
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            {t.rooms.grid}
          </button>
          <button
            type="button"
            onClick={() => onViewChange('list')}
            className={[
              'flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] transition',
              view === 'list' ? 'bg-cream-200 text-ink' : 'text-ink-soft hover:text-ink',
            ].join(' ')}
          >
            <List className="h-3.5 w-3.5" />
            {t.rooms.list}
          </button>
        </div>
        <Button variant="secondary" size="sm" icon={Wrench}>
          {t.rooms.maintenance}
        </Button>
      </div>
    </div>
  )
}
