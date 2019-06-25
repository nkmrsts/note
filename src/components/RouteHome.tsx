import { Container, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useCallback, useState } from 'react'
import PaperNote from './PaperNote'
import PaperNotes from './PaperNotes'

const RouteHome: FunctionComponent = () => {
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(null)

  const classes = useStyles()

  const onCreateNote = useCallback((noteId: string) => {
    setCurrentNoteId(noteId)
  }, [])

  const onDeleteNote = useCallback((noteId: string) => {
    setCurrentNoteId(null)
  }, [])

  const onUpdateNoteId = useCallback((noteId: string | null) => {
    setCurrentNoteId(noteId)
  }, [])

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
          {currentNoteId !== null && (
            <PaperNote key={currentNoteId} currentNoteId={currentNoteId} />
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
