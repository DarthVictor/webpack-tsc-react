import * as React from 'react'

import User from './User'
import Post from './Post'

import getPost from '../modules/get-post'
import getUser from '../modules/get-user'


async function getData(id){    
    const post = await getPost(id)
    const user = await getUser(post.userId)
    post.user = user
    return post
}

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {post: null}
        
    }

    componentDidMount() {
        getData(+this.props.params.id || 1).then((res) => {
            this.setState({
                post: res
            })
        })
    }

    render() {
        
        if(this.state.post) {
            return ( 
                <div>
                    <Post post={this.state.post}/>
                    <User user={this.state.post.user}/>
                </div> 
            )
        }
        else {
            return <div>Please wait</div> 
        }
    }
}