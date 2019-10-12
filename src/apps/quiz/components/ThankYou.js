import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  paper: {
    width: 400,
    padding: '48px 40px 36px'
  },
  actions: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

const ThankYou = theme => (
  <Paper className={theme.classes.paper}>
    <Typography variant='title' gutterBottom>
      Răspunsurile tale au fost înregistrate.<br />Mult noroc!
    </Typography>
    <div className={theme.classes.actions}>
      <Button
        component={Link}
        to='/quiz/solve'
        variant='contained'
        color='primary'
      >
        Înapoi acasă
      </Button>
    </div>
  </Paper>
)

export default withStyles(styles)(ThankYou)
