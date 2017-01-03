import * as React from 'react'

export default class Post extends React.Component<{post: any}, {}> {
    render() {
        const post = this.props.post 
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>                 
            </div>  
        )
    }
}