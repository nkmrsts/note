import { Drawer, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const DrawerDefault: FunctionComponent = ({ children }) => {
  const classes = useStyles()

  return (
    <Drawer
      classes={{ paper: classes.paper }}
      className={classes.root}
      open={true}
      variant={'permanent'}
    >
      {children}
    </Drawer>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    paper: {
      position: 'fixed',
      width: spacing(40),
      background: palette.grey[50]
    },
    root: { width: spacing(40) }
  }
})

export default DrawerDefault
