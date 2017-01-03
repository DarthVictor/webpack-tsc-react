import * as React from 'react'

export default class User extends React.Component<{user: any}, {}> {
    render() {
        const user = this.props.user 
        return (
            <div>
                <h4>{user.name}</h4>
                <cite title="{user.address.city}">{user.address.city}</cite>
                <p>
                    <a href="http://{user.website}">{user.website}</a>
                    <br />
                    {user.phone}
                    <br />
                    {user.email}
                    
                </p>
            </div>
        )
    }
}