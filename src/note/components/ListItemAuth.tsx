import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { auth } from 'firebase/app'
import React, { FunctionComponent } from 'react'
import { useAuthLoading } from '../../shared/firebase/useAuthLoading'
import { useAuthUser } from '../../shared/firebase/useAuthUser'

const ListItemAuth: FunctionComponent = () => {
  const classes = useStyles()

  const [authUser] = useAuthUser()

  const [authLoading] = useAuthLoading()

  const login = () => {
    const provider = new auth.GoogleAuthProvider()
    auth().signInWithRedirect(provider)
  }

  const logout = () => {
    auth().signOut()
  }

  return (
    <ListItem button divider onClick={authUser ? logout : login}>
      {authLoading ? (
        <ListItemText
          primary={'ログイン処理中'}
          secondary={'この処理は数秒かかることがあります..'}
        />
      ) : (
        <ListItemText
          primary={
            <Typography className={classes.root}>
              {authUser ? authUser.displayName : 'ログイン'}
            </Typography>
          }
          secondary={
            authUser ? 'タップしてログアウト' : 'Googleアカウントでログインする'
          }
        />
      )}
      {!authLoading && authUser && (
        <ListItemSecondaryAction>
          <IconButton aria-label={'Account'} edge={'end'}>
            <AccountCircle />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {
      fontWeight: 'bold',
      wordBreak: 'break-word'
    }
  }
})

export default ListItemAuth
