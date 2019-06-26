import { List, ListItem, ListItemText } from '@material-ui/core'
import { auth } from 'firebase'
import React, { FunctionComponent } from 'react'
import { useAuthLoading } from '../firebase/useAuthLoading'
import { useAuthUser } from '../firebase/useAuthUser'

const ListRoutes: FunctionComponent = () => {
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
    <List>
      <ListItem button divider onClick={authUser ? logout : login}>
        {authLoading ? (
          <ListItemText
            primary={'ログイン処理中'}
            secondary={'この処理は数秒かかることがあります..'}
          />
        ) : (
          <ListItemText
            primary={authUser ? authUser.displayName : 'ログイン'}
            secondary={
              authUser
                ? 'タップしてログアウト'
                : 'Googleアカウントでログインする'
            }
          />
        )}
      </ListItem>
    </List>
  )
}

export default ListRoutes
