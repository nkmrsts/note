import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Note } from '../../shared/firestore/types/note'
import { createMarkup } from '../../shared/helpers/createMarkup'

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
      <div
        className={classes.textArea}
        dangerouslySetInnerHTML={createMarkup(note.text)}
      />
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
    },
    textArea: {
      width: '100%',
      height: '100%',
      fontSize: '1rem',
      '& *:first-of-type': {
        marginTop: '0'
      }
    }
  }
})

export default DivNotePreview
