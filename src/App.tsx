import { CssBaseline, Hidden } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import RouteAccount from './account/RouteAccount'
import RouteAccountSide from './account/RouteAccountSide'
import RouteAccountUsericon from './account/RouteAccountUsericon'
import RouteAccountUsername from './account/RouteAccountUsername'
import RouteHello from './hello/RouteHello'
import { createTheme } from './mui/createTheme'
import RouteNote from './note/RouteNote'
import RouteNoteSide from './note/RouteNoteSide'
import RouteTerm from './term/RouteTerm'

const App: FunctionComponent = () => {
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Hidden xsDown>
          <Switch>
            <Route exact path={'/'}>
              <RouteNoteSide />
            </Route>
            <Route path={'/account'}>
              <RouteAccountSide />
            </Route>
            <Route path={'/:noteId'}>
              <RouteNoteSide />
            </Route>
          </Switch>
        </Hidden>
        <Switch>
          <Route exact path={'/'}>
            <RouteHello />
          </Route>
          <Route exact path={'/account'}>
            <RouteAccount />
          </Route>
          <Route path={'/account/username'}>
            <RouteAccountUsername />
          </Route>
          <Route path={'/account/usericon'}>
            <RouteAccountUsericon />
          </Route>
          <Route path={'/term'}>
            <RouteTerm />
          </Route>
          <Route path={'/:noteId'}>
            <RouteNote />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
