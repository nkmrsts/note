import {
  CssBaseline,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import RouteListNote from './note/RouteListNote'
import RouteNote from './note/RouteNote'
import { createTheme } from './shared/helpers/createTheme'

const App: FunctionComponent = () => {
  const classes = useStyles()

  const theme = useTheme<Theme>()

  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <StylesProvider>
      <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <BrowserRouter>
          <div className={classes.root}>
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
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      display: 'grid',
      gridGap: spacing(2),
      gridTemplateColumns: 'auto 1fr',
      [breakpoints.down('xs')]: { gridTemplateColumns: '1fr' }
    },
    main: { display: 'grid', gridGap: spacing(2) }
  }
})

export default App
