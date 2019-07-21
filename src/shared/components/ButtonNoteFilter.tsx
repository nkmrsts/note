import { Avatar, CircularProgress, IconButton } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { useAuthUser } from '../firebase/useAuthUser'

type Props = RouteComponentProps & {
  noteId: string
  isMineState: [boolean, Dispatch<SetStateAction<boolean>>]
}

const ButtonNoteFilter: FunctionComponent<Props> = ({
  match: { path },
  noteId = '',
  isMineState: [isMine, setIsMine]
}) => {
  const [authUser, authLoading] = useAuthUser()

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
        <Avatar
          src={authUser.photoURL || ''}
          style={{ height: 24, width: 24 }}
        />
      </IconButton>
    )
  }

  return (
    <IconButton onClick={() => setIsMine(true)}>
      <PublicIcon />
    </IconButton>
  )
}

export default withRouter(ButtonNoteFilter)
