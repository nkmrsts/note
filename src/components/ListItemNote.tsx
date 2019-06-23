import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { FunctionComponent } from 'react'
import { Note } from '../types/note'

type Props = {
  note: Note
  onDeleteNote: () => void
  onUpdateNoteIndex: () => void
  selected: boolean
}

const ListItemNote: FunctionComponent<Props> = ({
  note,
  onDeleteNote,
  onUpdateNoteIndex,
  selected
}) => {
  return (
    <ListItem button divider onClick={onUpdateNoteIndex} selected={selected}>
      <ListItemText
        primary={note.title || '名称未設定'}
        secondary={note.updatedAt.toLocaleString()}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label={'Delete'} edge={'end'} onClick={onDeleteNote}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default ListItemNote
