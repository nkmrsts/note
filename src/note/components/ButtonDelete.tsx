import { Button, makeStyles, Theme } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { FunctionComponent } from 'react'
import { deleteNote } from '../../shared/firestore/deleteNote'

type Props = {
  noteId: string
}

const ButtonDelete: FunctionComponent<Props> = ({ noteId }) => {
  const classes = useStyles()

  return (
    <Button
      onClick={() => {
        deleteNote(noteId).subscribe()
      }}
      className={classes.button}
    >
      <DeleteIcon />
    </Button>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    button: {
      minWidth: 'unset',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: 0,
      color: '#727272',
      borderRadius: 0
    }
  }
})

export default ButtonDelete
