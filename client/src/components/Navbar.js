import React from 'react'

import { Link, useHistory } from 'react-router-dom'

function Navbar(props) {

    const history = useHistory()

    const logout = e => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    {props.user && <li><Link to="/login">Saved Posts</Link></li>}
                    {
                        props.user ?
                            <li><Link to="/login">Logout</Link></li> :
                            <li><Link to="/login">Login</Link></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navbar