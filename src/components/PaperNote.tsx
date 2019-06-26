import { makeStyles, Paper, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../firestore/types/note'
import { UpdateNoteData } from '../firestore/types/updateNoteData'
import { updateNote } from '../firestore/updateNote'
import { watchNote } from '../firestore/watchNote'
import DivNotePreview from './DivNotePreview'
import InputBaseNoteText from './InputBaseNoteText'
import TextFieldTitle from './TextFieldTitle'

type Props = { currentNoteId: string }

type Change = {
  text: string
  title: string
}

const PaperNote: FunctionComponent<Props> = ({ currentNoteId }) => {
  const [noteChange, setNoteChange] = useState<UpdateNoteData | null>(null)

  const [note, setNote] = useState<Note | null>(null)

  const [previewHide, setPreviewHide] = useState(false)

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

  // watch note
  useEffect(() => {
    if (currentNoteId === null) return
    const subscription = watchNote(currentNoteId).subscribe(_note => {
      setNote(_note)
    })
    return () => subscription.unsubscribe()
  }, [currentNoteId])

  return (
    <Paper elevation={1} className={classes.root}>
      {note && (
        <TextFieldTitle
          inProgress={noteChange !== null}
          note={note}
          onUpdateNote={onUpdateNote}
        />
      )}
      {note && (
        <div>
          {previewHide ? (
            <InputBaseNoteText
              inProgress={noteChange !== null}
              note={note}
              onUpdateNote={onUpdateNote}
              handlePreviewHide={setPreviewHide}
            />
          ) : (
            <DivNotePreview note={note} handlePreviewHide={setPreviewHide} />
          )}
        </div>
      )}
    </Paper>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content auto',
      gridGap: spacing(2),
      padding: spacing(2)
    }
  }
})

export default PaperNote
