// @flow
import conf from '../../webapp/conf/conf'

const { env, host, devPort, isDevelopment, publicPath, imgPubPath } = conf
const publicBase = env === 'development' ? `//${host}:${devPort}` : `//${publicPath}`

export default (content: string, entry: string, title: string, style: string, state: any): string => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <link href="//${imgPubPath}/images/title_logo.png" rel="shortcut icon">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    ${isDevelopment ? '<!--' : ''}
    <link rel="stylesheet" href="${publicBase}/common/common.css">
    <link rel="stylesheet" href="${publicBase}/${entry}/${entry}.css">
    ${isDevelopment ? '-->' : ''}
    <style>${style}</style>
</head>
<body>
    <div id="root">${content}</div>
</body>
<script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
<script src="${publicBase}/common/common.js"></script>
<script src="${publicBase}/${entry}/${entry}.js"></script>
</html>
`
