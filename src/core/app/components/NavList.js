import React from 'react'

import { withStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Collapse } from '@material-ui/core'

const styles = theme => ({})

class NavList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      expanded: !!props.expanded
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.expanded !== prevProps.expanded) {
      this.setState({ expanded: !!this.props.expanded })
    }
  }

  handleExpand = () => this.setState({ expanded: !this.state.expanded })

  handleNavigate = () => this.props.onNavigate(this.props.path)

  render () {
    const { title, sub, theme, onNavigate } = this.props
    const paddingUnit = 2 * theme.spacing.unit
    const { padding = paddingUnit } = this.props
    const { expanded } = this.state

    const canNavigate = !sub || sub.length === 0
    const expand = !canNavigate && (expanded ? <ExpandLess /> : <ExpandMore />)

    return (
      <List component='nav'>
        <ListItem
          component={'div'}
          button
          onClick={canNavigate ? this.handleNavigate : this.handleExpand}
          disableGutters
        >
          <ListItemText
            style={{ paddingLeft: padding }}
            inset
            primary={title}
            primaryTypographyProps={{
              color: this.state.expanded ? 'primary' : 'default'
            }}
          />
          {expand}
        </ListItem>
        <Collapse in={this.state.expanded} timeout='auto'>
          {sub &&
            sub.map(nav => (
              <NavList
                key={nav.title}
                theme={theme}
                padding={padding + paddingUnit}
                onNavigate={onNavigate}
                {...nav}
              />
            ))}
        </Collapse>
      </List>
    )
  }
}

export default withStyles(styles, { withTheme: true })(NavList)
