import { adrRevpar } from '../../../data/reports'
import { useLanguage } from '../../../language'
import Card from '../../../components/ui/Card'

const WIDTH = 520
const HEIGHT = 190
const PAD = { top: 14, right: 12, bottom: 26, left: 34 }
const yMin = 120
const yMax = 250

function pointX(index, count) {
  const inner = WIDTH - PAD.left - PAD.right
  return PAD.left + (index / Math.max(count - 1, 1)) * inner
}

function pointY(value) {
  const inner = HEIGHT - PAD.top - PAD.bottom
  const ratio = (value - yMin) / (yMax - yMin)
  return PAD.top + (1 - ratio) * inner
}

export default function AdrRevparCard() {
  const { t } = useLanguage()
  const copy = t.reports.adrRevpar

  const series = [
    { key: 'adr', color: '#9c4b2f', values: adrRevpar.adr },
    { key: 'revpar', color: '#64795b', values: adrRevpar.revpar },
  ]

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
        <div>
          <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
          <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          {series.map((item) => (
            <span key={item.key} className="inline-flex items-center gap-1.5 text-[9px] text-ink-soft">
              <span className="h-0.5 w-3.5 rounded-full" style={{ backgroundColor: item.color }} />
              {copy[item.key]}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 pb-2 pt-4">
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-auto w-full">
          {[150, 200, 250].map((tick) => (
            <g key={tick}>
              <line
                x1={PAD.left}
                x2={WIDTH - PAD.right}
                y1={pointY(tick)}
                y2={pointY(tick)}
                stroke="var(--color-line)"
                strokeDasharray="3 5"
              />
              <text
                x={PAD.left - 7}
                y={pointY(tick) + 3}
                textAnchor="end"
                fill="var(--color-ink-faint)"
                fontSize="8"
              >
                €{tick}
              </text>
            </g>
          ))}

          {series.map((item) => {
            const points = item.values.map((value, index) => ({
              x: pointX(index, item.values.length),
              y: pointY(value),
            }))
            return (
              <g key={item.key}>
                <polyline
                  points={points.map((point) => `${point.x},${point.y}`).join(' ')}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {points.map((point, index) => (
                  <circle
                    key={`${item.key}-${index}`}
                    cx={point.x}
                    cy={point.y}
                    r="2.5"
                    fill="var(--color-cream-50)"
                    stroke={item.color}
                    strokeWidth="1.6"
                  />
                ))}
              </g>
            )
          })}

          {adrRevpar.labels.map((label, index) => (
            <text
              key={label}
              x={pointX(index, adrRevpar.labels.length)}
              y={HEIGHT - 6}
              textAnchor="middle"
              fill="var(--color-ink-faint)"
              fontSize="8"
            >
              {label}
            </text>
          ))}
        </svg>
      </div>

      <div className="border-t border-line px-5 py-3">
        <p className="text-[9px] text-ink-faint">{copy.range}</p>
      </div>
    </Card>
  )
}
