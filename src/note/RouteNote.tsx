import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthUser } from '../auth/useAuthUser'
import DivCenter from '../components/DivCenter'
import DivProgress from '../components/DivProgress'
import FragmentHead from '../components/FragmentHead'
import TypographyNotFound from '../components/TypographyNotFound'
import { Note } from '../firestore/types/note'
import { watchNote } from '../firestore/watchNote'
import MainNote from './components/MainNote'
import MainNoteEditor from './components/MainNoteEditor'

type Props = {}

const RouteNote: FunctionComponent<Props> = () => {
  const { noteId } = useParams<{ noteId: string }>()

  const [authUser, authLoading] = useAuthUser()

  const [note, setNote] = useState<Note | null>(null)

  const [loading, setLoading] = useState(true)

  // watch note
  useEffect(() => {
    if (noteId === null) return
    const subscription = watchNote(noteId).subscribe(
      (_note) => {
        setNote(_note)
        setLoading(false)
      },
      () => {
        setLoading(false)
      }
    )
    return () => subscription.unsubscribe()
  }, [noteId])

  if (authLoading || loading) {
    return (
      <Fragment>
        <FragmentHead title={'読み込み中..'} />
        <DivCenter>
          <DivProgress />
        </DivCenter>
      </Fragment>
    )
  }

  if (
    !note ||
    !(note.isPublic || note.ownerId === (authUser && authUser.uid))
  ) {
    return (
      <Fragment>
        <FragmentHead title={'エラー'} />
        <DivCenter>
          <TypographyNotFound />
        </DivCenter>
      </Fragment>
    )
  }

  if (authUser && authUser.uid === note.ownerId) {
    return (
      <Fragment>
        <FragmentHead title={note.title} />
        <MainNoteEditor key={note.id || '_'} note={note} />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <FragmentHead title={note.title} />
      <MainNote key={note.id || '_'} note={note} />
    </Fragment>
  )
}

export default RouteNote
