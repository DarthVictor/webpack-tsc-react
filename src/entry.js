import 'whatwg-fetch'
import getPost from './modules/async-example.js'
import getUser from './modules/async-ts-example.ts'
module.hot.accept() 

require('./styles/entry-style.css')

async function run(){    
    const post = await getPost(1)
    const user = await getUser(post.userId)
    post.user = user
    return post
}

run().then((res) => {
    document.querySelector('#main-block').innerHTML  = `<div class="entry-block">${JSON.stringify(res)}</div>`
})
