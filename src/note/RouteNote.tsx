import { Container, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import DivHello from './components/DivHello'
import DivNote from './components/DivNote'
import DrawerDefault from './components/DrawerDefault'
import ListNotes from './components/ListNotes'
import ListRoutes from './components/ListRoutes'
import ListSearch from './components/ListSearch'

type Props = RouteComponentProps<{ noteId: string }>

const RouteNote: FunctionComponent<Props> = ({
  history,
  match: {
    params: { noteId }
  }
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DrawerDefault>
        <ListRoutes />
        <ListSearch />
        <ListNotes noteId={noteId || null} />
      </DrawerDefault>
      <main className={classes.main}>
        <Container maxWidth={'lg'}>
          {noteId ? (
            <DivNote key={noteId || '_'} currentNoteId={noteId} />
          ) : (
            <DivHello />
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

export default RouteNote
