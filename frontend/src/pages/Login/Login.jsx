import { useState } from 'react'
import useLogin from "../../hooks/useLogin"
import { Link } from 'react-router-dom'
import Footer2 from '../../components/Footer2'
import Header2 from '../../components/Header2'
import { motion } from 'framer-motion'
import Logins from '../../../public/login.json'
import Lottie from 'lottie-react'

const Login = () => {
    // Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out "Fizz"; when it's divisible by 3, print out "Buzz"; when its divisible by both 2 and 3, print "Fizz Buzz"

    // const fizzbuzz = (n) => {
    //     for (let i = 0; i <= n; i++) {

    //         if (i % 2 === 0 && i % 3 === 0 && i != 0) {
    //             console.log([i] + 'Fizz Buzz')
    //         }
    // const output =
    //     (i % 2 === 0 && i % 3 === 0 && i != 0) ? `${i} Fizz Buzz` :
    //         (i % 2 === 0 && i != 0) ? `${i} Fizz` :
    //             (i % 3 === 0 && i != 0) ? `${i} Buzz` : `${i}`
    // console.log(output)
    //     }
    // }
    // fizzbuzz(12)
    // const num = [1, 2, 3]
    // for (let i = 0; i < num.length; i++) {
    //     setTimeout(() => {
    //         console.log(i + 1)
    //     }, i * 1000)
    // }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { loading, login } = useLogin()

    const handleSubmit = async e => {
        e.preventDefault()
        await login(username, password)
    }

    return (
        <div className='login-container'>
            <Header2 />
            <div className='login-content'>
                <motion.form className='login-form' onSubmit={handleSubmit}
                    variants={{
                        hidden: { opacity: 0, x: 500 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.3 }}>
                    <h1>Login</h1>

                    <div className="login-inputs">
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="login-button">
                        {loading ? <span className='loading loading-spinner text-white'></span> : (<Link to='/signup' className="semi-btn">Don't have an account?</Link>)}
                        <button className="login-btn">Login</button>
                    </div>
                </motion.form>

                <motion.div className='login-welcome'>
                    <motion.h1 variants={{
                        hidden: { opacity: 0, y: -300 },
                        visible: { opacity: 1, y: 0 }
                    }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.3 }}>Welcome back friend!</motion.h1>
                    <motion.div variants={{
                        hidden: { opacity: 0, y: 300 },
                        visible: { opacity: 1, y: 0 }
                    }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.3 }}>
                        <Lottie className="div" animationData={Logins} />
                    </motion.div>
                </motion.div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Login