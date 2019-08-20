import React, { FunctionComponent } from 'react'
import { Value } from 'slate'
import { Editor } from 'slate-react'
import { plugins } from './helpers/plugins'
import { renderBlock } from './helpers/renderBlock'
import { renderMark } from './helpers/renderMark'

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
