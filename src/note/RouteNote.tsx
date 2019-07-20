import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import MainNoteQuery from './components/MainNoteQuery'

type Props = RouteComponentProps<{ noteId: string }>

const RouteNote: FunctionComponent<Props> = ({
  history,
  match: {
    params: { noteId }
  }
}) => {
  return <MainNoteQuery key={noteId || '_'} currentNoteId={noteId} />
}

export default RouteNote
