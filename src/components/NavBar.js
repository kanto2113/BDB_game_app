import React from "react"
import { Link } from "react-router-dom"
import AuthOptions from "./auth/AuthOptions"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <header className="nav-header">
                <img className="logo" src="https://roguebits.net/images/ampersand.png" height="60px" width="60px" alt="logo"></img>
                <nav>
                    <ul className="navbar">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">BDB Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/tracker" className="nav-link">Initiative Tracker</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/home/create" className="nav-link">Create New Character</Link>
                        </li>
                    </ul>
                </nav>
                <AuthOptions></AuthOptions>
            </header>
        </div>
    )
}

export default NavBar