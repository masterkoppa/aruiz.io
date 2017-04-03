var React = require('react');
var {renderToString} = require("react-dom/server");
var App = require('./index.jsx').default;

// Poor man's server side render
console.log(renderToString(<App/>))
