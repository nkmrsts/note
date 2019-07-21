import { makeStyles, Theme, Toolbar } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { withRouter } from 'react-router'

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
      minHeight: 'auto',
      padding: 0,
      paddingBottom: spacing(2),
      paddingTop: spacing(2)
    }
  }
})

export default withRouter(ToolbarNote)
