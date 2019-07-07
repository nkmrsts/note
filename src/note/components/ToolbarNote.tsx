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
      padding: 0,
      minHeight: 'auto',
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
      borderBottom: '1px solid rgba(0,0,0,0.12)'
    }
  }
})

export default withRouter(ToolbarNote)
