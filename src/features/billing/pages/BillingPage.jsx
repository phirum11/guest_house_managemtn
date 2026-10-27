import { useState } from 'react'
import { Download, Plus } from 'lucide-react'
import { folioDetails, folios } from '../../../data/folios'
import { useLanguage } from '../../../language'
import Button from '../../../components/ui/Button'
import PageHeader from '../../../components/layout/PageHeader'
import BillingStats from '../components/BillingStats'
import FolioDetailPanel from '../components/FolioDetailPanel'
import FoliosCard from '../components/FoliosCard'
import RecentPayments from '../components/RecentPayments'

const openStatuses = ['open', 'partPaid', 'cardDeclined', 'depositHeld']

function fallbackDetail(folio, t) {
  const paid = Math.max(folio.total - Math.max(folio.balance, 0), 0)
  return {
    charges: [
      {
        label: t.billing.detail.room,
        meta: folio.stayMeta,
        amount: `€${folio.total.toLocaleString('en-US')}.00`,
      },
    ],
    subtotal: `€${folio.total.toLocaleString('en-US')}.00`,
    vatAccommodation: '—',
    vatExtras: '—',
    totalDue: `€${folio.total.toLocaleString('en-US')}.00`,
    payments: paid > 0
      ? [{ method: 'Visa ••4417', meta: folio.issued, amount: `€${paid.toLocaleString('en-US')}.00` }]
      : [],
    balanceDue: `€${folio.balance.toLocaleString('en-US')}.00`,
    activity: [
      { text: t.billing.table.folio + ' ' + folio.id, meta: folio.issued, brand: true },
    ],
  }
}

export default function BillingPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')
  const [selectedId, setSelectedId] = useState('F-2418')

  const counts = {
    all: folios.length,
    open: folios.filter((folio) => openStatuses.includes(folio.status)).length,
    paid: folios.filter((folio) => folio.status === 'paid').length,
    refunded: folios.filter((folio) => folio.status === 'refunded').length,
  }

  const tabs = [
    { key: 'all', label: t.billing.tabs.all, count: counts.all },
    { key: 'open', label: t.billing.tabs.open, count: counts.open },
    { key: 'paid', label: t.billing.tabs.paid, count: counts.paid },
    { key: 'refunded', label: t.billing.tabs.refunded, count: counts.refunded },
  ]

  const filtered = folios.filter((folio) => {
    if (activeTab === 'all') return true
    if (activeTab === 'open') return openStatuses.includes(folio.status)
    return folio.status === activeTab
  })

  const selectedFolio =
    filtered.find((folio) => folio.id === selectedId) ?? filtered[0] ?? folios[0]
  const detail = folioDetails[selectedFolio.id] ?? fallbackDetail(selectedFolio, t)

  return (
    <div>
      <PageHeader
        eyebrow={t.billing.eyebrow}
        title={t.billing.title}
        subtitle={t.billing.subtitle}
        actions={
          <>
            <Button variant="secondary" icon={Download}>
              {t.billing.export}
            </Button>
            <Button variant="primary" icon={Plus}>
              {t.billing.newInvoice}
            </Button>
          </>
        }
      />

      <BillingStats />

      <div className="mt-5 grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <FoliosCard
          folios={filtered}
          tabs={tabs}
          activeTab={activeTab}
          onTab={setActiveTab}
          selectedId={selectedFolio.id}
          onSelect={setSelectedId}
        />

        <div className="xl:sticky xl:top-[94px]">
          <FolioDetailPanel folio={selectedFolio} detail={detail} />
        </div>
      </div>

      <RecentPayments />
    </div>
  )
}
