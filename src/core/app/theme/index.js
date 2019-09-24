import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme()

export default createMuiTheme({
  palette: {
    primary: { main: '#0071BC' },
    secondary: { main: '#B26900' }
  },
  custom: {
    drawer: {
      width: 250
    },
    loadingProgress: {
      size: 200
    },
    footer: {
      height: 37
    },
    icon: {
      error: {
        size: 150
      }
    }
  },
  paper: {
    width: 400,
    padding: '48px 40px 36px',
    [theme.breakpoints.down('xs')]: {
      width: '85%',
      padding: '24px 18px'
    }
  },
  actions: {
    paddingTop: 3 * theme.spacing.unit,
    display: 'flex',
    justifyContent: 'flex-end'
  }
})
