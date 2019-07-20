import { createMuiTheme } from '@material-ui/core'
import { blueGrey, deepOrange } from '@material-ui/core/colors'

export const createTheme = () => {
  const { palette } = createMuiTheme()

  const elevation = { boxShadow: 'none' }

  return createMuiTheme({
    overrides: {
      MuiPaper: {
        elevation0: elevation,
        elevation1: elevation,
        elevation2: elevation
      },
      MuiIconButton: { root: { backgroundColor: palette.grey[200] } },
      MuiDrawer: { paperAnchorDockedLeft: { borderRight: 0 } }
    },
    palette: {
      background: { default: '#fff' },
      primary: blueGrey,
      secondary: deepOrange
    },
    props: {
      MuiButtonBase: { disableRipple: true },
      MuiList: { style: { padding: 0 } }
    },
    typography: { fontFamily: ['Noto Sans JP', 'Roboto'].join(',') }
  })
}

if (process.env.NODE_ENV === 'development') {
  window.theme = createTheme()
}
