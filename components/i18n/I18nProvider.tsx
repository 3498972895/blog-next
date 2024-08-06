'use client'

import type { ReactNode } from 'react'
import { I18nProviderClient } from '@/i18n/client'

type I18nProviderProps = {
  locale: string
  children: ReactNode
}

export default function I18nProvider({ locale, children }: I18nProviderProps) {
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading.xxxx..</p>}>
      {children}
    </I18nProviderClient>
  )
}
