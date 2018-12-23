var webpack = require('webpack');
var path = require('path');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: {
        browser: APP_DIR + '/index.jsx',
        node: APP_DIR + '/static_generator.jsx',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.md$/,
            use: [{
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader"
                }
            ]
        }, {
            test: /\.(js|jsx)/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }]}
        ]
    },
    // plugins: [new BundleAnalyzerPlugin()],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
};

module.exports = config;