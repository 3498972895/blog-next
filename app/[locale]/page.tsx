import { getI18n } from '@/i18n/server'

export default async function Page({}: {}) {
  const t = await getI18n()
  return <div>{t('hello')}</div>
}
