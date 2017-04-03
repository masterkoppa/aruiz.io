import React from 'react';
import {render} from 'react-dom';
import Lightbox from './lightbox.jsx';
import muiThemeable from 'material-ui/styles/muiThemeable';

function mount({muiTheme, imgSrc}) {
    render(<Lightbox muiTheme={muiTheme} imgSrc={imgSrc}/>, document.getElementById('modal'))
}

function Image({muiTheme, imgSrc, height}) {
    return (
        <img src={imgSrc} height={height} onClick={() => {
            mount({muiTheme, imgSrc});
    }}/>);
}

export default muiThemeable()(Image);
