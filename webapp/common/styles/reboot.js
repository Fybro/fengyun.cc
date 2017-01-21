import { fontFamilies, fontSizes, bodies } from './variables'

export const reboot = `
    html {
        box-sizing: border-box;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
    html {
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    body {
        color: ${bodies.color};
        background-color: ${bodies.bg};
        font-family: ${fontFamilies.base};
        font-size: ${fontSizes.base};
    }
    ul, li, ol, l1 {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`
export default {
    reboot,
}
