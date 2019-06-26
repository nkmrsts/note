import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import firebase, { auth } from 'firebase/app'
import React, { Fragment, FunctionComponent } from 'react'
import RouteHome from './components/RouteHome'
import { useAuthLoading } from './firebase/useAuthLoading'
import { useAuthUser } from './firebase/useAuthUser'
import { createTheme } from './helpers/createTheme'

const App: FunctionComponent = () => {
  const [authUser] = useAuthUser()

  const [authLoading] = useAuthLoading()

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth().signInWithRedirect(provider)
  }

  const logout = () => {
    auth().signOut()
  }

  return (
    <StylesProvider>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        {authLoading && <button>{'loading...'}</button>}
        {!authLoading && (
          <Fragment>
            {authUser === null ? (
              <button onClick={login}>{'Google Login'}</button>
            ) : (
              <button onClick={logout}>{'Google Logout'}</button>
            )}
          </Fragment>
        )}
        <RouteHome />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
