import { Avatar, CircularProgress, IconButton } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { useAuthLoading } from '../firebase/useAuthLoading'
import { useAuthUser } from '../firebase/useAuthUser'

type Props = RouteComponentProps & {
  noteId: string
  isMine: boolean
  setIsMine: (isMine: boolean) => void
}

const ButtonNoteFilter: FunctionComponent<Props> = ({
  match: { path },
  noteId = '',
  isMine,
  setIsMine
}) => {
  const [authUser] = useAuthUser()

  const [authLoading] = useAuthLoading()

  if (authLoading) {
    return (
      <IconButton>
        <CircularProgress size={24} />
      </IconButton>
    )
  }

  if (!authUser) {
    return (
      <IconButton>
        <PublicIcon />
      </IconButton>
    )
  }

  if (isMine) {
    return (
      <IconButton onClick={() => setIsMine(false)}>
        <PublicIcon />
      </IconButton>
    )
  }

  return (
    <IconButton onClick={() => setIsMine(true)}>
      <Avatar src={authUser.photoURL || ''} style={{ height: 24, width: 24 }} />
    </IconButton>
  )
}

export default withRouter(ButtonNoteFilter)
