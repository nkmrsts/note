import {
  Container,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import DivHello from './components/DivHello'
import DivNote from './components/DivNote'
import ListNotes from './components/ListNotes'

type Props = RouteComponentProps<{ noteId: string }>

const RouteNote: FunctionComponent<Props> = ({
  history,
  match: {
    params: { noteId }
  }
}) => {
  const classes = useStyles()

  const theme = useTheme<Theme>()

  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  if (isDesktop) {
    return (
      <main className={classes.main}>
        <Container maxWidth={'lg'}>
          {noteId ? (
            <DivNote key={noteId || '_'} currentNoteId={noteId} />
          ) : (
            <DivHello />
          )}
        </Container>
      </main>
    )
  }

  return (
    <main className={classes.main}>
      {noteId ? (
        <DivNote key={noteId || '_'} currentNoteId={noteId} />
      ) : (
        <ListNotes noteId={noteId} />
      )}
    </main>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return { main: { display: 'grid', gridGap: spacing(2) } }
})

export default RouteNote
