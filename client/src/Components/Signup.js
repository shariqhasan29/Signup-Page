import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const Signup = () => {

    const[username, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const navigate = useNavigate()

    const handlesubmit = (e)=>{

        e.preventDefault()
        Axios.post('http://localhost:6969/auth/signup', {username, email, password})
        .then(res =>{

            if(res.data.status){
                navigate('/login')
            }
            
        })
        .catch(err =>{
            console.log(err)
        })

    }


  return (
    <div className='sign-up-container'>
        <form className='sign-up-form' onSubmit={handlesubmit}>

            <h2 className='heading'>Sign Up</h2>

            <label htmlFor='username'>Username:</label>
            <input type="text" placeholder='username' required onChange={(e)=>setUserName(e.target.value)}/>

            <label htmlFor='email'>Email:</label>
            <input type='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>

            <button type='submit'>Sign Up</button>
            <p>Have an account? <Link to="/login">Login</Link></p>

        </form>
    </div>
  )
}

export default Signup