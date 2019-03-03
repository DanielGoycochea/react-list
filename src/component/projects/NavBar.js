import React from 'react'
import {Link} from "react-router-dom"


const navBar =() =>{
    return(
        <nav className="nav-style">
        <ul>
            <li>
                <Link to='/projects' style={{textDecoration: 'none'}}>
                    Proyectos
                </Link>
            </li>
        </ul>
        
        
        </nav>
    )
}

export default navBar;