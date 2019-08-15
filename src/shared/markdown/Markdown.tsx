import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Value } from 'slate'
import { Editor, OnChangeFn } from 'slate-react'
import { onKeyDown } from './helpers/onKeyDown'
import { renderBlock } from './helpers/renderBlock'
import { renderMark } from './helpers/renderMark'

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
      renderBlock={renderBlock}
      renderMark={renderMark}
      value={value}
    />
  )
}

export default Markdown
