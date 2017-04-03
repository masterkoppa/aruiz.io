import React from 'react';
import {render} from 'react-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {fade} from 'material-ui/utils/colorManipulator'
import Paper from 'material-ui/Paper';
import Image from './ImageWithLB.jsx';

const readMarkdown = (component) => {
    switch(component) {
        case 1:
            return {__html: `${require('../md_docs/web.md')}`};
        case 2:
            return {__html: `${require('../md_docs/embedded.md')}`};
        case 3:
            return {__html: `${require('../md_docs/desktop.md')}`};
        case 4:
            return {__html: "<h1>Mobile</h1>"};
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


const ListItemExpanded = (props) => {
    let itemStyle = {
        backgroundColor: fade(props.muiTheme.palette.textColor, 0.2)
    };

    return (
        <Paper
            zDepth={0}
            rounded={false}
            className="list-item-expanded"
            style={itemStyle}
        >
            <p dangerouslySetInnerHTML={readMarkdown(props.component)}></p>
            {additionalContent(props)}
        </Paper>
    );

};

export default muiThemeable()(ListItemExpanded);
