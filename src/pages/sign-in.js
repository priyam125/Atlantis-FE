import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const SignIn = () => {
    return (
        <div className='sign-in-and-sign-up flex justify-between py-5 px-40 font-Montserrat, sans-serif'>
            <Login />
            <SignUp />
        </div>
    )
}

export default SignIn
