import { CssBaseline } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import RouteNote from './note/RouteNote'
import { createTheme } from './shared/helpers/createTheme'

const App: FunctionComponent = () => {
  return (
    <StylesProvider>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route component={RouteNote} exact path={'/'} />
            <Route component={RouteNote} path={'/:noteId'} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
