import React from 'react';
import {render} from 'react-dom';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styleSheet = createStyleSheet(theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    background: theme.palette.background.paper,
  },
}));

@withStyles(styleSheet)
export default class Menu extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const classes = this.props.classes;
        return (
            <List className={classes.root}>
                <ListItem button>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Drafts" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
            </List>
        )
    }
}