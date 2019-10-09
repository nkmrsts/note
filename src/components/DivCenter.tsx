import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const DivCenter: FunctionComponent = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      alignItems: 'center',
      display: 'grid',
      height: '100vh',
      justifyContent: 'center',
      padding: spacing(2)
    }
  }
})

export default DivCenter
