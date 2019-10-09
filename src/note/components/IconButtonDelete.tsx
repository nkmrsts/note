import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteNote } from '../../firestore/deleteNote'

type Props = {
  disabled: boolean
  noteId: string
}

const IconButtonDelete: FunctionComponent<Props> = ({ disabled, noteId }) => {
  const history = useHistory()

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

export default IconButtonDelete
