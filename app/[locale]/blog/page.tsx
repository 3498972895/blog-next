'use client'
import { useTranslations } from 'next-intl'
import {signIn} from "next-auth/react"

export default function () {
  const t = useTranslations('blog')
  return (
    <>
      <h1 className='font-sans'>{t('example')}</h1>
      <button onClick={()=>signIn("github")}>signin</button>
    </>
  )
}
