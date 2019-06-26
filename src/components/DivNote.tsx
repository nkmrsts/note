import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../firestore/types/note'
import { UpdateNoteData } from '../firestore/types/updateNoteData'
import { updateNote } from '../firestore/updateNote'
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

  const [loading, setLoading] = useState(true)

  const [previewHide, setPreviewHide] = useState(false)

  const [noteChange, setNoteChange] = useState<UpdateNoteData | null>(null)

  const classes = useStyles()

  // watch note
  useEffect(() => {
    if (currentNoteId === null) return
    const subscription = watchNote(currentNoteId).subscribe(
      _note => {
        setNote(_note)
        setLoading(false)
      },
      () => {
        setLoading(false)
      }
    )
    return () => subscription.unsubscribe()
  }, [currentNoteId])

  // update note
  useEffect(() => {
    if (!noteChange) return
    const subscription = updateNote(noteChange).subscribe(() => {
      setNoteChange(null)
    })
    return () => subscription.unsubscribe()
  }, [noteChange])

  if (loading) return null

  if (!note) {
    return <div>{'Data Not Found'}</div>
  }

  const onUpdateNote = ({ text, title }: Change) => {
    if (note === null) return
    setNoteChange({
      noteId: note.id,
      text: text || note.text,
      title: title || note.title
    })
  }

  const onClick = () => {
    setPreviewHide(!previewHide)
  }

  return (
    <div className={classes.root}>
      <div>
        <button onClick={onClick}>{previewHide ? 'preview' : 'edit'}</button>
      </div>
      {previewHide ? (
        <DivNoteEditor
          inProgress={noteChange !== null}
          note={note}
          onUpdateNote={onUpdateNote}
        />
      ) : (
        <DivNotePreview note={note} />
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
