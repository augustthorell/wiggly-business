import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="Logo" className="logoImage" />
            </Link>
            <ul className="navList" >
                <Link to="/about"><li>About</li></Link>
                <Link to="/users"><li>Users</li></Link>
                <Link to="/admin"><li>Admin</li></Link>
            </ul>
        </nav>
    )
}

export default Nav