import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import TextField from 'shared/reduxForm/components/TextField'

import withStyles from '@material-ui/core/styles/withStyles'

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

const styles = theme => ({
  paper: theme.paper,
  actions: theme.actions,
  button: {
    marginLeft: '10px'
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: 2 * theme.spacing.unit
  }
})

const required = value =>
  !value ? 'Trebuie să introduci un răspuns' : undefined

const Answer = ({ classes, quest, handleSubmit, onSubmit, valid }) => {
  const { name, question, completed, questionIndex } = quest
  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline'
          }}
        >
          <Typography

            color='primary'
            dangerouslySetInnerHTML={{ __html: md.renderInline(name) }}
            style={{ flex: 1 }}
          />
          <Button color='secondary' component={Link} to={'/final/guide'}>
            Mașina virtuală
          </Button>
        </div>
        <Divider className={classes.divider} />
        {!completed && (
          <React.Fragment>
            <Typography>Task {questionIndex}:</Typography>
            <Typography
              variant='h6'
              dangerouslySetInnerHTML={{ __html: md.renderInline(question) }}
            />
            <Field
              component={TextField}
              name='answer'
              fullWidth
              margin='normal'
              placeholder='Răspuns'
              validate={required}
              autoFocus
            />
          </React.Fragment>
        )}
        {completed && (
          <Typography variant='h6'>
            Felicitări! Ai răspuns corect la toate întrebările din Grand Quest.
          </Typography>
        )}

        <div className={classes.actions}>
          {/* <Button
            variant='contained'
            color='secondary'
            component={Link}
            to={'/'}
          >
            Înapoi
          </Button> */}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={!valid || completed}
            className={classes.button}
          >
            Răspunde
          </Button>
        </div>
      </form>
    </Paper>
  )
}

export default withStyles(styles)(Answer)
