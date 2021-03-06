import React, { useState } from "react"
import axios from "axios"

const Login = () => {

    const [ credentials, setCredentials ] = useState({
        email: '',
        password: ''
    })

    const emailInputHandler = (e) => {
        let cloneCredentials = {...credentials, email: e.target.value}
        setCredentials(cloneCredentials)
    }

    const passwordInputHandler = (e) => {
        let clonePassword = {...credentials, password: e.target.value}
        setCredentials(clonePassword)
    }

    const onSubmit = () => {

        const loginCreds = {
            email: credentials.email,
            password: credentials.password
        }

        axios.post('http://localhost:5000/users/login', loginCreds)
            .then(res => console.log(res.data))

        window.location = '/'
    }

    return (
        <div className="app-container">
            <div className="input-parent">
                Login
                <div>
                    <input 
                        className="input" 
                        value={credentials.email} 
                        onChange={(e)=>{emailInputHandler(e)}} 
                        placeholder="Email Address"
                    />
                </div>
                <div>
                    <input 
                        className="input" 
                        value={credentials.password} 
                        onChange={(e)=>{passwordInputHandler(e)}} 
                        placeholder="Password"
                    />
                </div>
                <button onClick={onSubmit}>Login</button>
            </div>
        </div>
    )

}

export default Login