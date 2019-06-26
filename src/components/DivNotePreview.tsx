import React, { FunctionComponent } from 'react'
import { Note } from '../firestore/types/note'
import { createMarkup } from '../helpers/createMarkup'
import { makeStyles, Theme } from '@material-ui/core'

type Props = {
  note: Note
  handlePreviewHide: (boolean: boolean) => void
}

const DivNotePreview: FunctionComponent<Props> = ({
  note,
  handlePreviewHide
}) => {
  const classes = useStyles()
  return (
    <div
      className={classes.root}
      dangerouslySetInnerHTML={createMarkup(note.text)}
      onClick={() => handlePreviewHide(true)}
    />
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
