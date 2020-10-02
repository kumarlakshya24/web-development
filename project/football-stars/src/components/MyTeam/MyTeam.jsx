import React, {useEffect} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './MyTeam.css';

const MyTeam = (props) => {

    useEffect(() => {
        fetch('/session')
            .then(response => response.json())
            .then(json => {
                if (json.set === 'inactive') {
                    props.history.push('/');
                }
            });
    });
    
    return (
        <div>
            <div className="blue-area-wraper">
                <NavBar />
                <h1>My Votes</h1>
            </div>
            <div className="captain-img-wraper">
                <img className={"side-imgs"} src={localStorage.getItem('secondPickImg')} alt="Player Not Found"/>
                <img src={localStorage.getItem('firstPickImg')} alt="Player Not Found"/>
                <img className="side-imgs" src={localStorage.getItem('lastPickImg')} alt="Player Not Found"/>
                <h1 className="team-h1">Looks awesome! You can choose to vote again below:</h1>
                <NavLink to="/home" className="new-team-btn">New Team</NavLink>
            </div>
        </div>
    )
}

export default withRouter(MyTeam);
