import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import dragscroll from 'dragscroll';

import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DevSection from './dev.jsx';
import {blueGrey500, lightGreen500} from 'material-ui/styles/colors'
import PhotoSection from './photographer.jsx';
import TravelSection from './travel.jsx';

let darkCustomTheme = {
    ...darkBaseTheme
};

export default class App extends React.Component {
    render() {
        /* TODO: Tie this theme color to a toggle */
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkCustomTheme)}>
                <div>
                    <Header/>
                    <DevSection/>
                    <PhotoSection/>
                    <TravelSection/>
                </div>
            </MuiThemeProvider>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    render(<App/>, document.getElementById('app'));
}, false);
