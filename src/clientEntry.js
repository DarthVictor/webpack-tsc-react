import  * as React from 'react'
import  * as ReactDom from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
require('./styles/entry-style.css')

ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/:id" component={App}/>
        </Route>
    </Router>
    ,
    document.getElementById('main-block')
)