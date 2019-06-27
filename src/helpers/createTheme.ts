import { createMuiTheme } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors'

export const createTheme = () => {
  return createMuiTheme({
    palette: {
      background: { default: '#fff' },
      primary: { main: deepPurple.A400 }
    },
    props: { MuiList: { style: { padding: 0 } } },
    typography: {
      fontFamily: ['Noto Sans JP', 'Roboto', 'Helvetica', 'sans-serif'].join(
        ','
      )
    }
  })
}
