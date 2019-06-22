import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import RouteHome from './components/RouteHome'
import { createTheme } from './helpers/createTheme'

const App: FunctionComponent = () => {
  return (
    <StylesProvider>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <RouteHome />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
