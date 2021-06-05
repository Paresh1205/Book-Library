
import React from 'react'
import LoginForm from './LoginForm'

function LoginAsUser(props) {
    console.log(props);
    return (
        <div>
        
            <LoginForm name='User' url={props.name}/>
        </div>
    )
}

export default LoginAsUser
