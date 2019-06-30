import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { FunctionComponent } from 'react'
import { deleteNote } from '../../shared/firestore/deleteNote'
import { Note } from '../../shared/firestore/types/note'

type Props = {
  note: Note
  onDeleteNote: () => void
  onUpdateNote: () => void
  selected: boolean
}

const ListItemNote: FunctionComponent<Props> = ({
  note,
  onDeleteNote,
  onUpdateNote,
  selected
}) => {
  return (
    <ListItem button divider onClick={onUpdateNote} selected={selected}>
      <ListItemText
        primary={note.title || '名称未設定'}
        secondary={note.updatedAt.toDate().toLocaleString()}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label={'Delete'}
          edge={'end'}
          onClick={() => {
            deleteNote(note.id).subscribe()
            onDeleteNote()
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default ListItemNote
