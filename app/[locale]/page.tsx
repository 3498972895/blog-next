'use client'

import { needsImages, uploadImageStage } from '@/actions/exampleAction'
// import { getI18n } from '@/i18n/server'
import {
  extractMatchRegexItem,
  hasImageLinkInMD,
  isMD,
} from '@/lib/handlerUtils'
import { useReducer } from 'react'

type UploadMdAction =
  | { type: 'uploadFile' }
  | { type: 'checkImages' }
  | { type: 'preview' }
  | { type: 'finish' }
type UploadArgs = {
  hasImageUrl: boolean
  extractedImage: string[]
  needsReplace: boolean[]
  replaceImages: string[]
}
function reducer(state: UploadArgs, action: UploadMdAction): UploadArgs {
  switch (action.type) {
    case 'uploadFile':
      return { ...state }
    case 'checkImages':
      return { ...state }
    case 'preview':
      return { ...state }
    case 'finish':
      return { ...state }
    default:
      return state
  }
}
const initState: UploadArgs = {
  hasImageUrl: false,
  extractedImage: [],
  needsReplace: [],
  replaceImages: [],
}
export default async function Page({}: {}) {
  // const t = await getI18n()

  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>
      {/* <div>{t('hello')}</div> */}
      <p className='text-red-600'>
        你好
      </p>
      <input
        type='file'
        name='thisMd'
        onChange={e => {
          if (e.target.files) {
            if (e.target.files.length == 1) {
              const file = e.target.files[0]
            } else {
              throw new Error('only upload one file')
            }
          }
        }}
      />
      <button onClick={async () => {}}>next step</button>
    </>
  )
}
