import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Note } from '../../shared/firestore/types/note'
import DivNotePreviewContent from './DivNotePreviewContent'

type Props = {
  note: Note
}

const DivNotePreview: FunctionComponent<Props> = ({ note }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant={'h4'}>
        {note.title}
      </Typography>
      <DivNotePreviewContent text={note.text} />
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content auto',
      gridGap: spacing(2)
    },
    title: {
      padding: '8px 0 8px'
    }
  }
})

export default DivNotePreview
