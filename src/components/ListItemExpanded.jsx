import React from 'react';
import Paper from '@material-ui/core/Paper';
import Image from './ImageWithLB.jsx';

import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';


const readMarkdown = (component) => {
    switch(component) {
        case 1:
            return {__html: `${require('../md_docs/web.md')}`};
        case 2:
            return {__html: `${require('../md_docs/embedded.md')}`};
        case 3:
            return {__html: `${require('../md_docs/desktop.md')}`};
    }
}

const additionalContent = ({component, muiTheme}) => {
    switch (component) {
        // Make this into a lightbox component
        case 3:
            return (
                <div className="image-row">
                    <Image muiTheme={muiTheme} imgSrc="/img/grit-main.png" height={100}/>
                    <Image muiTheme={muiTheme} imgSrc="/img/grit-radar.png" height={100}/>
                </div>
            );
        default:
            return null;
    }
}

const styles = (theme) => ({
    root: {
        // Make the Paper pane match the selected style, to fake a vertical tab bar look
        backgroundColor: theme.palette.action.selected
    },
});


const ListItemExpanded = (props) => {
    return (
        <Paper
            elevation={0}
            square={true}
            classes={{
                root: props.classes.root,
            }}
            className="list-item-expanded"
        >
            <Typography variant="body1" dangerouslySetInnerHTML={readMarkdown(props.component)}/>
            {additionalContent(props)}
        </Paper>
    );

};

export default withStyles(styles)(ListItemExpanded);
