import { ListItem, ListItemText } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { createNote } from '../firestore/createNote'

type Props = { onCreateNote: (noteId: string) => void }

const ListItemNoteCreate: FunctionComponent<Props> = ({ onCreateNote }) => {
  const [inProgress, setInProgress] = useState(false)

  // create note
  useEffect(() => {
    if (!inProgress) return
    const subscription = createNote({}).subscribe(next => {
      setInProgress(false)
      onCreateNote(next.noteId)
    })
    return () => subscription.unsubscribe()
  }, [inProgress, onCreateNote])

  return (
    <ListItem
      component={'li'}
      button
      divider
      onClick={() => setInProgress(true)}
    >
      <ListItemText
        primary={'新しいノート'}
        secondary={'新しいノートを作成します。'}
      />
    </ListItem>
  )
}

export default ListItemNoteCreate
