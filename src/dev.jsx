import React, { PureComponent } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import ExpandedItem from './components/ListItemExpanded.jsx';

export default class DevSection extends PureComponent {
    state = {
        selected: 1,
    };

    render() {
        let {selected} = this.state;
        // TODO Change the color of this card to a complementary color
        return (
            <Paper className="section dev-section" elevation={5}>
                <Typography variant="title">The Developer</Typography>
                <div className="dev-split">
                    <div className="left-bar">
                        <List value={selected}>
                            <ListItem
                                button
                                selected={selected === 1}
                                onClick={() => this.setState({selected: 1})}
                            >
                                <ListItemText primary="Web"/>
                            </ListItem>
                            <ListItem
                                button
                                selected={selected === 2}
                                onClick={() => this.setState({selected: 2})}
                            >
                                <ListItemText primary="Embeded"/>
                            </ListItem>
                            <ListItem
                                button
                                selected={selected == 3}
                                onClick={() => this.setState({selected: 3})}
                            >
                                <ListItemText primary="Desktop"/>
                            </ListItem>
                        </List>
                    </div>
                    <ExpandedItem component={selected}/>
                </div>
            </Paper>
        );
    }
}
