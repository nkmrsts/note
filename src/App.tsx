import { CssBaseline, Hidden } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import RouteAccount from './account/RouteAccount'
import RouteAccountSide from './account/RouteAccountSide'
import RouteAccountUsername from './account/RouteAccountUsername'
import RouteAccountUsericon from './account/RouteAccountUsericon'
import RouteHello from './hello/RouteHello'
import RouteNote from './note/RouteNote'
import RouteNoteSide from './note/RouteNoteSide'
import { createTheme } from './shared/mui/createTheme'
import RouteTerm from './term/RouteTerm'

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
              <Route component={RouteAccountSide} path={'/account'} />
              <Route component={RouteNoteSide} path={'/:noteId'} />
            </Switch>
          </Hidden>
          <Switch>
            <Route component={RouteHello} exact path={'/'} />
            <Route component={RouteAccount} exact path={'/account'} />
            <Route
              component={RouteAccountUsername}
              path={'/account/username'}
            />
            <Route
              component={RouteAccountUsericon}
              path={'/account/usericon'}
            />
            <Route component={RouteTerm} path={'/term'} />
            <Route component={RouteNote} path={'/:noteId'} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
