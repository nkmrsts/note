import { Theme, useMediaQuery, useTheme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import DivHello from './components/DivHello'
import MainNoteQuery from './components/MainNoteQuery'
import ListNotes from './components/ListNotes'

type Props = RouteComponentProps<{ noteId: string }>

const RouteNote: FunctionComponent<Props> = ({
  history,
  match: {
    params: { noteId }
  }
}) => {
  const { breakpoints } = useTheme<Theme>()

  const isDesktop = useMediaQuery(breakpoints.up('sm'))

  if (isDesktop) {
    return noteId ? (
      <MainNoteQuery key={noteId || '_'} currentNoteId={noteId} />
    ) : (
      <DivHello />
    )
  }

  return noteId ? (
    <MainNoteQuery key={noteId || '_'} currentNoteId={noteId} />
  ) : (
    <ListNotes noteId={noteId} />
  )
}

export default RouteNote
