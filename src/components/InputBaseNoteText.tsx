import { InputBase } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { Note } from '../firestore/types/note'

type Change = {
  text: string
  title: string
}

type Props = {
  inProgress: boolean
  note: Note
  onUpdateNote: (change: Change) => void
  handlePreviewHide: (boolean: boolean) => void
}

const InputBaseNoteText: FunctionComponent<Props> = ({
  inProgress,
  note,
  onUpdateNote,
  handlePreviewHide
}) => {
  const [text, setText] = useState(note.text)

  return (
    <div>
      <InputBase
        disabled={inProgress}
        value={text}
        onChange={e => setText(e.target.value)}
        fullWidth
        multiline
        autoFocus
        onBlur={() => {
          onUpdateNote({ text: text, title: note.title })
          handlePreviewHide(false)
        }}
      />
    </div>
  )
}
export default InputBaseNoteText
