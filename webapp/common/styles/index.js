import React from 'react'
import { reboot } from './reboot'
import { containerStyle } from './grid'

export default () => <style>{`${reboot} ${containerStyle}`.replace(/\r?\n|\r|\s/g, '')}</style>
