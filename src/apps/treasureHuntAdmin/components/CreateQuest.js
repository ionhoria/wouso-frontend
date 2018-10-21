import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { Field, FieldArray } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import WrappedTextField from 'shared/reduxForm/components/TextField'
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
  },
  textCenter: {
      textAlign: 'center'
  },
  flexRow: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 -5px',
  },
});

class CreateQuest extends React.Component {
  state = {
    query: ''
  };

  handleQuery (event) {
    this.setState({ query: event.target.value.toLowerCase() })
  }

  renderField = (question, fields) => {
    const { id, text, answers } = question;
    return (
      <ListItem
        key={id}
        button
        onClick={() => {
          if (!fields.getAll() || !fields.getAll().some(e => e.id === id)) {
            fields.push({ id, text })
          }
        }}
      >
        <ListItemText
          primary={text}
          secondary={`corect: ${answers.valid}; greșit: ${answers.invalid}`}
        />
      </ListItem>
    )
  };

  renderSelected = (question, fields, index) => {
    const { id, text } = fields.get(index);
    return (
      <ListItem key={id} button onClick={() => fields.remove(index)}>
        <ListItemText primary={`${index + 1}. ${text}`} />
      </ListItem>
    )
  };

  renderFieldArray = ({ fields }) => (
    <React.Fragment>
      <div className={this.props.classes.flexRow}>
        <Grid xs={8}>
          <List style={{ maxHeight: 370, overflow: 'auto' }}>
            {this.state.query
              ? this.props.questions
                  .filter(q => q.text.toLowerCase().includes(this.state.query))
                  .map(question => this.renderField(question, fields))
              : this.props.questions.map(question =>
                  this.renderField(question, fields)
                )}
          </List>
        </Grid>
        <Grid xs={4}>
          <Typography
            variant='subheading'
            className={this.props.classes.textCenter}
            color='primary'
          >
            {fields.length} / 10
          </Typography>
          <Typography variant='subheading' className={this.props.classes.textCenter}>
            Întrebări selectate (afișate jucătorului în această ordine):
          </Typography>
          <List dense style={{ maxHeight: 306, overflow: 'auto' }}>
            {fields.map((question, index) =>
              this.renderSelected(question, fields, index)
            )}
          </List>

        </Grid>
      </div>
      <div className={this.props.classes.actions}>
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
          disabled={fields.length !== 10}
          className={this.props.classes.button}
        >
          {fields.length === 10 ? 'Creează quest' : 'Alege 10 întrebări'}
        </Button>
      </div>
    </React.Fragment>
  );

  validateFieldArray = (value, allValues, props) => {
    return !value || value.length !== 10
      ? 'Un quest trebuie sa aibă fix 10 întrebări!'
      : undefined
  };

  render () {
    const { classes, handleSubmit, onSubmit } = this.props;
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
            fullWidth={true}
          />
          <TextField
            id='filterQuestions'
            label='Filtrează întrebările'
            placeholder='i.e. kernel'
            value={this.state.query}
            onChange={event => this.handleQuery(event)}
            fullWidth={true}
          />
          <FieldArray
            name='questions'
            component={this.renderFieldArray.bind(this)}
            validate={this.validateFieldArray}
          />
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(CreateQuest)
