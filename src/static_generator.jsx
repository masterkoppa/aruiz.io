import React from 'react';
import {renderToString} from "react-dom/server";
import App  from './index.jsx'

import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';

import {
    MuiThemeProvider,
    createMuiTheme,
    createGenerateClassName,
  } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();

// Create a sheetsRegistry instance.
const sheetsRegistry = new SheetsRegistry();

// Create a sheetsManager instance.
const sheetsManager = new Map();

// Poor man's server side render
console.log(renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <App sheetsManager={sheetsManager}/>
    </JssProvider>
));

console.log(`<style id="jss-server-side" type="text/css">${sheetsRegistry.toString()}</style>`);