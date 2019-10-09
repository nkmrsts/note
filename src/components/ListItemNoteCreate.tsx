import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { createNote } from '../firestore/createNote'

type Props = { onCreateNote: (noteId: string) => void }

const ListItemNoteCreate: FunctionComponent<Props> = ({ onCreateNote }) => {
  const [inProgress, setInProgress] = useState(false)

  const classes = useStyles()

  // create new note
  useEffect(() => {
    if (!inProgress) return
    const subscription = createNote().subscribe(({ noteId }) => {
      setInProgress(false)
      onCreateNote(noteId)
    })
    return () => subscription.unsubscribe()
  }, [inProgress, onCreateNote])

  return (
    <ListItem
      button
      className={classes.root}
      component={'li'}
      onClick={() => setInProgress(true)}
    >
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={'新しいノート'} />
    </ListItem>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    root: { background: 'rgba(0, 0, 0, 0.04)', padding: spacing(2) }
  }
})

export default ListItemNoteCreate
