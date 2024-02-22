import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const Login = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const navigate = useNavigate()

    const handlesubmit = (e)=>{

        e.preventDefault()
        Axios.post('http://localhost:6969/auth/login', {email, password})
        .then(res =>{

            if(res.data.status){
                navigate('/home')
            }
            
        })
        .catch(err =>{
            console.log(err)
        })

    }


  return (
    <div className='sign-up-container'>
        <form className='sign-up-form' onSubmit={handlesubmit}>

            <h2 className='heading'>Login</h2>

            <label htmlFor='email'>Email:</label>
            <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>

            <button type='submit'>Login</button>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

        </form>
    </div>
  )
}

export default Login