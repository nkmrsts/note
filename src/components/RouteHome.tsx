import { Container, makeStyles, Theme } from '@material-ui/core'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { Note } from '../firestore/types/note'
import { watchNote } from '../firestore/watchNote'
import PaperNote from './PaperNote'
import PaperNotes from './PaperNotes'

const RouteHome: FunctionComponent = () => {
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(null)

  const [currentNote, setCurrentNote] = useState<Note | null>(null)

  const classes = useStyles()

  const onCreateNote = useCallback((noteId: string) => {
    setCurrentNoteId(noteId)
  }, [])

  const onDeleteNote = useCallback(
    (noteId: string) => {
      setCurrentNoteId(null)
      if (currentNoteId === noteId) {
        setCurrentNote(null)
      }
    },
    [currentNoteId]
  )

  const onUpdateNoteId = useCallback((noteId: string | null) => {
    if (noteId === null) {
      setCurrentNote(null)
    }
    setCurrentNoteId(noteId)
  }, [])

  // watch note
  useEffect(() => {
    if (currentNoteId === null) return
    const subscription = watchNote(currentNoteId).subscribe(_note => {
      setCurrentNote(_note)
    })
    return () => subscription.unsubscribe()
  }, [currentNoteId])

  return (
    <Container className={classes.root} maxWidth={'lg'}>
      <header />
      <div className={classes.content}>
        <nav>
          <PaperNotes
            noteId={currentNoteId}
            onCreateNote={onCreateNote}
            onDeleteNote={onDeleteNote}
            onUpdateNote={onUpdateNoteId}
          />
        </nav>
        <main className={classes.main}>
          {currentNote && <PaperNote key={currentNote.id} note={currentNote} />}
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
