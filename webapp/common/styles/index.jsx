import React from 'react'
import { reboot } from './reboot'
import { containerStyle } from './grid'
import { flex } from './flex'
import { box } from './box'

export default () => <style>{`${reboot}${containerStyle}${flex}${box}`.replace(/\r?\n|\r|\s/g, '')}</style>
