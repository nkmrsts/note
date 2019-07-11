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

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    paper: {
      position: 'fixed',
      width: spacing(40),
      boxShadow: '0px 9px 18px rgba(0, 0, 0, 0.18)'
    },
    root: { width: spacing(40) }
  }
})

export default DrawerDefault
