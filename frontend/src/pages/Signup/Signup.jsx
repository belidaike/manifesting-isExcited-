import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup'
import { Link } from 'react-router-dom'
import Footer2 from '../../components/Footer2'
import Header2 from '../../components/Header2'
import { motion } from 'framer-motion'
import Signups from '../../../public/signup.json'
import Lottie from 'lottie-react'

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
                <motion.form className='signup-form' onSubmit={handleSubmit}
                    variants={{
                        hidden: { opacity: 0, x: -500 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.3 }}>
                    <h1>Signup</h1>

                    <div className="signup-inputs">
                        <input type="text" placeholder='Username' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                        <input type="text" placeholder='Username' value={inputs.usernfullNameame} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                        <input type="password" placeholder='Password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        <input type="password" placeholder='Password' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>
                    <div className="signup-button">
                        {loading ? <span className='loading loading-spinner text-white'></span> : (<Link to='/login' className='semi-btn'>Already have an account?</Link>)}
                        <button className="signup-btn">Signup</button>
                    </div>
                </motion.form>

                <motion.div className='signup-welcome'>
                    <motion.h1 variants={{
                        hidden: { opacity: 0, y: -300 },
                        visible: { opacity: 1, y: 0 }
                    }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.3 }}>How are you friend!</motion.h1>
                    <motion.div variants={{
                        hidden: { opacity: 0, y: 300 },
                        visible: { opacity: 1, y: 0 }
                    }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.3 }}>
                        <Lottie className="div" animationData={Signups} />
                    </motion.div>
                </motion.div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Signup
