// @flow
const path = require('path')
const webpack = require('webpack')

const conf = require('../../webapp/conf/conf')
const { env, host, devPort, port } = conf

const src = path.resolve(__dirname, '../../webapp')
const lib = path.resolve(__dirname, '../../node_modules')
const commonLibs = [src, path.resolve(lib, 'normalize.css'), path.resolve(lib, 'font-awesome')]
const MODULE_NAME = process.env.MODULE_NAME ? process.env.MODULE_NAME : 'home'
const MODULE_SUB_DOMAIN = MODULE_NAME === 'home' ? '' : `${MODULE_NAME}.`

module.exports = {
    context: `${src}`,
    devServer: {
        port: devPort,
        proxy: {
            '/': {
                target: `http://${MODULE_SUB_DOMAIN}${host}:${port}/`,
                secure: false
            }
        }
    },
    entry: {
        [MODULE_NAME]: ['react-hot-loader/patch', `${src}/${MODULE_NAME}/index.jsx`],
        common: ['react', 'react-router', 'redux', 'react-redux', 'normalize.css', 'font-awesome/css/font-awesome.css', `${src}/common/scss/index.scss`],
    },
    output: {
        publicPath: `//${host}:${devPort}/`,
        filename: '[name]/[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
    performance: {
        hints: false
    },
    module: {
        loaders: [{
            test: /\.s?css$/,
            include: commonLibs,
            loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap',
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: src,
            query: {
                cacheDirectory: true,
            },
        }, {
            test: /\.(ico|png|jpg|jpeg|gif|eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
            include: commonLibs,
            loader: 'url-loader',
            query: {
                name: '[name].[ext]',
            },
        }],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common'],
            filename: 'common/common.js',
            minChunks: Infinity,
        }),
    ],
}
