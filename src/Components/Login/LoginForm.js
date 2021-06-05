import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {v4 as uuid} from 'uuid'
import './LoginForm.css';

const LoginForm = (props) =>{
    console.log(props);
    const [value,setValue] = useState({name:"",pass:""})
    const [errors,setErrors] = useState({name:"",pass:""})  
    const Users=[];
    const [valid,setValid]=useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:3000/${props.url}`)
        .then(resp=>{
            console.log(resp.data)
            Users=resp.data
        }).catch(err=>{
            console.log(err)
        })
        
    },[props.url])

    function handleNameChange(e){
        setValue({...value,name:e.target.value})
        if(value.name.length >= 5){
            setErrors({...errors,name:''})
        }else{
            setErrors({...errors,name:'Name should be greater than 5'}) 
        }
    }

    function handlePassChange(e){
        setValue({...value,pass:e.target.value})
        if(value.pass.length > 5){
            setErrors({...errors,pass:''})
        }else{
            setErrors({...errors,pass:'Password should be greater than 5'})
        }
    }
   
    function handleSubmit(event){
        event.preventDefault();
        console.log('A name was submitted: ' + ' Name = ' + value.name + " Password = " + value.pass);

        if(value.name.length < 5){
           setErrors({...errors,name:'Name should be greater than 5'})
        }
        else if(value.pass.length < 5){
            setErrors({...errors,pass:'Password should be greater than 5'})
        }

        
        var found=Users.find(user=>{

                if(user.name === value.name){
                    setValid(true)
                }else{
                    setValid(false)
                }
            
        })
        console.log(valid)
        // axios.post(`http://localhost:3000/${props.url}`,{
        //     id:uuid(),
        //     name:value.name,
        //     pass:value.pass
        // })
        // .then(resp=>{
        //     console.log('Data Posted !!')
        // }).catch(err=>{
        //     console.log('Unable to post data')
        // })

    }

    return (
        <form className="formData" onSubmit={handleSubmit}>
            <h3>Welcome {props.name} !</h3>
            <label className="nameField">
                Name:
                <input type="text" value={value.name} onChange={handleNameChange} />
                <p>{errors.name}</p>
            </label>
            <label className="passField">
                Password:
                <input type="pass" value={value.pass} onChange={handlePassChange} />
                <p>{errors.pass}</p>
            </label>
            <input className="btn btn-danger submitBtn" type="submit" value="Submit" />
        </form>
    )
}

export default LoginForm;