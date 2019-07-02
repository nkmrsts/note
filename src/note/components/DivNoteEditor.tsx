import React, { FunctionComponent, useState } from 'react'
import { useAuthUser } from '../../shared/firebase/useAuthUser'
import { Note } from '../../shared/firestore/types/note'
import InputBaseNoteText from './InputBaseNoteText'
import TextFieldTitle from './TextFieldTitle'
import DivNoteToolbar from './DivNoteToolbar'

type Props = {
  inProgress: boolean
  note: Note
  onUpdateNote: (change: Change) => void
  previewHide: boolean
  setPreviewHide: (previewHide: boolean) => void
}

type Change = {
  text: string
  title: string
}

const DivNoteEditor: FunctionComponent<Props> = ({
  inProgress,
  note,
  onUpdateNote,
  previewHide,
  setPreviewHide
}) => {
  const [authUser] = useAuthUser()

  const [title, setTitle] = useState(note.title)

  const [text, setText] = useState(note.text)

  const onClick = () => {
    onUpdateNote({ title, text })
  }

  const isMine = authUser && authUser.uid === note.ownerId

  return (
    <div>
      <TextFieldTitle
        inProgress={inProgress}
        setTitle={setTitle}
        title={title}
      />
      <DivNoteToolbar
        isMine={isMine}
        previewHide={previewHide}
        setPreviewHide={setPreviewHide}
        onUpdateNote={onClick}
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
