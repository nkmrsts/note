import { List, Paper } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Note } from '../types/note'
import ListItemNote from './ListItemNote'
import ListItemNoteCreate from './ListItemNoteCreate'

type Props = {
  noteId: string | null
  notes: Note[]
  onCreateNote: () => void
  onDeleteNote: (noteId: string) => void
  onUpdateNoteIndex: (noteId: string) => void
}

const PaperNotes: FunctionComponent<Props> = ({
  noteId,
  notes,
  onCreateNote,
  onDeleteNote,
  onUpdateNoteIndex
}) => {
  return (
    <Paper>
      <List>
        <ListItemNoteCreate onCreateNote={onCreateNote} />
        {notes.map(note => (
          <ListItemNote
            key={note.id}
            note={note}
            onDeleteNote={() => onDeleteNote(note.id)}
            onUpdateNoteIndex={() => onUpdateNoteIndex(note.id)}
            selected={noteId === note.id}
          />
        ))}
      </List>
    </Paper>
  )
}

export default PaperNotes
