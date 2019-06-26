import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../firestore/types/note'
import { UpdateNoteData } from '../firestore/types/updateNoteData'
import { updateNote } from '../firestore/updateNote'
import InputBaseNoteText from './InputBaseNoteText'
import TextFieldTitle from './TextFieldTitle'

type Props = {
  note: Note
  previewHide: boolean
  setPreviewHide: (hide: boolean) => void
}

type Change = {
  text: string
  title: string
}

const DivNoteEditor: FunctionComponent<Props> = ({
  note,
  previewHide,
  setPreviewHide
}) => {
  const [noteChange, setNoteChange] = useState<UpdateNoteData | null>(null)

  const classes = useStyles()

  const onUpdateNote = ({ text, title }: Change) => {
    if (note === null) return
    setNoteChange({
      noteId: note.id,
      text: text || note.text,
      title: title || note.title
    })
  }

  // update note
  useEffect(() => {
    if (!noteChange) return
    const subscription = updateNote(noteChange).subscribe(() => {
      setNoteChange(null)
    })
    return () => subscription.unsubscribe()
  }, [noteChange])

  return (
    <div className={classes.root}>
      <TextFieldTitle
        inProgress={noteChange !== null}
        note={note}
        onUpdateNote={onUpdateNote}
      />
      <InputBaseNoteText
        inProgress={noteChange !== null}
        note={note}
        onUpdateNote={onUpdateNote}
        handlePreviewHide={setPreviewHide}
      />
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {}
  }
})

export default DivNoteEditor
