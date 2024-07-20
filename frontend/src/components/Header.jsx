import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <Link to='/'><img src={logo} width={60} alt="" /></Link>
            <ul className='header-ul'>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link>
                        Logout
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
