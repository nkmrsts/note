import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React, { FunctionComponent, useState, useEffect } from 'react'
import RouteHome from './components/RouteHome'
import { createTheme } from './helpers/createTheme'
import firebase from 'firebase/app'

const App: FunctionComponent = () => {
  const [user, setUser] = useState<object | null>(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      setUser(user)
    })
  }, [])

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  const logout = () => {
    firebase.auth().signOut()
  }

  return (
    <StylesProvider>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <div>
          {!user ? (
            <button onClick={login}>Google Login</button>
          ) : (
            <button onClick={logout}>Google Logout</button>
          )}
        </div>
        <RouteHome />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
