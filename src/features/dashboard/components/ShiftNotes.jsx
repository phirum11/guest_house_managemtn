import { Plus } from 'lucide-react'
import { shiftNotes } from '../../../data/shiftNotes'
import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'

export default function ShiftNotes() {
  const { t } = useLanguage()
  const copy = t.dashboard.notes

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
        <Button variant="ghost" size="xs" icon={Plus} className="text-brand">
          {copy.add}
        </Button>
      </div>

      <div className="divide-y divide-line">
        {shiftNotes.map((note) => (
          <div key={note.id} className="flex gap-3 px-5 py-4">
            <Avatar name={note.author} size="xs" />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[10px] font-medium text-ink">{note.author}</p>
                <span className="text-[9px] text-ink-faint">{note.time}</span>
              </div>
              <p className="mt-1 text-[11px] leading-6 text-ink-soft">{note.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
