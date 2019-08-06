import { Avatar, makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const HeaderHello: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <Avatar
        className={classes.avatar}
        src={'/assets/images/noat.png'}
      ></Avatar>
      <Typography className={classes.title} component={'h1'} variant={'h4'}>
        {'Noat'}
      </Typography>
    </header>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    avatar: { height: spacing(6), width: spacing(6) },
    title: { fontWeight: 'bold' },
    root: {
      alignItems: 'center',
      display: 'grid',
      height: spacing(10),
      padding: spacing(2),
      gridGap: spacing(2),
      gridTemplateColumns: 'auto 1fr'
    }
  }
})

export default HeaderHello
