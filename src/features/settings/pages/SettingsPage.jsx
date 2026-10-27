import { useState } from 'react'
import { Check, Save } from 'lucide-react'
import { useLanguage } from '../../../language'
import Button from '../../../components/ui/Button'
import PageHeader from '../../../components/layout/PageHeader'
import NotificationSettings from '../components/NotificationSettings'
import PropertySettings from '../components/PropertySettings'
import StaffSettings from '../components/StaffSettings'
import TaxSettings from '../components/TaxSettings'

export default function SettingsPage() {
  const { t } = useLanguage()
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2200)
  }

  return (
    <div>
      <PageHeader
        eyebrow={t.settings.eyebrow}
        title={t.settings.title}
        subtitle={t.settings.subtitle}
        actions={
          <Button
            variant={saved ? 'soft' : 'primary'}
            icon={saved ? Check : Save}
            onClick={handleSave}
          >
            {saved ? t.settings.saved : t.settings.save}
          </Button>
        }
      />

      <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="space-y-5">
          <PropertySettings />
          <TaxSettings />
        </div>
        <div className="space-y-5">
          <NotificationSettings />
          <StaffSettings />
        </div>
      </div>
    </div>
  )
}
