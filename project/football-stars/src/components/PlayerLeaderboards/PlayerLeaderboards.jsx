import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import playerNames from '../../playerNames';
import './PlayerLeaderboards.css';

const PlayerLeaderboards = (user) => {
    const [myVotes, setMyVotes] = useState(false);

    useEffect(() => {
        fetch('/session')
            .then(response => response.json())
            .then(json => {
                if (json.set === 'not') {
                    user.history.push('/');
                }
                else {
                    setMyVotes(true);
                    let voteContents = [];
                    voteContents[0] = localStorage.getItem('ypotsName');
                    voteContents[1] = localStorage.getItem('uclNames');
                    voteContents[2] = localStorage.getItem('overallNames');
                    setMyVotes(voteContents);
                }
            });
    });

    return (
        <div className="playerLeaderBords-wrapper">
            <NavBar />
            <div className="leader-bords-wrapper">
                <div className="stadium-bg">
                    <div className="leaderboard-text">
                        <span>Player Leaderboards</span>
                    </div>
                </div>
                <div className="highest-votes-wraper">
                    <li id={myVotes ? 'h-v-t' : 'h-v-f'}>
                        <span>My Votes</span>
                    </li>
                    <div className="highest-votes-table-wraper">
                        <div class="divTableBody">
                        <div class="divTableRow">
                        <div class="divTableCellName">&nbsp;{myVotes[0]}</div>
                        <div class="divTableCell">&nbsp;Nominated as the <a href = "https://en.wikipedia.org/wiki/Golden_Boy_(award)">Young Player of the Season</a>. Other Nominees were {playerNames.ypotsNames.filter(item => item!== myVotes[0]).join(', ')}.</div>
                        </div>
                        <div class="divTableRow">
                        <div class="divTableCellName">&nbsp;{myVotes[1]}</div>
                        <div class="divTableCell">&nbsp;Nominated <a href= "https://en.wikipedia.org/wiki/UEFA_Men%27s_Player_of_the_Year_Award">UCL Player of the Season</a>. Other Nominees were {playerNames.uclNames.filter(item => item!== myVotes[1]).join(', ')}.</div>
                        </div>
                        <div class="divTableRow">
                        <div class="divTableCellName">&nbsp;{myVotes[2]}</div>
                        <div class="divTableCell">&nbsp;Nominated <a href = "https://en.wikipedia.org/wiki/PFA_Players%27_Player_of_the_Year">Overall Player of the Season</a>. Other Nominees were {playerNames.overallNames.filter(item => item!== myVotes[2]).join(', ')}.</div>
                        </div>
                        </div>
                        </div>
                    <div className="bottom-line-of-table">
                        <p>Did you know : Ansu Fati was born in Guinea-Bissau but represents Spain internationally</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PlayerLeaderboards);
