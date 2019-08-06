import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import ToolbarNote from '../../shared/components/ToolbarNote'
import { Editor } from '../../shared/enums/editor'
import { Note } from '../../shared/firestore/types/note'
import DivColumnNote from '../../shared/components/DivColumnNote'
import TypographyNote from './TypographyNote'

type Props = { note: Note }

const MainNote: FunctionComponent<Props> = ({ note }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <ToolbarNote />
      <DivColumnNote editable={false} preview={Editor.Preview}>
        <TypographyNote note={note} />
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
