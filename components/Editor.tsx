'use client'
import React, { useState } from 'react'
import { MdEditor, config } from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'

const Editor = () => {
  const [text, setText] = useState('hello md-editor-rt!')
  return (
    <MdEditor
      modelValue={text}
      onChange={setText}
      theme='dark'
      previewTheme='github'
      codeTheme='kimbie'
      language='en-US'
      showCodeRowNumber={true}
      autoFocus={true}
      onSave={(v, h) => {
      }}
    />
  )
}
export default Editor
