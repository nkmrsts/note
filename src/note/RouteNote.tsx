import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import DivCenter from '../shared/components/DivCenter'
import DivProgress from '../shared/components/DivProgress'
import FragmentHead from '../shared/components/FragmentHead'
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
      <Fragment>
        <FragmentHead title={'読み込み中..'} />
        <DivCenter>
          <DivProgress />
        </DivCenter>
      </Fragment>
    )

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
