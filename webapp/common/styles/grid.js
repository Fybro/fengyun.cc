import { breakPoints, containerWidths } from './variables'

export const containerStyle = containerWidths.map((v: number, k: number): string => {
    const t = `
        @media (min-width: ${breakPoints[k + 1]}px) {
            .container {
                width: ${v}px;
            }
        }
    `
    return t
}).reduce((a: string, b: string): string => a + b) + `
    .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 100%;
        background-color: yellow;
    }
`

export default {
    containerStyle,
}
