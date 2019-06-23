import {
  InputBase,
  makeStyles,
  Paper,
  TextField,
  Theme
} from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../firestore/types/note'
import { UpdateNoteData } from '../firestore/types/updateNoteData'
import { updateNote } from '../firestore/updateNote'

type Props = { note: Note }

const PaperNote: FunctionComponent<Props> = ({ note }) => {
  const [title, setTitle] = useState(note.title)

  const [text, setText] = useState(note.text)

  const [noteChange, setNoteChange] = useState<UpdateNoteData | null>(null)

  const classes = useStyles()

  const inProgress = noteChange !== null

  const onBlur = () => {
    setNoteChange({ noteId: note.id, text: text, title: title })
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
    <Paper className={classes.root}>
      <TextField
        disabled={inProgress}
        value={title}
        onChange={e => setTitle(e.target.value)}
        fullWidth
        label={'タイトル'}
        multiline
        onBlur={onBlur}
      />
      <InputBase
        disabled={inProgress}
        value={text}
        onChange={e => setText(e.target.value)}
        fullWidth
        multiline
        onBlur={onBlur}
      />
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
