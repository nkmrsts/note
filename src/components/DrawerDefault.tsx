import { Drawer, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const DrawerDefault: FunctionComponent = ({ children }) => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.root}
      classes={{ paper: classes.paper }}
      open={true}
      variant={'permanent'}
    >
      {children}
    </Drawer>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    paper: { position: 'fixed', width: spacing(40) },
    root: { width: spacing(40) }
  }
})

export default DrawerDefault
