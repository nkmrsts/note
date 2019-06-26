import { Container, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import DivHello from './DivHello'
import DivNote from './DivNote'
import DrawerDefault from './DrawerDefault'
import ListNotes from './ListNotes'
import ListRoutes from './ListRoutes'

type Props = RouteComponentProps<{ noteId: string }>

const RouteHome: FunctionComponent<Props> = ({
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

export default RouteHome
