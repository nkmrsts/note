import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useAuthLoading } from '../../shared/firebase/useAuthLoading'
import { useAuthUser } from '../../shared/firebase/useAuthUser'
import { Note } from '../../shared/firestore/types/note'
import { watchNote } from '../../shared/firestore/watchNote'
import DivNoteEditor from './DivNoteEditor'
import DivNotePreview from './DivNotePreview'

type Props = { currentNoteId: string }

const DivNote: FunctionComponent<Props> = ({ currentNoteId }) => {
  const [authUser] = useAuthUser()

  const [authLoading] = useAuthLoading()

  const [note, setNote] = useState<Note | null>(null)

  const [loading, setLoading] = useState(true)

  const classes = useStyles()

  // watch note
  useEffect(() => {
    if (currentNoteId === null) return
    const subscription = watchNote(currentNoteId).subscribe(
      _note => {
        setNote(_note)
        setLoading(false)
        if (authUser && authUser.uid === _note.ownerId) {
          subscription.unsubscribe()
        }
      },
      () => {
        setLoading(false)
      }
    )
    return () => subscription.unsubscribe()
  }, [authUser, currentNoteId])

  if (authLoading) return null

  if (loading) return null

  if (!note) {
    return <div>{'Data Not Found'}</div>
  }

  const isMine = authUser && authUser.uid === note.ownerId

  if (!isMine) {
    return (
      <div className={classes.root}>
        <DivNotePreview note={note} />
      </div>
    )
  }

  return <DivNoteEditor note={note} />
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content auto',
      gridGap: spacing(4),
      paddingBottom: spacing(4),
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    }
  }
})

export default DivNote
