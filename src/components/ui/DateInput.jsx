import { CalendarDays } from 'lucide-react'

export default function DateInput({
  label,
  className = '',
  id,
  value,
  ...props
}) {
  const fieldId = id ?? (label ? `date-${label}` : undefined)

  return (
    <label className={['flex flex-col gap-1.5', className].join(' ')} htmlFor={fieldId}>
      {label ? (
        <span className="text-[11px] font-medium text-ink-soft">{label}</span>
      ) : null}
      <span className="relative">
        <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <input
          id={fieldId}
          type="date"
          value={value}
          className="field pl-9 pr-2"
          {...props}
        />
      </span>
    </label>
  )
}
