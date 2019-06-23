import {
  InputBase,
  makeStyles,
  Paper,
  TextField,
  Theme
} from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { Note } from '../types/note'

type Props = {
  onUpdateNote: (note: Note) => void
  note: Note
}

const PaperNote: FunctionComponent<Props> = ({ onUpdateNote, note }) => {
  const [title, setTitle] = useState(note.title)

  const [text, setText] = useState(note.text)

  const classes = useStyles()

  const onBlur = () => {
    onUpdateNote({ ...note, title, text, updatedAt: new Date() })
  }

  return (
    <Paper className={classes.root}>
      <TextField
        value={title}
        onChange={e => setTitle(e.target.value)}
        fullWidth
        label={'タイトル'}
        multiline
        onBlur={onBlur}
      />
      <InputBase
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
