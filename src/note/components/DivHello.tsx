import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const DivHello: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Typography>{'Hello,world!'}</Typography>
    </main>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {
      alignItems: 'center',
      display: 'grid',
      height: '100vh',
      justifyContent: 'center'
    }
  }
})

export default DivHello
