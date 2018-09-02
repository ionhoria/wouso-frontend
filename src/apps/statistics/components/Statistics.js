import React from 'react'

import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const styles = theme => ({
  container: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 3,
    width: '70%'
  },
  root: {
    marginTop: theme.spacing.unit * 3
  }
})

const Statistics = ({ classes, statistics }) => (
  <div className={classes.container}>
    <Typography variant='title'>
      Endpoint Statistics
    </Typography>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Method</TableCell>
            <TableCell>Endpoint</TableCell>
            <TableCell numeric>Status Code</TableCell>
            <TableCell numeric>Hits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map(stat => (
            <TableRow key={stat.id}>
              <TableCell>{stat.method}</TableCell>
              <TableCell>
                {stat.endpoint}
              </TableCell>
              <TableCell numeric>{stat.statusCode}</TableCell>
              <TableCell numeric>{stat.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
)

export default withStyles(styles)(Statistics)
