import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav>
            <Link to ="/">Initiative Tracker</Link>
            <Link to ="/create">Create New Character</Link>
        </nav>
    )

}

export default NavBar