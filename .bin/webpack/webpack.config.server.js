// @flow
const path = require('path')
const webpack = require('webpack')

const conf = require('../../webapp/conf/conf')

const src = path.resolve(__dirname, '../../')
const dst = path.resolve(__dirname, '../../build')

module.exports = {
    context: `${src}`,
    devtool: '#source-map',
    target: 'node',
    entry: {
        main: [`${src}/app/main.js`],
    },
    output: {
        path: `${dst}/`,
        publicPath: '/',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: src,
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: true,
        }),
    ],
}
