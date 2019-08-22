import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Value } from 'slate'
import { Editor, OnChangeFn } from 'slate-react'
import { renderBlock } from './components/renderBlock'
import { renderMark } from './components/renderMark'
import { onKeyDown } from './helpers/onKeyDown'
import { plugins } from './helpers/plugins'

type Props = {
  value: Value
  setValue: Dispatch<SetStateAction<Value>>
}

const Markdown: FunctionComponent<Props> = ({ value, setValue }) => {
  const onChange: OnChangeFn = change => {
    setValue(change.value)
  }

  return (
    <Editor
      onChange={onChange}
      onKeyDown={onKeyDown}
      plugins={plugins}
      renderBlock={renderBlock}
      renderMark={renderMark}
      value={value}
    />
  )
}

export default Markdown
