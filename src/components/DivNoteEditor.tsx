import React, { FunctionComponent, useState } from 'react'
import { Note } from '../shared/firestore/types/note'
import InputBaseNoteText from './InputBaseNoteText'
import TextFieldTitle from './TextFieldTitle'

type Props = {
  inProgress: boolean
  note: Note
  onUpdateNote: (change: Change) => void
}

type Change = {
  text: string
  title: string
}

const DivNoteEditor: FunctionComponent<Props> = ({
  inProgress,
  note,
  onUpdateNote
}) => {
  const [title, setTitle] = useState(note.title)

  const [text, setText] = useState(note.text)

  const onClick = () => {
    onUpdateNote({ title, text })
  }

  return (
    <div>
      <button onClick={onClick}>{'update'}</button>
      <TextFieldTitle
        inProgress={inProgress}
        setTitle={setTitle}
        title={title}
      />
      <InputBaseNoteText
        inProgress={inProgress}
        setText={setText}
        text={text}
      />
    </div>
  )
}

export default DivNoteEditor
