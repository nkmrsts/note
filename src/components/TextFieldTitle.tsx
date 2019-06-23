import { TextField } from '@material-ui/core'
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
}

const TextFieldTitle: FunctionComponent<Props> = ({
  inProgress,
  note,
  onUpdateNote
}) => {
  const [title, setTitle] = useState(note.title)

  return (
    <TextField
      disabled={inProgress}
      value={title}
      onChange={e => setTitle(e.target.value)}
      fullWidth
      label={'タイトル'}
      multiline
      onBlur={() => {
        onUpdateNote({ text: note.text, title })
      }}
    />
  )
}

export default TextFieldTitle
