import { fontFamilies, fontSizes, bodies, link, lineHeight } from './variables'

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
        line-height: ${lineHeight.base};
    }
    ul, li, ol, l1 {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: ${link.color};
    }
    a:hover {
        color: ${link.hoverColor};
    }
`
export default {
    reboot,
}
