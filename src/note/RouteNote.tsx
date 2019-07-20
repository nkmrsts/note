import React, { FunctionComponent, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import DivCenter from '../shared/components/DivCenter'
import DivProgress from '../shared/components/DivProgress'
import TypographyNotFound from '../shared/components/TypographyNotFound'
import { useAuthUser } from '../shared/firebase/useAuthUser'
import { Note } from '../shared/firestore/types/note'
import { watchNote } from '../shared/firestore/watchNote'
import MainNote from './components/MainNote'
import MainNoteEditor from './components/MainNoteEditor'

type Props = RouteComponentProps<{ noteId: string }>

const RouteNote: FunctionComponent<Props> = ({
  history,
  match: {
    params: { noteId }
  }
}) => {
  const [authUser, authLoading] = useAuthUser()

  const [note, setNote] = useState<Note | null>(null)

  const [loading, setLoading] = useState(true)

  // watch note
  useEffect(() => {
    if (noteId === null) return
    const subscription = watchNote(noteId).subscribe(
      _note => {
        setNote(_note)
        setLoading(false)
      },
      () => {
        setLoading(false)
      }
    )
    return () => subscription.unsubscribe()
  }, [noteId])

  if (authLoading || loading)
    return (
      <DivCenter>
        <DivProgress />
      </DivCenter>
    )

  if (!note) {
    return (
      <DivCenter>
        <TypographyNotFound />
      </DivCenter>
    )
  }

  if (authUser && authUser.uid === note.ownerId) {
    return <MainNoteEditor key={note.id || '_'} note={note} />
  }

  return <MainNote key={note.id || '_'} note={note} />
}

export default RouteNote
