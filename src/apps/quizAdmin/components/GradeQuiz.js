import React from 'react'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Switch from '@material-ui/core/Switch'
import Divider from '@material-ui/core/Divider'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: '100%',
    flexShrink: 0
  },
  paper: {
    width: 800,
    padding: '48px 40px 36px'
  },
  actions: {
    paddingTop: 3 * theme.spacing.unit,
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

class GradeQuiz extends React.Component {
  renderAnswer = answer => {
    const { userId: id, text, grade } = answer;
    const status = grade === null
      ? 'NOT GRADED'
      : grade === 10 ? 'CORRECT' : 'INCORRECT';
    return (
      <React.Fragment key={id}>
        <Divider />
        <ListItem button onClick={() => this.props.onClick(answer)}>
          <ListItemText primary={text} />
          <Typography variant='subheading'>{status}</Typography>
          <Switch checked={grade === 10} disabled={grade === -1} />
        </ListItem>
      </React.Fragment>
    )
  };

  renderQuestion = (question, answers) => {
    const { classes } = this.props;
    const { id, text } = question;
    return (
      <ExpansionPanel key={id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            {text}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List className={classes.root}>
            {answers
              ? Object.values(answers).map(this.renderAnswer)
              : 'Nu au fost înregistrate răspunsuri pentru această întrebare.'}
          </List>
        </ExpansionPanelDetails>Paper
      </ExpansionPanel>
    )
  };

  render = () => {
    const { classes, quiz, quizAnswers } = this.props;
    return (
      <div>
        <Typography variant='title' gutterBottom>
          {quiz.name}
        </Typography>
        <Typography variant='subheading' gutterBottom>
          "{quiz.secret}"
        </Typography>
        <List>
          {quiz.questions.map(question =>
            this.renderQuestion(question, quizAnswers[question.id])
          )}
        </List>
        <div className={classes.actions}>
          <Button
            variant='contained'
            color='primary'
            component={Link}
            to={'/quizadmin/grade'}
          >
            Finalizează corectarea
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(GradeQuiz)
