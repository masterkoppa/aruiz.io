import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Header extends React.PureComponent {
    render() {
        return (
            <div className="header section">
                <Paper className="header-text" elevation={5}>
                    <Typography variant="display1" gutterBottom>
                        Andres J Ruiz Torres
                    </Typography>
                    <Typography variant="subheading">
                        Software Engineer, Photographer, Traveler
                    </Typography>
                </Paper>
            </div>
        )
    }
}
