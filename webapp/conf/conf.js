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
}

const production = Object.assign({}, development, {
    host: 'fengyun.cc',
    port: 80,
    isDevelopment: false,
})

module.exports = {
    development,
    production,
}[env]
