'use client'
import { useTranslations } from 'next-intl'
import { signIn } from 'next-auth/react'
import Editor from '@/components/Editor'
import { exampleTest } from '@/actions/exampleAction'

export default function () {
  const t = useTranslations('blog')
  
  return (
    <>
      <h1 className='font-sans'>{t('example')}</h1>
      <button onClick={() => signIn('github')}>signin</button>
      <Editor />
      <br />
      <form action={exampleTest}>
        <input type='file' name='example' />
        <button type='submit'>upload</button>
      </form>
    </>
  )
}
