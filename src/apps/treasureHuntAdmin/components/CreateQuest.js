import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import {
  Button,
  List,
  Typography,
  Paper
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import WrappedTextField from 'shared/reduxForm/components/TextField'
import { required } from 'utils/validators'
import { withStyles } from '@material-ui/core'
import WrappedListItem from './WrappedListItem'

const styles = theme => ({
  paper: {
    width: 800,
    padding: '48px 40px 36px'
  },
  actions: {
    paddingTop: 3 * theme.spacing.unit,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginLeft: '10px'
  }
})

class CreateQuiz extends React.Component {
  state = {
    query: ''
  }

  handleQuery (event) {
    this.setState({ query: event.target.value.toLowerCase() })
  }

  renderField (question) {
    return (
      <Field
        key={question.id}
        name={`question${question.id}`}
        component={WrappedListItem}
        question={question}
        type='checkbox'
      />
    )
  }

  render () {
    const { classes, handleSubmit, onSubmit, noQuestions } = this.props
    return (
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='title'>Creează un quest nou</Typography>
          <Typography variant='subheading'>
            Alege 10 intrebări din lista de mai jos. Poți folosi mecanismul de filtrare.
          </Typography>

          <Field
            name='name'
            component={WrappedTextField}
            label='Nume quest'
            validate={required}
            style={{
              display: 'flex'
            }}
          />

          <TextField
            id='filterQuestions'
            label='Filtrează întrebările'
            placeholder='i.e. kernel'
            value={this.state.query}
            onChange={event => this.handleQuery(event)}
            style={{ display: 'flex' }}
          />

          <List>
            {this.state.query
              ? this.props.questions
                  .filter(q => q.text.toLowerCase().includes(this.state.query))
                  .map(question => this.renderField(question))
              : this.props.questions.map(question =>
                  this.renderField(question)
                )}
          </List>

          {/* <Button
          variant='contained'
          color='primary'
          component={Link}
          to={`/question/new`}
        >
          Add Question
        </Button> */}
          {/* <Button
          variant='contained'
          color='secondary'
          onClick={this.props.untickAll}
        >
          Uncheck all
        </Button> */}
          <div className={classes.actions}>
            <Button
              variant='contained'
              color='secondary'
              component={Link}
              to={'/treasurehuntadmin/dashboard'}
            >
              Anulare
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={noQuestions}
              className={classes.button}
            >
              Creează quest
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(CreateQuiz)
