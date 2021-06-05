import React,{useState} from 'react'
import LoginAsAdmin from './LoginAsAdmin';
import LoginAsUser from './LoginAsUser';
import './Login.css';

function Login() {
    const [user,setUser]=useState(true);

    function handleUser(){
        setUser(true)
        
    }
    function handleAdmin(){
        setUser(false)
    }
    console.log(user)
    return (
        <div className="loginContainer">
            <div className="buttons ">
                <button className="btn btn-primary" onClick={handleUser}>Login as User</button>
                <button className="btn btn-primary" onClick={handleAdmin}>Login as Admin</button>
            </div>
            {
                user ? <LoginAsUser name='users'/> : <LoginAsAdmin name='admin'/>
            }
        </div>
    )
}

export default Login
