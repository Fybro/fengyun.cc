let env
if (process.env.NODE_ENV === 'development') {
    env = 'development'
} else if (process.env.NODE_ENV === 'production') {
    env = 'production'
} else {
    env = 'production'
}

const development = {
    env,
    host: 'fengyundev.cc',
    devPort: 3000,
    port: 9999,
    isDevelopment: true,
    imgPubPath: 'static.fengyun.cc',
    imgPs: '',
}

const production = Object.assign({}, development, {
    host: 'fengyun.cc',
    port: 9999,
    isDevelopment: false,
    publicPath: 'static.fengyun.cc',
})

const debug = Object.assign({}, production, {
    host: 'fengyundev.cc',
})

module.exports = {
    development,
    production,
    debug,
}[env]
