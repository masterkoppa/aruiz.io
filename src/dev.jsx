import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ExpandedItem from './components/ListItemExpanded.jsx';


const SelectableList = makeSelectable(List);

export default class DevSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1
        }
    }

    render() {
        let {selected} = this.state;
        // TODO Change the color of this card to a complementary color
        return (
            <Paper className="section dev-section" zDepth={5}>
                <h2>The Developer</h2>
                <div className="dev-split">
                    <div className="left-bar">
                        <SelectableList value={selected}>
                            <ListItem primaryText="Web" value={1} onClick={() => this.setState({selected: 1})}/>
                            <ListItem primaryText="Embeded" value={2} onClick={() => this.setState({selected: 2})}/>
                            <ListItem primaryText="Desktop" value={3} onClick={() => this.setState({selected: 3})}/>
                            <ListItem primaryText="Mobile" value={4} onClick={() => this.setState({selected: 4})}/>
                        </SelectableList>
                    </div>
                    <ExpandedItem component={selected}/>
                </div>
            </Paper>
        );
    }
}
