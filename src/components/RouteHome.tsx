import { Container, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useCallback, useState } from 'react'
import DivNote from './DivNote'
import DrawerDefault from './DrawerDefault'
import ListNotes from './ListNotes'
import ListRoutes from './ListRoutes'

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
    <div className={classes.root}>
      <DrawerDefault>
        <ListRoutes />
        <ListNotes
          noteId={currentNoteId}
          onCreateNote={onCreateNote}
          onDeleteNote={onDeleteNote}
          onUpdateNote={onUpdateNoteId}
        />
      </DrawerDefault>
      <main className={classes.main}>
        <Container maxWidth={'lg'}>
          {currentNoteId !== null && (
            <DivNote key={currentNoteId} currentNoteId={currentNoteId} />
          )}
        </Container>
      </main>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      display: 'grid',
      gridGap: spacing(2),
      gridTemplateColumns: 'auto 1fr',
      [breakpoints.down('xs')]: { gridTemplateColumns: '1fr' }
    },
    main: { display: 'grid', gridGap: spacing(2) }
  }
})

export default RouteHome
