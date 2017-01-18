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
    host: 'dev.uweb.smcoco.com',
    devPort: 3000,
    port: 9999,
    isDevelopment: true,
}

const production = Object.assign({}, development, {
    host: 'uweb.smcoco.com',
    port: 80,
    isDevelopment: false,
})

module.exports = {
    development,
    production,
}[env]
