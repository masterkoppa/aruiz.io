

// import dragscroll from 'dragscroll';

import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import DevSection from './dev.jsx';
// import {blueGrey500, lightGreen500} from 'material-ui/styles/colors'
// import PhotoSection from './photographer.jsx';
// import TravelSection from './travel.jsx';


const theme = createMuiTheme({
    palette: {
        type: "dark",
        // primary: {
        //     main: "#311b92",
        // },
        // secondary: {
        //     main: '#3d5afe',
        // },
    },
});

export default class App extends React.Component {
    render() {
        /* TODO: Tie this theme color to a toggle */
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <div>
                    <Header/>
                    {/* <DevSection/> */}
                    {/* <PhotoSection/> */}
                    {/* <TravelSection/> */}
                </div>
            </MuiThemeProvider>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    render(<App/>, document.getElementById('app'));
}, false);
