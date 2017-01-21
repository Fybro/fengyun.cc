import React from 'react'
import { reboot } from './reboot'
import { containerStyle } from './grid'
import { flex } from './flex'

export default () => <style>{`${reboot}${containerStyle}${flex}`.replace(/\r?\n|\r|\s/g, '')}</style>
