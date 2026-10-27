import { ClipboardCheck } from 'lucide-react'
import { housekeepingStaff } from '../../../data/housekeeping'
import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Card from '../../../components/ui/Card'
import ProgressBar from '../../../components/ui/ProgressBar'

export default function StaffOverview() {
  const { t } = useLanguage()
  const copy = t.housekeeping.staff

  return (
    <div>
      <div className="mb-3">
        <h2 className="font-display text-[20px] text-ink">{copy.title}</h2>
        <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {housekeepingStaff.map((staff) => {
          const isInspector = staff.role === 'inspector'
          return (
            <Card key={staff.id} className="flex flex-col p-4">
              <div className="flex items-start gap-2.5">
                <Avatar name={staff.name} size="md" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-medium text-ink">{staff.name}</p>
                  <p className="mt-0.5 text-[9px] text-ink-faint">
                    {copy[staff.role] ?? staff.role}
                  </p>
                  <p className="text-[8px] text-ink-faint">{copy.rota}</p>
                </div>
                {isInspector ? (
                  <ClipboardCheck className="h-4 w-4 shrink-0 text-ink-faint" strokeWidth={1.6} />
                ) : null}
              </div>

              {isInspector ? (
                <p className="mt-3 text-[9px] leading-5 text-ink-soft">{staff.meta}</p>
              ) : (
                <div className="mt-3 flex flex-wrap gap-1">
                  {staff.rooms.map((room) => (
                    <span
                      key={room}
                      className="rounded border border-line bg-cream-100 px-1.5 py-0.5 text-[8px] text-ink-soft"
                    >
                      {room}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-3">
                <div className="mb-1 flex items-center justify-between text-[9px]">
                  <span className="text-ink-faint">
                    {isInspector ? copy.checks : copy.roomsDone}
                  </span>
                  <span className="text-ink">
                    {staff.done} / {staff.total}
                  </span>
                </div>
                <ProgressBar
                  value={staff.done}
                  max={staff.total}
                  tone={isInspector ? 'ink' : 'sage'}
                  heightClassName="h-1"
                />
                {isInspector ? (
                  <p className="mt-2 text-[8px] text-ink-faint">{copy.nextInspection}</p>
                ) : null}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
