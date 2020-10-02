import React, {useEffect} from 'react';
import {NavLink, withRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './MyCaptain.css';

const MyCaptain = (props) => {
    useEffect(() => {
        fetch('/session')
        .then(response => response.json())
            .then(json => {
                if (json.set === 'not')
                {
                    props.history.push('/');
                }
        });
            
    })
    return (
        <div>
            <div className="blue-area-wraper">
                <NavBar />
                <h1>Young Player Winner</h1>
            </div>
            <div className="captain-img-wraper">
                <img src={localStorage.getItem('firstPickImg')} alt="Player Not Found"/>
                <h1 id="h1">You can always vote again, if you change your mind:</h1>
                <NavLink to="/home" className="new-team-btn">Vote Again!</NavLink>
            </div>
        </div>
    )
}

export default withRouter(MyCaptain);
