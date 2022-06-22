import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
