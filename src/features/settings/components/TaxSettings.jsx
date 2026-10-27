import { useLanguage } from '../../../language'
import { property } from '../../../data/property'
import Card, { CardHeader } from '../../../components/ui/Card'
import Input from '../../../components/ui/Input'

export default function TaxSettings() {
  const { t } = useLanguage()
  const copy = t.settings.tax

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-line px-5 py-4">
        <CardHeader title={copy.title} subtitle={copy.subtitle} />
      </div>

      <div className="grid gap-3 px-5 py-4 sm:grid-cols-2">
        <Input label={copy.vat} defaultValue={property.vat} />
        <Input label={copy.extrasVat} defaultValue={property.extrasVat} />
        <Input label={copy.touristTax} defaultValue={property.touristTax} />
        <Input label={copy.serviceCharge} defaultValue={property.serviceCharge} />
      </div>
    </Card>
  )
}
