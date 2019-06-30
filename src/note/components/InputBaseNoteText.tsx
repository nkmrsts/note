import { InputBase } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

type Props = {
  inProgress: boolean
  setText: (text: string) => void
  text: string
}

const InputBaseNoteText: FunctionComponent<Props> = ({
  inProgress,
  setText,
  text
}) => {
  return (
    <div>
      <InputBase
        autoFocus
        disabled={inProgress}
        fullWidth
        multiline
        onChange={e => setText(e.target.value)}
        value={text}
        placeholder={'テキスト'}
      />
    </div>
  )
}
export default InputBaseNoteText