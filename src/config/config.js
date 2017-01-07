const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'developmet'

const devConfig = {
  publicPath: '/',
  domain: 'fengyundev.cc',
  port: 4000,
}

const debugConfig = {
}

let prodConfig

if (env === 'production') {
  prodConfig = { ...devConfig, ...prodConfig }
} else if (env === 'debug') {
  prodConfig = { ...devConfig, ...debugConfig }
} else {
  prodConfig = devConfig
}

const config = prodConfig

export default config
