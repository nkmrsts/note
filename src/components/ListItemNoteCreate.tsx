import { ListItem, ListItemText } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

type Props = { onCreateNote: () => void }

const ListItemNoteCreate: FunctionComponent<Props> = ({ onCreateNote }) => {
  return (
    <ListItem button divider onClick={onCreateNote}>
      <ListItemText
        primary={'新しいノート'}
        secondary={'新しいノートを作成します。'}
      />
    </ListItem>
  )
}

export default ListItemNoteCreate
