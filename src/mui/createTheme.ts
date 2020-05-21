import { createMuiTheme } from '@material-ui/core'
import { blueGrey, deepOrange, grey, indigo } from '@material-ui/core/colors'

export const createTheme = () => {
  const { spacing } = createMuiTheme()

  const elevation = { boxShadow: 'none' }

  return createMuiTheme({
    overrides: {
      MuiPaper: {
        elevation0: elevation,
        elevation1: elevation,
        elevation2: elevation,
      },
      MuiIconButton: {
        root: {
          backgroundColor: grey[100],
          '&:hover': { backgroundColor: grey[200] },
        },
      },
      MuiDrawer: { paperAnchorDockedLeft: { borderRight: 0 } },
      MuiListItemIcon: { root: { minWidth: spacing(4) } },
    },
    palette: {
      background: { default: '#fff' },
      primary: indigo,
      secondary: deepOrange,
    },
    props: {
      MuiButtonBase: { disableRipple: true },
      MuiList: { style: { padding: 0 } },
    },
    typography: {
      allVariants: { color: blueGrey[900] },
      fontFamily: ['Noto Sans JP', 'Roboto'].join(','),
      body1: { lineHeight: 1.7 },
      h1: { fontSize: '4rem' },
      h2: { fontSize: '3rem' },
      h3: { fontSize: '3rem' },
      h4: { fontSize: '2rem' },
      h5: { fontSize: '1.5rem' },
    },
  })
}

if (process.env.NODE_ENV === 'development') {
  window.theme = createTheme()
}
