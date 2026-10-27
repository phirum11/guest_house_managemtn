import { TrendingDown, TrendingUp } from 'lucide-react'
import { roomPerformance } from '../../../data/reports'
import { useLanguage } from '../../../language'
import Card from '../../../components/ui/Card'
import { Table, Td, Th, Tr } from '../../../components/ui/Table'

export default function PerformanceTable() {
  const { t } = useLanguage()
  const copy = t.reports.performance

  return (
    <Card className="mt-5 overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
          <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
        </div>
        <button type="button" className="self-start text-[10px] text-brand hover:text-brand-strong">
          {copy.fullReport}
        </button>
      </div>

      <Table>
        <thead>
          <tr>
            <Th>{copy.roomType}</Th>
            <Th align="center">{copy.units}</Th>
            <Th align="center">{copy.sold}</Th>
            <Th>{copy.occupancy}</Th>
            <Th align="right">{copy.adr}</Th>
            <Th align="right">{copy.revpar}</Th>
            <Th align="right">{copy.revenue}</Th>
            <Th align="right">{copy.trend}</Th>
          </tr>
        </thead>
        <tbody>
          {roomPerformance.map((row) => (
            <Tr key={row.id}>
              <Td>
                <p className="text-[11px] font-medium text-ink">{row.name}</p>
                <p className="text-[8px] text-ink-faint">{row.meta}</p>
              </Td>
              <Td align="center" className="text-ink-soft">{row.units}</Td>
              <Td align="center" className="text-ink-soft">{row.sold}</Td>
              <Td>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-16 overflow-hidden rounded-full bg-cream-300">
                    <div
                      className="h-full rounded-full bg-sage"
                      style={{ width: `${row.occupancy}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-ink-soft">{row.occupancy}%</span>
                </div>
              </Td>
              <Td align="right" className="text-ink-soft">{row.adr}</Td>
              <Td align="right" className="text-ink-soft">{row.revpar}</Td>
              <Td align="right" className="font-medium">{row.revenue}</Td>
              <Td align="right">
                <span
                  className={[
                    'inline-flex items-center gap-1 text-[10px]',
                    row.up ? 'text-sage' : 'text-danger',
                  ].join(' ')}
                >
                  {row.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {row.trend}
                </span>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      <div className="space-y-1 border-t border-line px-4 py-3 text-[9px] text-ink-faint">
        <p>{copy.note}</p>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>{copy.total}</span>
          <span>{copy.generated}</span>
        </div>
      </div>
    </Card>
  )
}
