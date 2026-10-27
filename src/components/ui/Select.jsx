import { ChevronDown } from 'lucide-react'

export default function Select({
  label,
  hint,
  className = '',
  id,
  children,
  ...props
}) {
  const fieldId = id ?? (label ? `select-${label}` : undefined)

  return (
    <label className={['flex flex-col gap-1.5', className].join(' ')} htmlFor={fieldId}>
      {label ? (
        <span className="text-[11px] font-medium text-ink-soft">{label}</span>
      ) : null}
      <span className="relative">
        <select
          id={fieldId}
          className="field appearance-none pr-9"
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
      </span>
      {hint ? <span className="text-[11px] text-ink-faint">{hint}</span> : null}
    </label>
  )
}
