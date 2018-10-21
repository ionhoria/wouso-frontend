import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { Field } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import WrappedDatePicker from './WrappedDatePicker'
import { required } from 'utils/validators'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    width: 800,
    height: 600,
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
});

class Schedule extends React.Component {
  state = {
    query: ''
  };

  handleQuery (event) {
    this.setState({ query: event.target.value.toLowerCase() })
  }

  renderField = (question, input) => {
    const { id, text, answers } = question;
    return (
      <ListItem key={id} button onClick={() => input.onChange({ id, text })}>
        <ListItemText
          primary={text}
          secondary={`corect: ${answers.valid}; greșit: ${answers.invalid}`}
        />
      </ListItem>
    )
  };

  renderSelect = ({ input, meta: { touched, error } }) => (
    <React.Fragment>
      <List style={{ maxHeight: 350, overflow: 'auto' }}>
        {this.state.query
          ? this.props.questions
              .filter(q => q.text.toLowerCase().includes(this.state.query))
              .map(question => this.renderField(question, input))
          : this.props.questions.map(question =>
              this.renderField(question, input)
            )}
      </List>
      <Divider />
      <Typography
        variant='title'
        style={{ paddingTop: '10px' }}
        color={touched && error ? 'secondary' : 'primary'}
      >
        QoTD: {input.value.text}
      </Typography>
    </React.Fragment>
  );

  render () {
    const { classes, handleSubmit, onSubmit } = this.props;
    return (
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='title'>Programează întrebarea zilei</Typography>
          <Typography variant='subheading'>
            Alege 10 intrebări din lista de mai jos. Poți folosi mecanismul de filtrare.
          </Typography>

          <Field
            name='day'
            component={WrappedDatePicker}
            label='Ziua'
            fullWidth={true}
            validate={required}
          />
          <TextField
            id='filterQuestions'
            label='Filtrează întrebările'
            placeholder='i.e. kernel'
            value={this.state.query}
            onChange={event => this.handleQuery(event)}
            fullWidth={true}
          />
          <Field
            name='qotd'
            component={this.renderSelect.bind(this)}
            validate={required}
          />
          <div className={this.props.classes.actions}>
            <Button
              variant='contained'
              color='secondary'
              component={Link}
              to={'/qotdadmin'}
            >
              Anulare
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={this.props.classes.button}
            >
              Programează
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(Schedule)
