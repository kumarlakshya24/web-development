import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars" />
                </label>  
                <ul>
                    <li><NavLink to="/my-team">My Votes</NavLink></li>
                    <li><NavLink to="/my-captain">Player of the Season</NavLink></li>
                    <li><NavLink to="/player-leaders-boards">Leaderboards</NavLink></li>
                    <li><NavLink className="logout" to="/logout">Logout</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default withRouter(NavBar);
