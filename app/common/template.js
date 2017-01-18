// @flow
import conf from '../../webapp/conf/conf'

const { env, host, devPort, port, isDevelopment } = conf
const publicPath = env === 'development' ? `//${host}:${devPort}` : `//static.${host}:${port}`

type Parameter = {
    entry: string,
    title?: string,
    style?: string,
    content?: string,
    state?: any
}

export default (p: Parameter): string => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${p.title ? p.title : ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    ${isDevelopment ? '<!--' : ''}
    <link rel="stylesheet" href="${publicPath}/common/common.css">
    <link rel="stylesheet" href="${publicPath}/${p.entry}/${p.entry}.css">
    ${isDevelopment ? '-->' : ''}
    <style>${p.style ? p.style : ''}</style>
</head>
<body>
    <div id="root">${p.content ? p.content : ''}</div>
</body>
<script>window.__INITIAL_STATE__ = ${p && p.state ? JSON.stringify(p.state) : '{}'}</script>
<script src="${publicPath}/common/common.js"></script>
<script src="${publicPath}/${p.entry}/${p.entry}.js"></script>
</html>
`
