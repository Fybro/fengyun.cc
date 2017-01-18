// @flow
import conf from '../../webapp/conf/conf'

const { env, host, devPort, port, isDevelopment } = conf
const publicPath = env === 'development' ? `//${host}:${devPort}` : `//static.${host}:${port}`

export default (content: string, entry: string, title: string, style: string, state: any): string => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    ${isDevelopment ? '<!--' : ''}
    <link rel="stylesheet" href="${publicPath}/common/common.css">
    <link rel="stylesheet" href="${publicPath}/${entry}/${entry}.css">
    ${isDevelopment ? '-->' : ''}
    <style>${style}</style>
</head>
<body>
    <div id="root">${content}</div>
</body>
<script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
<script src="${publicPath}/common/common.js"></script>
<script src="${publicPath}/${entry}/${entry}.js"></script>
</html>
`
