import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import useLogout from '../hooks/useLogout'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
    const { authUser } = useContext(AuthContext)

    const { logout, loading } = useLogout()

    return (
        <header>
            <Link to='/'><img src={logo} width={60} alt="" /></Link>
            <ul className='header-ul'>
                {authUser ? (
                    <li>
                        <Link onClick={logout}>
                            Logout
                        </Link>
                    </li>
                ) : (
                    <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>
                )}


            </ul>
        </header>
    )
}

export default Header
