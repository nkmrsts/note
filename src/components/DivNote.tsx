import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../firestore/types/note'
import { watchNote } from '../firestore/watchNote'
import DivNoteEditor from './DivNoteEditor'
import DivNotePreview from './DivNotePreview'

type Props = { currentNoteId: string }

type Change = {
  text: string
  title: string
}

const DivNote: FunctionComponent<Props> = ({ currentNoteId }) => {
  const [note, setNote] = useState<Note | null>(null)

  const [previewHide, setPreviewHide] = useState(false)

  const classes = useStyles()

  // watch note
  useEffect(() => {
    if (currentNoteId === null) return
    const subscription = watchNote(currentNoteId).subscribe(_note => {
      setNote(_note)
    })
    return () => subscription.unsubscribe()
  }, [currentNoteId])

  if (!note) {
    return null
  }

  return (
    <div className={classes.root}>
      {previewHide ? (
        <DivNoteEditor
          note={note}
          previewHide={previewHide}
          setPreviewHide={setPreviewHide}
        />
      ) : (
        <DivNotePreview note={note} handlePreviewHide={setPreviewHide} />
      )}
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content auto',
      gridGap: spacing(2),
      paddingBottom: spacing(4),
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      paddingTop: spacing(8)
    }
  }
})

export default DivNote
