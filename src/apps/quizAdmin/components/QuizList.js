import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import {
  List,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  ExpansionPanelActions
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '50%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  column: {
    flexBasis: '50%'
  }
})

const renderQuiz = ({ quiz, classes }) => {
  const { id, secret, name } = quiz
  const start = new Date(quiz.start).toLocaleString()
  const end = new Date(quiz.end).toLocaleString()

  return (
    <ExpansionPanel key={id}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{name}</Typography>
        <Typography className={classes.secondaryHeading}>
          {`"${secret}" // ToDo STATUS`}
        </Typography>

      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>
            Start: {start}
          </Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>
            End: {end}
          </Typography>
        </div>
      </ExpansionPanelDetails>
      <ExpansionPanelActions>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to={`/quizadmin/grade/${secret}`}
        >
          Grade
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

const QuizList = ({ classes, quizes }) => (
  <React.Fragment>
    <Typography variant='title' gutterBottom>
      Corectează quiz
    </Typography>
    <Typography variant='subheading' gutterBottom>
      Deschide un quiz din lista de mai jos pentru detalii
    </Typography>
    <List style={{ width: '50%' }}>
      {Object.values(quizes).map(quiz => renderQuiz({ quiz, classes }))}
    </List>
  </React.Fragment>
)

export default withStyles(styles)(QuizList)
