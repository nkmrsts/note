import React, { FunctionComponent, useMemo } from 'react'
import { createEditor, Node } from 'slate'
import { Slate, withReact, Editable } from 'slate-react'
import { renderBlock } from './components/renderBlock'
import { renderMark } from './components/renderMark'
import { plugins } from './helpers/plugins'

type Props = { value: Node[] }

const MarkdownPreview: FunctionComponent<Props> = ({ value }) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <Slate
      editor={editor}
      plugins={plugins}
      readOnly
      renderBlock={renderBlock}
      renderMark={renderMark}
      value={value}
      onChange={() => null}
    >
      <Editable />
    </Slate>
  )
}

export default MarkdownPreview
