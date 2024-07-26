import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="ft1">
                    <h1><b>About </b><i>Modern Movie</i></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quas sunt quo tempore dolore, dolores totam tempora? Veritatis aliquid quas itaque sit, impedit vero commodi iure assumenda aperiam tempora!</p>
                </div>
                <div className="ft2">
                    <h1>Contact us</h1>
                    <p><b>Contact no:</b> <em>+63910 8231 982</em></p>
                    <p><b>Tell no:</b> <em>123-456-7890</em></p>
                </div>
                <div className="ft3">
                    <h1>Navigation</h1>
                    <Link to='/login'><em>Login</em></Link>
                    <Link to='/signup'><em>Signup</em></Link>
                </div>
                <div className="ft4">
                    <h1>Email Us @</h1>
                    <p><em>example@gmail.com</em></p>
                </div>
            </div>
            <div className="reserves">
                <hr />
                <h1>&copy;All rights reserved. 2024</h1>
            </div>
        </footer>
    )
}

export default Footer
