import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import ImgLogo from './ImgLogo'

const DivHello: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <div className={classes.logo}>
        <ImgLogo />
        <Typography
          align={'center'}
          className={classes.title}
          component={'h1'}
          variant={'h4'}
        >
          {'Noat'}
        </Typography>
      </div>
    </main>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    title: { fontWeight: 'bold' },
    root: {
      alignItems: 'center',
      display: 'grid',
      height: '100vh',
      justifyContent: 'center'
    },
    logo: { display: 'grid', gridGap: spacing(2) }
  }
})

export default DivHello
