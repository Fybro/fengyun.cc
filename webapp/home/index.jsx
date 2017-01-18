import render from '../common/index'
import Root from './Root'

const root = document.getElementById('root')

render(Root, root)

if (module.hot) {
    module.hot.accept('./Root', () => {
        render(Root, root)
    })
}
