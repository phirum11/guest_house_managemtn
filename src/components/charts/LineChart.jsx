const WIDTH = 720
const HEIGHT = 230
const PAD = { top: 12, right: 14, bottom: 14, left: 40 }

export default function LineChart({
  labels = [],
  series = [],
  yMin = 50,
  yMax = 100,
  ticks = [50, 60, 70, 80, 90, 100],
  showArea = true,
  className = '',
}) {
  const innerWidth = WIDTH - PAD.left - PAD.right
  const innerHeight = HEIGHT - PAD.top - PAD.bottom
  const count = Math.max(...series.map((item) => item.values.length), 1)

  function pointX(index) {
    if (count === 1) return PAD.left + innerWidth / 2
    return PAD.left + (index / (count - 1)) * innerWidth
  }

  function pointY(value) {
    const ratio = (value - yMin) / (yMax - yMin)
    return PAD.top + (1 - ratio) * innerHeight
  }

  return (
    <div className={className}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-auto w-full">
        {ticks.map((tick) => {
          const y = pointY(tick)
          return (
            <g key={tick}>
              <line
                x1={PAD.left}
                x2={WIDTH - PAD.right}
                y1={y}
                y2={y}
                stroke="var(--color-line)"
                strokeWidth="1"
                strokeDasharray={tick === yMin ? undefined : '3 5'}
              />
              <text
                x={PAD.left - 9}
                y={y + 3}
                textAnchor="end"
                fill="var(--color-ink-faint)"
                fontSize="9"
              >
                {tick}%
              </text>
            </g>
          )
        })}

        {series.map((item, seriesIndex) => {
          const points = item.values.map((value, index) => ({
            x: pointX(index),
            y: pointY(value),
          }))
          const line = points.map((point) => `${point.x},${point.y}`).join(' ')

          return (
            <g key={item.key ?? item.label}>
              {showArea && seriesIndex === 0 ? (
                <polygon
                  points={[
                    `${points[0]?.x ?? PAD.left},${HEIGHT - PAD.bottom}`,
                    line,
                    `${points[points.length - 1]?.x ?? WIDTH - PAD.right},${HEIGHT - PAD.bottom}`,
                  ].join(' ')}
                  fill={item.color}
                  opacity="0.08"
                />
              ) : null}
              <polyline
                points={line}
                fill="none"
                stroke={item.color}
                strokeWidth={seriesIndex === 0 ? 2 : 1.4}
                strokeDasharray={item.dashed ? '5 5' : undefined}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {seriesIndex === 0 && points.length ? (
                <circle
                  cx={points[points.length - 1].x}
                  cy={points[points.length - 1].y}
                  r="3"
                  fill={item.color}
                />
              ) : null}
            </g>
          )
        })}
      </svg>

      {labels.length ? (
        <div className="flex justify-between pl-10 pr-3 text-[9px] text-ink-faint">
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      ) : null}
    </div>
  )
}
