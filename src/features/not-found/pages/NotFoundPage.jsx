import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../language'
import { paths } from '../../../router/paths'
import Button from '../../../components/ui/Button'

export default function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-[62vh] flex-col items-center justify-center text-center">
      <p className="font-display text-[88px] leading-none text-brand/25">404</p>
      <h1 className="mt-4 font-display text-[28px] leading-snug text-ink">
        {t.notFound.title}
      </h1>
      <p className="mt-2 max-w-md text-[12px] leading-7 text-ink-soft">
        {t.notFound.text}
      </p>
      <Button as={Link} to={paths.today} variant="primary" icon={ArrowLeft} className="mt-6">
        {t.notFound.back}
      </Button>
    </div>
  )
}
