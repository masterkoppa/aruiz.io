import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {fade} from 'material-ui/utils/colorManipulator'


const Lightbox = ({muiTheme, imgSrc}) => {

    let scrimStyle = {
        backgroundColor: muiTheme.palette.secondaryTextColor
    };

    return (
        <div className="lightbox" style={scrimStyle} onClick={() => {
            unmountComponentAtNode(document.getElementById('modal'));
        }}>
            <img src={imgSrc} />
        </div>
    )
};


export default Lightbox;
