import React from 'react'
import LoginForm from './LoginForm'

function LoginAsAdmin(props) {
    console.log(props);
    return (
        <div>
            <LoginForm name="Admin" url={props.name}/>
        </div>
    )
}

export default LoginAsAdmin
