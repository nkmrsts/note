import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const DivHeaderHello: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Typography className={classes.title} component={'h1'} variant={'h4'}>
        {'Noat'}
      </Typography>
    </main>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    title: { fontWeight: 'bold' },
    root: {
      alignItems: 'center',
      display: 'grid',
      height: spacing(10),
      padding: spacing(2)
    }
  }
})

export default DivHeaderHello
