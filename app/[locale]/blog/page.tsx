'use client'
import Editor from '@/components/md/Editor'
import { useI18n } from '@/i18n/client'
export default function Page() {
  const t = useI18n()
  return (
    <>
  {t('hello')}
      {/* <h1 className='font-sans'>{t('example')}</h1> */}
      {/* <button onClick={() => signIn('github')}>signin</button> */}
      <Editor />
      {/* <br /> */}
      {/* <form action={exampleTest}>
        <input type='file' name='example' />
        <button type='submit'>upload</button>
      </form> */}
    </>
  )
}
