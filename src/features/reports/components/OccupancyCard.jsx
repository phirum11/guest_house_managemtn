import { occupancyTrend } from '../../../data/reports'
import { useLanguage } from '../../../language'
import LineChart from '../../../components/charts/LineChart'
import Card from '../../../components/ui/Card'

export default function OccupancyCard() {
  const { t } = useLanguage()
  const copy = t.reports.occupancy

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col gap-2 border-b border-line px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
          <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {occupancyTrend.series.map((series) => (
            <span key={series.key} className="inline-flex items-center gap-1.5 text-[9px] text-ink-soft">
              <span
                className={['h-0.5 w-3.5 rounded-full', series.dashed ? 'opacity-70' : ''].join(' ')}
                style={{ backgroundColor: series.color }}
              />
              {series.key === 'average' ? copy.seriesAverage : series.label}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 pb-3 pt-5">
        <LineChart
          labels={occupancyTrend.labels}
          series={occupancyTrend.series}
          yMin={50}
          yMax={100}
          ticks={[50, 60, 70, 80, 90, 100]}
          showArea
        />
      </div>

      <div className="grid grid-cols-1 gap-px border-t border-line bg-line sm:grid-cols-3">
        <div className="bg-cream-50 px-5 py-3">
          <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">{copy.bestDay}</p>
          <p className="mt-0.5 text-[10px] font-medium text-ink">{copy.bestDayValue}</p>
        </div>
        <div className="bg-cream-50 px-5 py-3">
          <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">{copy.weakest}</p>
          <p className="mt-0.5 text-[10px] font-medium text-ink">{copy.weakestValue}</p>
        </div>
        <div className="bg-cream-50 px-5 py-3">
          <p className="text-[8px] uppercase tracking-[0.14em] text-ink-faint">{t.reports.range}</p>
          <p className="mt-0.5 text-[10px] text-ink-soft">{copy.nightsAbove}</p>
        </div>
      </div>
    </Card>
  )
}
