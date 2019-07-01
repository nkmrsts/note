import { ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import DivOwner from '../../shared/components/DivOwner'
import TypographyDate from '../../shared/components/TypographyDate'
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
  const classes = useStyles()

  return (
    <ListItem button divider onClick={onUpdateNote} selected={selected}>
      <ListItemText
        className={classes.listItemText}
        primary={note.title || '新しいノート'}
        secondaryTypographyProps={{ component: 'div' }}
        secondary={
          <div className={classes.secondary}>
            <DivOwner owner={note.owner} />
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

export default ListItemNote
