'use client'

import { useState } from 'react'
import Markdown from 'react-markdown'
import { mdxComponents } from './mdxComponents'
const Editor = () => {
  const [sourceInput, setSourceInput] = useState('')

  return (
    <div className='border-red-200 w-9 h-36'>
      <input
        type='text'
        name='sourceInput'
        value={sourceInput}
        onChange={e => setSourceInput(e.target.value)}
      />
      <Markdown className='w-72 h-36' components={mdxComponents}>
        {sourceInput}
      </Markdown>
      <button onClick={async () => {}}>upload</button>
    </div>
  )
}

export default Editor
