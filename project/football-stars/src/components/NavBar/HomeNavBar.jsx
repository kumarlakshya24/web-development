import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './NavBar.css';

const HomeNavBar = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars" />
                </label>  
                <ul>
                  <li><NavLink className="Home" to="/">Home</NavLink></li>
                  <li><NavLink className="logout" to="/logout">Logout</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default withRouter(HomeNavBar);
