import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useMemo,
} from 'react'
import { createEditor, Node } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import { renderBlock } from './components/renderBlock'
import { renderMark } from './components/renderMark'
import { onKeyDown } from './helpers/onKeyDown'
import { plugins } from './helpers/plugins'

type Props = {
  value: Node[]
  setValue: Dispatch<SetStateAction<Node[]>>
}

const Markdown: FunctionComponent<Props> = ({ value, setValue }) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <Slate
      editor={editor}
      onChange={(_value) => setValue(_value)}
      plugins={plugins}
      renderBlock={renderBlock}
      renderMark={renderMark}
      value={value}
    >
      <Editable onKeyDown={onKeyDown(editor)} />
    </Slate>
  )
}

export default Markdown
