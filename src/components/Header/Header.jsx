import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
        <nav className="navbar">
            <span className='textnav'>
                <h1>Prophet Diary</h1>
            </span>
            <div>
                <Link to="/"><span>Home</span></Link>
                <Link to="/Form"><span>Add New Books</span></Link>
            </div>
        </nav>
    )
}

export default Header