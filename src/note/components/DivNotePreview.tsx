import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Note } from '../../shared/firestore/types/note'
import { createMarkup } from '../../shared/helpers/createMarkup'
import DivNoteToolbar from './DivNoteToolbar'

type Props = {
  note: Note
  setPreviewHide: (previewHide: boolean) => void
}

const DivNotePreview: FunctionComponent<Props> = ({ note, setPreviewHide }) => {
  const classes = useStyles()
  return (
    <div>
      <Typography variant={'h4'}>{note.title}</Typography>
      <DivNoteToolbar setPreviewHide={setPreviewHide} />
      <div
        className={classes.root}
        dangerouslySetInnerHTML={createMarkup(note.text)}
      />
    </div>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: { width: '100%', height: '100%' }
  }
})

export default DivNotePreview
