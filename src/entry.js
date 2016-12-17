import 'whatwg-fetch'
import asyncFetch from './modules/async-example.js'

require('./styles/entry-style.css')

async function run(){    
    return await asyncFetch()
}

run().then((res) => {
    document.querySelector('#main-block').innerHTML  = `<div class="entry-block">${JSON.stringify(res)}</div>`
})
