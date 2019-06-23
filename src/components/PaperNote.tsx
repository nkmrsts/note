import { makeStyles, Paper, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../firestore/types/note'
import { UpdateNoteData } from '../firestore/types/updateNoteData'
import { updateNote } from '../firestore/updateNote'
import { watchNote } from '../firestore/watchNote'
import DivNoteEditor from './DivNoteEditor'
import TextFieldTitle from './TextFieldTitle'

type Props = { currentNoteId: string }

type Change = {
  text: string
  title: string
}

const PaperNote: FunctionComponent<Props> = ({ currentNoteId }) => {
  const [noteChange, setNoteChange] = useState<UpdateNoteData | null>(null)

  const [currentNote, setCurrentNote] = useState<Note | null>(null)

  const classes = useStyles()

  const onUpdateNote = ({ text, title }: Change) => {
    if (currentNote === null) return
    setNoteChange({
      noteId: currentNote.id,
      text: text || currentNote.text,
      title: title || currentNote.title
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
      setCurrentNote(_note)
    })
    return () => subscription.unsubscribe()
  }, [currentNoteId])

  return (
    <Paper className={classes.root}>
      {currentNote && (
        <TextFieldTitle
          inProgress={noteChange !== null}
          note={currentNote}
          onUpdateNote={onUpdateNote}
        />
      )}
      {currentNote && (
        <DivNoteEditor
          inProgress={noteChange !== null}
          note={currentNote}
          onUpdateNote={onUpdateNote}
        />
      )}
    </Paper>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content',
      gridGap: spacing(2),
      padding: spacing(2)
    }
  }
})

export default PaperNote
