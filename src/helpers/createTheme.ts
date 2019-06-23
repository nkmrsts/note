import { createMuiTheme } from '@material-ui/core'

export const createTheme = () => {
  return createMuiTheme({
    typography: {
      fontFamily: ['Helvetica', 'sans-serif'].join(',')
    }
  })
}
