// @flow
import render from '../common/render'
import App from './containers/App'

import './scss/index.scss'

window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();


const root = document.getElementById('root')

render(App, root)

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App, root)
    })
}
