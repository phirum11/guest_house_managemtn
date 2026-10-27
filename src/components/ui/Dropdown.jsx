import { useEffect, useRef, useState } from 'react'

export default function Dropdown({
  trigger,
  items = [],
  align = 'right',
  className = '',
  triggerClassName = '',
  menuClassName = '',
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function handleClick(event) {
      if (!ref.current?.contains(event.target)) setOpen(false)
    }

    function handleKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <div ref={ref} className={['relative', className].join(' ')}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={['flex items-center', triggerClassName].join(' ')}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {trigger}
      </button>
      {open ? (
        <div
          role="menu"
          className={[
            'absolute top-full z-40 mt-2 min-w-44 overflow-hidden rounded-lg border border-line bg-cream-50 py-1 shadow-card',
            align === 'left' ? 'left-0' : 'right-0',
            menuClassName,
          ].join(' ')}
        >
          {items.map((item, index) => {
            if (item.divider) {
              return <div key={`divider-${index}`} className="my-1 border-t border-line" />
            }

            const Icon = item.icon
            return (
              <button
                key={item.key ?? item.label}
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false)
                  item.onClick?.()
                }}
                className={[
                  'flex w-full items-center gap-2 px-3 py-2 text-left text-[12px] transition-colors hover:bg-cream-100',
                  item.danger ? 'text-danger' : 'text-ink-soft hover:text-ink',
                ].join(' ')}
              >
                {!item.iconAfter && Icon ? (
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                ) : null}
                <span>{item.label}</span>
                {item.iconAfter && Icon ? (
                  <Icon className="ml-auto h-4 w-4" strokeWidth={1.7} />
                ) : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
