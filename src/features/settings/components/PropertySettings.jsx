import { useLanguage } from '../../../language'
import { property } from '../../../data/property'
import Card, { CardHeader } from '../../../components/ui/Card'
import Input from '../../../components/ui/Input'
import Dropdown from '../../../components/ui/Dropdown'
import { ChevronDown, Check } from 'lucide-react'
import { useState } from 'react'

const currencyOptions = [
  'EUR — អឺរ៉ូ',
  'USD — ដុល្លារ',
  'KHR — រៀល',
]

export default function PropertySettings() {
  const { t } = useLanguage()
  const copy = t.settings.property
  const [currency, setCurrency] = useState(property.currency)

  return (
    <Card className="overflow-visible">
      <div className="border-b border-line px-5 py-4">
        <CardHeader title={copy.title} subtitle={copy.subtitle} />
      </div>

      <div className="grid gap-3 px-5 py-4 sm:grid-cols-2">
        <Input label={copy.name} defaultValue={property.name} />
        <Input label={copy.phone} defaultValue={property.phone} />
        <Input label={copy.email} defaultValue={property.email} type="email" />
        <Input label={copy.address} defaultValue={property.address} />
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-medium text-ink-soft">{copy.currency}</span>
          <Dropdown
            align="left"
            className="w-full"
            menuClassName="w-full"
            triggerClassName="field w-full justify-between text-left"
            trigger={
              <>
                <span>{currency}</span>
                <ChevronDown className="h-4 w-4 text-ink-faint" />
              </>
            }
            items={currencyOptions.map((option) => ({
              key: option,
              label: option,
              onClick: () => setCurrency(option),
              icon: option === currency ? Check : undefined,
              iconAfter: true,
            }))}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input label={copy.checkIn} defaultValue={property.checkIn} />
          <Input label={copy.checkOut} defaultValue={property.checkOut} />
        </div>
      </div>
    </Card>
  )
}
