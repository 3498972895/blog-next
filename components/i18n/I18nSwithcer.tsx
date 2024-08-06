'use client'

import { useChangeLocale } from '@/i18n/client'

export function Switch() {
  // Uncomment to preserve the search params. Don't forget to also uncomment the Suspense in the layout
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */)

  return (
    <>
      <button type='button' onClick={() => changeLocale('en')}>
        EN
      </button>
      <button type='button' onClick={() => changeLocale('cn')}>
        CN
      </button>
    </>
  )
}
