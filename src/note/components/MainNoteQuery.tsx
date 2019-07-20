import React, { FunctionComponent, useEffect, useState } from 'react'
import { useAuthLoading } from '../../shared/firebase/useAuthLoading'
import { useAuthUser } from '../../shared/firebase/useAuthUser'
import { Note } from '../../shared/firestore/types/note'
import { watchNote } from '../../shared/firestore/watchNote'
import MainNote from './MainNote'
import MainNoteEditor from './MainNoteEditor'

type Props = { currentNoteId: string }

const MainNoteQuery: FunctionComponent<Props> = ({ currentNoteId }) => {
  const [authUser] = useAuthUser()

  const [authLoading] = useAuthLoading()

  const [note, setNote] = useState<Note | null>(null)

  const [loading, setLoading] = useState(true)

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

  if (authLoading) return null

  if (loading) return null

  if (!note) {
    return <div>{'Data Not Found'}</div>
  }

  if (authUser && authUser.uid === note.ownerId) {
    return <MainNoteEditor note={note} />
  }

  return <MainNote note={note} />
}

export default MainNoteQuery
