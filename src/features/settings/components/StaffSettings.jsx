import { Plus } from 'lucide-react'
import { useState } from 'react'
import { staff } from '../../../data/staff'
import { useLanguage } from '../../../language'
import Avatar from '../../../components/ui/Avatar'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import AddStaff from './AddStaff'

export default function StaffSettings() {
  const { t } = useLanguage()
  const copy = t.settings.staff
  const [staffMembers, setStaffMembers] = useState(staff)

  return (
    <Card className="overflow-hidden">
      <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
        <div>
          <h2 className="font-display text-[20px] leading-snug text-ink">{copy.title}</h2>
          <p className="mt-0.5 text-[10px] text-ink-faint">{copy.subtitle}</p>
        </div>
        <AddStaff
          onAdd={(member) => setStaffMembers((current) => [...current, member])}
        >
          <Button variant="soft" icon={Plus} size="sm">
            {copy.add}
          </Button>
        </AddStaff>
      </div>

      <div className="divide-y divide-line">
        {staffMembers.map((member) => (
          <div key={member.id} className="flex items-center gap-3 px-5 py-3">
            <Avatar name={member.name} src={member.image} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-ink">{member.name}</p>
              <p className="truncate text-[9px] text-ink-faint">
                {copy[member.role] ?? member.role} · {member.email}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span
                className={[
                  'inline-flex items-center gap-1 text-[8px]',
                  member.active ? 'text-sage' : 'text-ink-faint',
                ].join(' ')}
              >
                <span
                  className={[
                    'h-1.5 w-1.5 rounded-full',
                    member.active ? 'bg-sage' : 'bg-line-strong',
                  ].join(' ')}
                />
                {member.active ? copy.active : copy.lastLogin}
              </span>
              <p className="mt-0.5 text-[8px] text-ink-faint">{member.lastLogin}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
