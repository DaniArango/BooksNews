import React from 'react'
import { Link } from "react-router-dom";
import '../Header/Header.scss'


const Header = () => {
    return (
        <nav>
        <div>
                <Link to="/"><span>Home</span></Link> <br /> 
                <Link to="/Form"><span>Add New Books</span></Link>
                <br /> <hr /> 
            </div>
            <h1>Daily Prophet</h1>
            <hr />
        </nav>
    )
}

export default Header