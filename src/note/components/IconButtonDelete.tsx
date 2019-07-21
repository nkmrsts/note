import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { deleteNote } from '../../shared/firestore/deleteNote'

type Props = RouteComponentProps & {
  disabled: boolean
  noteId: string
}

const IconButtonDelete: FunctionComponent<Props> = ({
  history,
  disabled,
  noteId
}) => {
  return (
    <IconButton
      disabled={disabled}
      onClick={() => {
        deleteNote(noteId).subscribe()
        history.push('/')
      }}
    >
      <DeleteIcon />
    </IconButton>
  )
}

export default withRouter(IconButtonDelete)
