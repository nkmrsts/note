import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Note } from '../firestore/types/note'
import { createMarkup } from '../helpers/createMarkup'

type Props = { note: Note }

const DivNotePreview: FunctionComponent<Props> = ({ note }) => {
  const classes = useStyles()
  return (
    <div>
      <Typography variant={'h4'}>{note.title}</Typography>
      <div
        className={classes.root}
        dangerouslySetInnerHTML={createMarkup(note.text)}
      />
    </div>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {
      width: '100%',
      height: '100%'
    }
  }
})

export default DivNotePreview
