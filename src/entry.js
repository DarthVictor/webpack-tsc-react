import 'whatwg-fetch'
import  * as React from 'react'
import  * as ReactDom from 'react-dom'
import getPost from './modules/async-example'
import getUser from './modules/async-ts-example'
import App from './components/App'
require('./styles/entry-style.css')

async function run(){    
    const post = await getPost(1)
    const user = await getUser(post.userId)
    post.user = user
    return post
}

run().then((res) => {
    ReactDom.render(
        <App post={res}/>,
        document.getElementById('main-block')
    )
    //document.querySelector('#main-block').innerHTML  = `<div class="entry-block">${JSON.stringify(res)}</div>`
})
