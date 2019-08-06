import { ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import TypographyDate from '../../shared/components/TypographyDate'
import { Note } from '../../shared/firestore/types/note'
import DivNoteStatus from './DivNoteState'

type Props = {
  note: Note
  onUpdateNote: () => void
  selected?: boolean
}

const ListItemNoteOwn: FunctionComponent<Props> = ({
  note,
  onUpdateNote,
  selected = false
}) => {
  const classes = useStyles()

  return (
    <ListItem button onClick={onUpdateNote} selected={selected}>
      <ListItemText
        className={classes.listItemText}
        primary={note.title || '新しいノート'}
        primaryTypographyProps={{ className: classes.primary }}
        secondaryTypographyProps={{ component: 'div' }}
        secondary={
          <div className={classes.secondary}>
            <DivNoteStatus note={note} />
            <TypographyDate timestamp={note.updatedAt} />
          </div>
        }
      />
    </ListItem>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    listItemText: { display: 'grid', gridGap: spacing(1) },
    primary: { fontWeight: 'bold' },
    secondary: {
      alignItems: 'center',
      display: 'grid',
      gridAutoColumns: 'max-content',
      gridAutoFlow: 'column',
      gridGap: spacing(1),
      justifyContent: 'space-between'
    }
  }
})

export default ListItemNoteOwn
