export function Table({ children, className = '' }) {
  return (
    <div className={['w-full overflow-x-auto', className].join(' ')}>
      <table className="w-full min-w-[640px] border-collapse text-left">
        {children}
      </table>
    </div>
  )
}

export function Th({ children, className = '', align = 'left' }) {
  return (
    <th
      scope="col"
      className={[
        'border-b border-line px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-faint',
        align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left',
        className,
      ].join(' ')}
    >
      {children}
    </th>
  )
}

export function Td({ children, className = '', align = 'left', ...props }) {
  return (
    <td
      className={[
        'border-b border-line/70 px-3 py-3 text-[12px] leading-6 text-ink',
        align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </td>
  )
}

export function Tr({ children, className = '', ...props }) {
  return (
    <tr
      className={['transition-colors hover:bg-cream-100/60', className].join(' ')}
      {...props}
    >
      {children}
    </tr>
  )
}
