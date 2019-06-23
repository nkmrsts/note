import { List, Paper } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../firestore/types/note'
import { watchNotes } from '../firestore/watchNotes'
import ListItemNote from './ListItemNote'
import ListItemNoteCreate from './ListItemNoteCreate'

type Props = {
  noteId: string | null
  onCreateNote: (noteId: string) => void
  onDeleteNote: (noteId: string) => void
  onUpdateNote: (noteId: string) => void
}

const PaperNotes: FunctionComponent<Props> = ({
  noteId,
  onCreateNote,
  onDeleteNote,
  onUpdateNote
}) => {
  const [, setLoading] = useState(true)

  const [notes, setNotes] = useState<Note[]>([])

  // watch notes
  useEffect(() => {
    const subscription = watchNotes().subscribe(_notes => {
      setNotes(_notes)
      setLoading(false)
    })
    return () => subscription.unsubscribe()
  }, [])

  return (
    <Paper>
      <List>
        <ListItemNoteCreate onCreateNote={onCreateNote} />
        {notes.map(note => (
          <ListItemNote
            key={note.id}
            note={note}
            onDeleteNote={() => onDeleteNote(note.id)}
            onUpdateNote={() => onUpdateNote(note.id)}
            selected={noteId === note.id}
          />
        ))}
      </List>
    </Paper>
  )
}

export default PaperNotes
