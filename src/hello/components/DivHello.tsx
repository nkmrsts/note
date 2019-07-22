import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const DivHello: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Typography className={classes.title} component={'h1'} variant={'h4'}>
        {'Noat'}
      </Typography>
    </main>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    title: { fontWeight: 'bold' },
    root: {
      alignItems: 'center',
      display: 'grid',
      height: '100vh',
      justifyContent: 'center'
    }
  }
})

export default DivHello
