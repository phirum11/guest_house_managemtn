export default function Checkbox({
  label,
  className = '',
  id,
  ...props
}) {
  const fieldId = id ?? (label ? `checkbox-${label}` : undefined)

  return (
    <label
      className={[
        'inline-flex cursor-pointer items-center gap-2 text-[12px] text-ink',
        className,
      ].join(' ')}
      htmlFor={fieldId}
    >
      <input
        id={fieldId}
        type="checkbox"
        className="h-4 w-4 rounded border-line-strong accent-[var(--color-brand)]"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}
