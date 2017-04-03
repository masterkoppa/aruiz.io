import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header section">
                <Paper className="header-text" zDepth={5}>
                    {/* <Avatar src="images/uxceo-128.jpg" /> */}
                    <h1>Andres J Ruiz Torres</h1>
                    <small>Software Engineer, Photographer, Traveler</small>
                </Paper>
            </div>
        )

    }
}
