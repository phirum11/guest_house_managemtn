import { useLanguage } from '../../../language'
import SearchBar from '../../../components/ui/SearchBar'

const filters = ['all', 'inHouse', 'returning', 'vip']

export default function GuestFilters({
  search,
  onSearch,
  filter,
  onFilter,
}) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-3 border-b border-line px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
      <SearchBar
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder={t.guests.search}
        className="w-full lg:max-w-[360px]"
      />
      <div className="flex flex-wrap gap-1.5">
        {filters.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onFilter(key)}
            className={[
              'rounded-full border px-3 py-1.5 text-[11px] transition',
              filter === key
                ? 'border-ink bg-ink text-cream-50'
                : 'border-line text-ink-soft hover:border-line-strong hover:bg-cream-100',
            ].join(' ')}
          >
            {t.guests.filters[key]}
          </button>
        ))}
      </div>
    </div>
  )
}
