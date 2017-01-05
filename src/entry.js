import 'whatwg-fetch'
import  * as React from 'react'
import  * as ReactDom from 'react-dom'
import App from './components/App'
require('./styles/entry-style.css')

ReactDom.render(
    <App/>,
    document.getElementById('main-block')
)