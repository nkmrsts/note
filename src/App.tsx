import { CssBaseline, Hidden } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import RouteHello from './hello/RouteHello'
import RouteNote from './note/RouteNote'
import RouteNoteSide from './note/RouteNoteSide'
import { createTheme } from './shared/helpers/createTheme'

const App: FunctionComponent = () => {
  const theme = createTheme()

  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Hidden xsDown>
            <Switch>
              <Route component={RouteNoteSide} exact path={'/'} />
              <Route component={RouteNoteSide} path={'/:noteId'} />
            </Switch>
          </Hidden>
          <Switch>
            <Route component={RouteHello} exact path={'/'} />
            <Route component={RouteNote} path={'/:noteId'} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
