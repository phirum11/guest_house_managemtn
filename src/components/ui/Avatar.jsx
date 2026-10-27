const palettes = [
  ['#eee3d2', '#7b6247'],
  ['#e5eadf', '#5f7156'],
  ['#f2e4dd', '#94553d'],
  ['#e3e8ec', '#5c6c78'],
  ['#f0e8d6', '#836f3f'],
  ['#eae1ec', '#75607a'],
]

function initials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
}

function paletteFor(name = '') {
  const total = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0)
  return palettes[total % palettes.length]
}

const sizes = {
  xs: 'h-6 w-6 text-[9px]',
  sm: 'h-8 w-8 text-[10px]',
  md: 'h-10 w-10 text-[12px]',
  lg: 'h-14 w-14 text-[16px]',
  xl: 'h-[72px] w-[72px] text-[22px]',
}

export default function Avatar({
  name = '',
  src,
  size = 'md',
  className = '',
}) {
  const [background, color] = paletteFor(name)

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={[
          'shrink-0 rounded-full object-cover ring-2 ring-cream-50',
          sizes[size] ?? sizes.md,
          className,
        ].join(' ')}
      />
    )
  }

  return (
    <span
      className={[
        'inline-flex shrink-0 items-center justify-center rounded-full font-semibold ring-2 ring-cream-50',
        sizes[size] ?? sizes.md,
        className,
      ].join(' ')}
      style={{ backgroundColor: background, color }}
      aria-hidden="true"
    >
      {initials(name)}
    </span>
  )
}
