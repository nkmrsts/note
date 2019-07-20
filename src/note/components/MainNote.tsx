import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { Note } from '../../shared/firestore/types/note'
import TypographyNote from './TypographyNote'

type Props = { note: Note }

const MainNote: FunctionComponent<Props> = ({ note }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <TypographyNote note={note} />
    </main>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content auto',
      gridGap: spacing(2),
      margin: '0 auto',
      maxWidth: breakpoints.values.sm,
      width: '100%'
    }
  }
})

export default MainNote
