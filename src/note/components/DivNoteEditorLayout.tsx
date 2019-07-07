import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const DivNoteEditorLayout: FunctionComponent = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content auto',
      gridGap: spacing(2)
    }
  }
})
export default DivNoteEditorLayout
