export default function Input({
  label,
  hint,
  error,
  className = '',
  id,
  ...props
}) {
  const fieldId = id ?? (label ? `field-${label}` : undefined)

  return (
    <label className={['flex flex-col gap-1.5', className].join(' ')} htmlFor={fieldId}>
      {label ? (
        <span className="text-[11px] font-medium text-ink-soft">{label}</span>
      ) : null}
      <input id={fieldId} className="field" {...props} />
      {error ? (
        <span className="text-[11px] text-danger">{error}</span>
      ) : hint ? (
        <span className="text-[11px] text-ink-faint">{hint}</span>
      ) : null}
    </label>
  )
}
