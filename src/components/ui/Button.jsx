const variants = {
  primary:
    'border border-brand bg-brand text-cream-50 hover:bg-brand-strong hover:border-brand-strong',
  secondary:
    'border border-line bg-cream-50 text-ink hover:bg-white hover:border-line-strong',
  outline:
    'border border-line-strong bg-transparent text-ink hover:bg-cream-50',
  ghost: 'border border-transparent text-ink-soft hover:bg-cream-200 hover:text-ink',
  danger:
    'border border-danger bg-danger text-cream-50 hover:bg-[#8d3c30]',
  soft: 'border border-brand-line bg-brand-soft text-brand-strong hover:bg-[#efd9cc]',
}

const sizes = {
  xs: 'h-7 gap-1.5 px-2 text-[11px]',
  sm: 'h-8 gap-1.5 px-3 text-[12px]',
  md: 'h-10 gap-2 px-4 text-[13px]',
  lg: 'h-11 gap-2 px-5 text-[14px]',
  icon: 'h-9 w-9 px-0',
}

export function buttonClass({ variant = 'primary', size = 'md', className = '' } = {}) {
  return [
    'inline-flex shrink-0 items-center justify-center rounded-lg font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50',
    'disabled:pointer-events-none disabled:opacity-45',
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ].join(' ')
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  className = '',
  children,
  type,
  ...props
}) {
  return (
    <Component
      className={buttonClass({ variant, size, className })}
      {...(Component === 'button' ? { type: type ?? 'button' } : {})}
      {...props}
    >
      {Icon ? <Icon className="h-4 w-4" strokeWidth={1.8} /> : null}
      {children}
      {IconRight ? <IconRight className="h-4 w-4" strokeWidth={1.8} /> : null}
    </Component>
  )
}
