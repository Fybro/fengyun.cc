// @flow
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const conf = require('../../webapp/conf/conf')
const modules = require('../../webapp/conf/modules')

const { env, host, devPort, port, publicPath } = conf

const src = path.resolve(__dirname, '../../webapp')
const dst = path.resolve(__dirname, '../../public/static')
const lib = path.resolve(__dirname, '../../node_modules')
const commonLibs = [src, path.resolve(lib, 'normalize.css'), path.resolve(lib, 'font-awesome')]

const entris = modules.map(v => new Object({ [v]: [`${src}/${v}/index.jsx`] }))
    .reduce((a, b) => Object.assign({}, a, b))

module.exports = {
    context: `${src}`,
    devtool: '#source-map',
    entry: Object.assign({}, entris, {
        common: ['react', 'react-router', 'redux', 'react-redux', 'normalize.css', 'font-awesome/css/font-awesome.css', `${src}/common/scss/index.scss`],
    }),
    output: {
        path: `${dst}/`,
        publicPath: `//${publicPath}/`,
        filename: '[name]/[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
    module: {
        loaders: [{
            test: /\.s?css$/,
            include: commonLibs,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader?sourceMap!postcss-loader!sass-loader?sourceMap',
            }),
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: src,
        }, {
            test: /\.(png|jpg|jpeg|gif|ico)(\?[a-z0-9A-Z]*)?$/,
            include: [src],
            loader: 'url-loader',
            query: {
                name: 'img/[path]/[name].[ext]',
                limit: 10000,
            },
        }, {
            test: /\.(eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
            include: commonLibs,
            loader: 'url-loader',
            query: {
                name: 'fonts/[name].[ext]',
                limit: 10000,
            },
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common'],
            filename: 'common/common.js',
            minChunks: Infinity,
        }),
        new ExtractTextPlugin('[name]/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: true,
        }),
    ],
}
