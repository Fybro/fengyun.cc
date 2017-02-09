import { breakPoints, bodies, fontSizes } from '../../../common/styles/variables'

const headerNormal = `
.header {
    position: relative;
    background-color: ${bodies.inverseBg};
}
.header-logo {
    display: block;
    height: 100%;
}
.header li {
    height: 50px;
    line-height: 50px;
}
.header a {
    height: 50px;
    padding: 0 10px; 
    color: ${bodies.inverseColor};
}
.header a:hover {
    background-color: rgba(0, 0, 0, .5);
    text-decoration: none;
}
`

const headerDesktop = `
@media (min-width: ${breakPoints[3]}px) {
    .header {
        background-color: ${bodies.inverseColor};
    }
    .header li {
        height: 34px;
        line-height: 40px;
    }
    .header a {
        height: 34px;
        color: #555;
        font-size: ${fontSizes.sm};
    }
    .header a:hover {
        color: ${bodies.inverseColor};
    }
}
`

export const headerStyle = `${headerNormal}${headerDesktop}`

export default {
    headerStyle,
}
