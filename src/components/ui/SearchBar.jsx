import { Search } from 'lucide-react'

export default function SearchBar({
  value,
  onChange,
  placeholder,
  kbd,
  className = '',
  inputClassName = '',
  ...props
}) {
  return (
    <label
      className={[
        'flex h-10 items-center gap-2 rounded-lg border border-line bg-cream-50 px-3 text-ink-soft transition focus-within:border-brand-line focus-within:ring-2 focus-within:ring-brand-soft',
        className,
      ].join(' ')}
    >
      <Search className="h-4 w-4 shrink-0 text-ink-faint" strokeWidth={1.8} />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={[
          'min-w-0 flex-1 bg-transparent text-[12px] text-ink outline-none placeholder:text-ink-faint',
          inputClassName,
        ].join(' ')}
        {...props}
      />
      {kbd ? (
        <span className="kbd hidden sm:inline-flex">{kbd}</span>
      ) : null}
    </label>
  )
}
