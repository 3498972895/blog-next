import React from 'react'
import { xiaoWei, maShanZheng } from '@/fonts/cn'
import { ubuntu, ubuntuCondensed, ubuntuMono } from '@/fonts/en'
import AuthSessionprovider from '@/components/auth/AuthSessionProvider'
import { getServerSession } from 'next-auth'
export default async function LocaleLayout({
  params: { locale },
  children,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const session = await getServerSession()
  return (
    <html
    lang={locale}
      className={`${xiaoWei.variable} ${maShanZheng.variable} ${ubuntu.variable} ${ubuntuCondensed.variable} ${ubuntuMono.variable}`}>
      <body>
        <AuthSessionprovider session={session}>{children}</AuthSessionprovider>
      </body>
    </html>
  )
}
