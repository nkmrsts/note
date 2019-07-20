import { CssBaseline, useMediaQuery } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import RouteListNote from './note/RouteListNote'
import RouteNote from './note/RouteNote'
import { createTheme } from './shared/helpers/createTheme'

const App: FunctionComponent = () => {
  const theme = createTheme()

  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          {isDesktop && (
            <Switch>
              <Route component={RouteListNote} exact path={'/'} />
              <Route component={RouteListNote} path={'/:noteId'} />
            </Switch>
          )}
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
