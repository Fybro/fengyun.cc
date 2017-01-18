// @flow

require('babel-register')({
  'presets': [
    'latest',
    'stage-0',
    'react'
  ],
})

require('../app/main')
