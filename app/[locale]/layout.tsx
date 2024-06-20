import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import React from 'react'
import '@/app/globals.css'
import { locales } from '@/i18n'
import { unstable_setRequestLocale } from 'next-intl/server'
import { xiaoWei, maShanZheng } from '@/fonts/cn'
import { ubuntu, ubuntuCondensed, ubuntuMono } from '@/fonts/en'
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  unstable_setRequestLocale(locale)
  return (
    <html
      lang={locale}
      className={`${xiaoWei.variable} ${maShanZheng.variable} ${ubuntu.variable} ${ubuntuCondensed.variable} ${ubuntuMono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}
