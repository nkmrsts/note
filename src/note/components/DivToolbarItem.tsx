import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { withRouter } from 'react-router'

const DivToolbarItem: FunctionComponent = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      borderRight: '1px solid rgba(0,0,0,0.12)',
      '&:first-child': { paddingLeft: spacing(0) }
    }
  }
})

export default withRouter(DivToolbarItem)
