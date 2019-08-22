import React, { FunctionComponent } from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'
import { renderBlock } from './components/renderBlock'
import { renderMark } from './components/renderMark'
import { plugins } from './helpers/plugins'

type Props = { value: Value }

const MarkdownPreview: FunctionComponent<Props> = ({ value }) => {
  return (
    <Editor
      plugins={plugins}
      readOnly
      renderBlock={renderBlock}
      renderMark={renderMark}
      value={value}
    />
  )
}

export default MarkdownPreview
