import React, { PureComponent } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';

import {
    MuiThemeProvider,
    createMuiTheme,
    createGenerateClassName,
} from '@material-ui/core/styles'

import { render } from 'react-dom';

import Header from './header.jsx';
import DevSection from './dev.jsx';
import PhotoSection from './photographer.jsx';
import TravelSection from './travel.jsx';


const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#311b92",
        },
        secondary: {
            main: '#3d5afe',
        },
    },
});

// Create a new class name generator.
const generateClassName = createGenerateClassName();

export default class App extends PureComponent {
    render() {
        let { sheetsManager } = this.props;
        /* TODO: Tie this theme color to a toggle */
        return (
            <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                <CssBaseline/>
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

function mount() {
    render(
        <JssProvider generateClassName={generateClassName}><App/></JssProvider>, document.getElementById('app')
    );
}

if (typeof window !== 'undefined') {
    if (document.readyState === "loading") {  // Loading hasn't finished yet
        document.addEventListener("DOMContentLoaded", mount);
    } else {  // `DOMContentLoaded` has already fired
        mount();
    }
}
