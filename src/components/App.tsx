import * as React from 'react'

import User from './User'
import Post from './Post'


export default class App extends React.Component<{post: any}, {}> {
    render() {
        return ( 
            <div>
                <Post post={this.props.post}/>
                <User user={this.props.post.user}/>
            </div> 
        )
    }
}