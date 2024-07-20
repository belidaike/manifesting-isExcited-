import { useState } from 'react'
import useLogin from "../../hooks/useLogin"
import { Link } from 'react-router-dom'
import Footer2 from '../../components/Footer2'
import Header2 from '../../components/Header2'

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
                <form className='login-form' onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <div className="login-inputs">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="login-button">
                        {/* {loading ? <span className='loading loading-spinner text-white'></span> : 'Sign Up'} */}
                        <Link to='/signup'>Don't have an account?</Link>

                        <button className="login-btn btn btn-outline">Login</button>
                    </div>
                </form>

                <div className='login-welcome'>
                    <h1>Welcome back friend!</h1>
                    //icon here
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Login
