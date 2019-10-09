import { makeStyles, Theme, Toolbar } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const ToolbarNote: FunctionComponent = ({ children }) => {
  const classes = useStyles()

  return <Toolbar className={classes.root}>{children}</Toolbar>
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoColumns: 'min-content',
      gridAutoFlow: 'column',
      gridGap: spacing(2),
      justifyContent: 'flex-end',
      minHeight: 80,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: spacing(2),
      paddingTop: spacing(2)
    }
  }
})

export default ToolbarNote
