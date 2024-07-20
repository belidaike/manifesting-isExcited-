import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header2 = () => {
    return (
        <div className='header2'>
            <Link to='/'><img src={logo} width={60} alt="" /></Link>
        </div>
    )
}

export default Header2
