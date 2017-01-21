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
    imgPubPath: 'staticfengyuncc.oss-cn-hangzhou.aliyuncs.com',
    imgPs: '',
}

const production = Object.assign({}, development, {
    host: 'fengyun.cc',
    port: 9999,
    isDevelopment: false,
    publicPath: 'staticfengyuncc.oss-cn-hangzhou.aliyuncs.com',
})

module.exports = {
    development,
    production,
}[env]
