export default function Textarea({
  label,
  hint,
  className = '',
  id,
  ...props
}) {
  const fieldId = id ?? (label ? `textarea-${label}` : undefined)

  return (
    <label className={['flex flex-col gap-1.5', className].join(' ')} htmlFor={fieldId}>
      {label ? (
        <span className="text-[11px] font-medium text-ink-soft">{label}</span>
      ) : null}
      <textarea
        id={fieldId}
        className="field min-h-24 resize-y py-2 leading-7"
        {...props}
      />
      {hint ? <span className="text-[11px] text-ink-faint">{hint}</span> : null}
    </label>
  )
}
