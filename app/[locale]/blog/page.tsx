import { useTranslations } from 'next-intl'

export default function () {
  const t = useTranslations('blog')
  return <h1 className='font-sans'>{t('example')}</h1>
}
