import { Avatar, makeStyles, Theme, Typography } from '@material-ui/core'
import { User } from 'firebase'
import React, { FunctionComponent } from 'react'

type Props = { user: User }

const DivHello: FunctionComponent<Props> = ({ user }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <div className={classes.profile}>
        <div className={classes.avatarRoot}>
          <Avatar className={classes.avatar} src={user.photoURL || ''}></Avatar>
        </div>
        <Typography
          align={'center'}
          className={classes.title}
          component={'h1'}
          variant={'h4'}
        >
          {user.displayName}
        </Typography>
      </div>
    </main>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    avatar: { height: spacing(14), width: spacing(14) },
    avatarRoot: { display: 'grid', justifyContent: 'center' },
    profile: { display: 'grid', justifyContent: 'center', gridGap: spacing(4) },
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
