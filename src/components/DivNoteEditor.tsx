import { InputBase } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { Note } from '../firestore/types/note'
import { createMarkup } from '../helpers/createMarkup'

type Change = {
  text: string
  title: string
}

type Props = {
  inProgress: boolean
  note: Note
  onUpdateNote: (change: Change) => void
}

const DivNoteEditor: FunctionComponent<Props> = ({
  inProgress,
  note,
  onUpdateNote
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
        onBlur={() => {
          onUpdateNote({ text: text, title: note.title })
        }}
      />
      <div dangerouslySetInnerHTML={createMarkup(text)} />
    </div>
  )
}

export default DivNoteEditor
