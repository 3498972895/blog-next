import I18nProvider from '@/components/i18n/I18nProvider'

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <div>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </div>
  )
}
