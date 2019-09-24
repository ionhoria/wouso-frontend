import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

const styles = theme => ({
  paper: theme.paper,
  actions: theme.actions
})

const Guide = ({ classes, quest }) => (
  <Paper className={classes.paper}>
    <Typography
      variant='h6'
      color='primary'
      dangerouslySetInnerHTML={{ __html: md.renderInline(quest.name) }}
    />
    <Divider className={classes.divider} />
    <Typography

      dangerouslySetInnerHTML={{ __html: md.render(quest.guide) }}
    />
    <div className={classes.actions}>
      <Button
        variant='contained'
        color='primary'
        component={Link}
        to={'/final'}
      >
        Rezolvă task-uri
      </Button>
    </div>
  </Paper>
)

export default withStyles(styles)(Guide)
