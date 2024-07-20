import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup'
import { Link } from 'react-router-dom'
import Footer2 from '../../components/Footer2'
import Header2 from '../../components/Header2'


const Signup = () => {
    const onSubmit = () => {
        console.log('hi there my friend')
    }
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
    })
    const { loading, signup } = useSignup()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <div className='signup-container'>
            <Header2 />
            <div className='signup-content'>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <h1>Signup</h1>

                    <div className="signup-inputs">
                        <input type="text" placeholder='Fullname' />
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                    <div className="signup-button">
                        {/* {loading ? <span className='loading loading-spinner text-white'></span> : 'Sign Up'} */}
                        <Link to='/login'>Already have an account?</Link>
                        <button className=" signup-btn btn btn-outline">Signup</button>
                    </div>
                </form>

                <div className='signup-welcome'>
                    <h1>Hi friend!</h1>
                    // icon here
                </div>
            </div>
            <span className="loading loading-spinner "></span>
            <Footer2 />
        </div>
    )
}

export default Signup
