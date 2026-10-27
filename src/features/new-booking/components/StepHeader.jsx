export default function StepHeader({ number, title, subtitle, children }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
      <div className="flex gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-line bg-brand-soft font-display text-[13px] text-brand-strong">
          {number}
        </span>
        <div className="-mt-0.5">
          <h2 className="font-display text-[18px] leading-tight text-ink">{title}</h2>
          <p className="mt-0.5 text-[10px] text-ink-faint">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  )
}
