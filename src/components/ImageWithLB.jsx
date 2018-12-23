import React, { PureComponent } from 'react';

import Lightbox from './lightbox.jsx';

export default class Image extends PureComponent {
    state = {
        lightbox: false,
    }

    _onClick = () => {
        this.setState({ lightbox: true })
    }

    _onClose = () => {
        this.setState({ lightbox: false });
    }

    render() {
        let {
            imgSrc,
            height,
        } = this.props;

        if (this.state.lightbox) {
            return <Lightbox img={imgSrc} onClose={this._onClose} />
        }

        return (
            <img src={imgSrc} height={height} onClick={this._onClick} />
        );
    }
}
