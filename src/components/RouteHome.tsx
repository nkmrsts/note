import { Container, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { createNoteData } from '../helpers/createNoteData'
import { useStateCurrentNoteId } from '../hooks/useStateCurrentNoteId'
import { Note } from '../types/note'
import PaperNote from './PaperNote'
import PaperNotes from './PaperNotes'

const RouteHome: FunctionComponent = () => {
  const [notes, setNotes] = useState<Note[]>([createNoteData()])

  const [currentNoteId, setCurrentNoteId] = useStateCurrentNoteId(notes)

  const classes = useStyles()

  const currentNote =
    currentNoteId === null
      ? null
      : notes.find(note => note.id === currentNoteId)

  const onUpdateNote = (note: Note) => {
    if (currentNoteId === null) return
    const _notes = [...notes]
    const index = _notes.findIndex(_note => _note.id === note.id)
    _notes[index] = note
    setNotes(_notes)
  }

  const onCreateNote = () => {
    const newNote = createNoteData()
    setNotes([newNote, ...notes])
    setCurrentNoteId(newNote.id)
  }

  const onDeleteNote = (noteId: string) => {
    const _notes = [...notes]
    const index = _notes.findIndex(_note => _note.id === noteId)
    _notes.splice(index, 1)
    setNotes(_notes)
    if (currentNoteId === noteId) {
      setCurrentNoteId(null)
    }
  }

  const onUpdateNoteIndex = (noteId: string) => {
    if (currentNoteId === noteId) return
    setCurrentNoteId(noteId)
  }

  return (
    <Container className={classes.root} maxWidth={'lg'}>
      <header />
      <div className={classes.content}>
        <nav>
          <PaperNotes
            noteId={currentNoteId}
            notes={notes}
            onCreateNote={onCreateNote}
            onDeleteNote={onDeleteNote}
            onUpdateNoteIndex={onUpdateNoteIndex}
          />
        </nav>
        <main className={classes.main}>
          {currentNote && (
            <PaperNote
              key={currentNote.id}
              note={currentNote}
              onUpdateNote={onUpdateNote}
            />
          )}
        </main>
      </div>
    </Container>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    content: {
      display: 'grid',
      gridGap: spacing(2),
      gridTemplateColumns: '2fr 3fr',
      [breakpoints.down('xs')]: { gridTemplateColumns: '1fr' }
    },
    main: { display: 'grid', gridGap: spacing(2) },
    root: {
      display: 'grid',
      gridGap: spacing(2),
      padding: spacing(2)
    }
  }
})

export default RouteHome
