import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import DivColumnNote from '../../components/DivColumnNote'
import ToolbarNote from '../../components/ToolbarNote'
import { Note } from '../../firestore/types/note'
import { Editor } from '../../markdown/enums/editor'
import DivNotePreview from './DivNotePreview'

type Props = { note: Note }

const MainNote: FunctionComponent<Props> = ({ note }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <ToolbarNote />
      <DivColumnNote editable={false} preview={Editor.Preview}>
        <DivNotePreview note={note} value={note.value} />
      </DivColumnNote>
    </main>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      paddingBottom: spacing(4),
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    }
  }
})

export default MainNote
