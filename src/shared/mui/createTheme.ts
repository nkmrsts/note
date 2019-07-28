import { createMuiTheme } from '@material-ui/core'
import { indigo, blueGrey, deepOrange, grey } from '@material-ui/core/colors'

export const createTheme = () => {
  const { spacing } = createMuiTheme()

  const elevation = { boxShadow: 'none' }

  return createMuiTheme({
    overrides: {
      MuiPaper: {
        elevation0: elevation,
        elevation1: elevation,
        elevation2: elevation
      },
      MuiIconButton: {
        root: {
          backgroundColor: grey[100],
          '&:hover': { backgroundColor: grey[200] }
        }
      },
      MuiDrawer: { paperAnchorDockedLeft: { borderRight: 0 } },
      MuiListItemIcon: { root: { minWidth: spacing(4) } }
    },
    palette: {
      background: { default: '#fff' },
      primary: indigo,
      secondary: deepOrange
    },
    props: {
      MuiButtonBase: { disableRipple: true },
      MuiList: { style: { padding: 0 } }
    },
    typography: {
      allVariants: { color: blueGrey[900] },
      fontFamily: ['Noto Sans JP', 'Roboto'].join(','),
      body1: { lineHeight: 1.7 }
    }
  })
}

if (process.env.NODE_ENV === 'development') {
  window.theme = createTheme()
}
