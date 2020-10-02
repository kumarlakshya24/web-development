import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import HomeNavBar from '../NavBar/HomeNavBar';
import playerNames from '../../playerNames'
import './Home.css';

const Home = (user) => {

    const [firstPickImg, setFirstPickImg] = useState('');
    const [secondPickImg, setSecondPickImg] = useState('');
    const [lastPickImg, setLastPickImg] = useState('');
    const [firstVotes, setFirstVotes] = useState([]);
    const [secondVotes, setSecondVotes] = useState([]);
    const [lastVotes, setLastVotes] = useState([]);

    const addPlayerVotes = (playerName) => {
        if(landingPage) {
            let pickedFirstVotes = [...firstVotes];
            pickedFirstVotes[0] = {...pickedFirstVotes[0], name: {playerName}, winner:'Young Player of the Season'};
            setFirstVotes(pickedFirstVotes);
        }
        if(middlePage) {
            let pickedSecondVotes = [...secondVotes];
            pickedSecondVotes[1] = {...pickedSecondVotes[1], name: {playerName}, winner:'UCL Player of the Season'};
            setSecondVotes(pickedSecondVotes);
        }
        
        if(finalPage) {
            let pickedThirdVotes = [...lastVotes];
            pickedThirdVotes[2] = {...pickedThirdVotes[2], name: {playerName}, winner:'Overall Player of the Season'};
            setLastVotes(pickedThirdVotes);
        }
    }
    
    const [lastSelect, setLastSelect] = useState('');
    const [h1p1, setH1p1] = useState(false);
    const [h1p2, setH1p2] = useState(false);
    const [h1p3, setH1p3] = useState(false);
    const [h1p4, setH1p4] = useState(false);
    const [h1p5, setH1p5] = useState(false);
    const [h1p6, setH1p6] = useState(false);
    const [h1p7, setH1p7] = useState(false);

    const [h2p1, setH2p1] = useState(false);
    const [h2p2, setH2p2] = useState(false);
    const [h2p3, setH2p3] = useState(false);
    const [h2p4, setH2p4] = useState(false);
    const [h2p5, setH2p5] = useState(false);
    const [h2p6, setH2p6] = useState(false);
    const [h2p7, setH2p7] = useState(false);

    const [h3p1, setH3p1] = useState(false);
    const [h3p2, setH3p2] = useState(false);
    const [h3p3, setH3p3] = useState(false);
    const [h3p4, setH3p4] = useState(false);
    const [h3p5, setH3p5] = useState(false);
    const [h3p6, setH3p6] = useState(false);
    const [h3p7, setH3p7] = useState(false);

    const [landingPageDisplay, setLandingPageDisplay] = useState(true);
    const [middlePageDisplay, setMiddlePageDisplay] = useState(false);
    const [finalPageDisplay, setFinalPageDisplay] = useState(false);

    const landingPage = () => {
        const next = (p, img) => {
            if (p === 1) {
                setH1p2(true);
                setH1p3(true);
                setH1p4(true);
                setH1p5(true);
                setH1p6(true);
                setH1p7(true);
                addPlayerVotes(playerNames.ypotsNames[0]);
                localStorage.setItem('ypotsName', playerNames.ypotsNames[0]);
            }
            else if (p === 2) {
                setH1p1(true);
                setH1p3(true);
                setH1p4(true);
                setH1p5(true);
                setH1p6(true);
                setH1p7(true);
                addPlayerVotes(playerNames.ypotsNames[1]);
                localStorage.setItem('ypotsName', playerNames.ypotsNames[1]);
            }
            else if (p === 3) {
                setH1p1(true);
                setH1p2(true);
                setH1p4(true);
                setH1p5(true);
                setH1p6(true);
                setH1p7(true);

                addPlayerVotes(playerNames.ypotsNames[2]);
                localStorage.setItem('ypotsName', playerNames.ypotsNames[2]);
            }
            else if (p === 4) {
                setH1p1(true);
                setH1p2(true);
                setH1p3(true);
                setH1p5(true);
                setH1p6(true);
                setH1p7(true);

                addPlayerVotes(playerNames.ypotsNames[3]);
                localStorage.setItem('ypotsName', playerNames.ypotsNames[3]);
            }
            else if (p === 5) {
                setH1p1(true);
                setH1p2(true);
                setH1p3(true);
                setH1p4(true);
                setH1p6(true);
                setH1p7(true);

                addPlayerVotes(playerNames.ypotsNames[4]);
                localStorage.setItem('ypotsName', playerNames.ypotsNames[4]);
            }
            else if (p === 6) {
                setH1p1(true);
                setH1p2(true);
                setH1p3(true);
                setH1p4(true);
                setH1p5(true);
                setH1p7(true);
                addPlayerVotes(playerNames.ypotsNames[5]);
                localStorage.setItem('ypotsName', playerNames.ypotsNames[5]);
            }
            else if (p === 7) {
                setH1p1(true);
                setH1p2(true);
                setH1p3(true);
                setH1p4(true);
                setH1p5(true);
                setH1p6(true);
                addPlayerVotes(playerNames.ypotsNames[6]);
                localStorage.setItem('ypotsName', playerNames.ypotsNames[6]);
            }
            setFirstPickImg(img);
            setTimeout(() => {
                setLandingPageDisplay(false);
                setMiddlePageDisplay(true);
            }, 1000);
        }

        return (
            <div>
                <h1 className="heading">Young Player of the Season Nominations:</h1>
                <div className="imgs-wraper">
                    <div className= {h1p1 ? "hidden" : "visible"} onClick={() => next(1, '/images/home1/img95rb.png')}>
                        <img className="cardimg" src={'/images/home1/img95rb.png'} alt="img" />
                    </div>
                    <div className= {h1p2 ? "hidden" : "visible"} onClick={() => next(2, '/images/home1/img89lw.png')}>
                        <img className="cardimg" src={'/images/home1/img89lw.png'} alt="img" />
                    </div>
                    <div className= {h1p3 ? "hidden" : "visible"} onClick={() => next(3, '/images/home1/img94cm.png')}>
                        <img className="cardimg" src={'/images/home1/img94cm.png'} alt="img" />
                    </div>
                    <div className= {h1p4 ? "hidden" : "visible"} onClick={() => next(4, '/images/home1/img94cam.png')}>
                        <img className="cardimg" src={'/images/home1/img94cam.png'} alt="img" />
                    </div>
                    <div className= {h1p5 ? "hidden" : "visible"} onClick={() => next(5, '/images/home1/img98st.png')}>
                        <img className="cardimg" src={'/images/home1/img98st.png'} alt="img" />
                    </div>
                    <div className= {h1p6 ? "hidden" : "visible"} onClick={() => next(6, '/images/home1/img96rf.png')}>
                        <img className="cardimg" src={'/images/home1/img96rf.png'} alt="img" />
                    </div>
                    <div className= {h1p7 ? "hidden" : "visible"} onClick={() => next(7, '/images/home1/img95lw.png')}>
                        <img className="cardimg" src={'/images/home1/img95lw.png'} alt="img" />
                        
                    </div>

                </div>
                <div className="vote-for-wraper">

                    <div className="v-f-wraper">
                        <div className="v-f-1">
                            <p id="p1">To make your vote, just select a player card!</p>
                        </div>
                        <div className="v-f-2">
                            <img src={'/images/home1/football.png'} alt="" />
                        </div>
                    </div>

                    <div id="transparent">
                        <img src={'/images/home1/football-player.png'} alt="img" width="50" height="50" />
                    </div>

                    <div className="v-f-wraper">
                        <div className="v-f-1">
                            <p id="p1">You will see the winners in the end</p>
                        </div>
                        <div className="v-f-2">
                            <img src={'/images/home1/trophy.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const middlePage = () => {

        const next = (p, img) => {
            if (p === 1) {
                setH2p2(true);
                setH2p3(true);
                setH2p4(true);
                setH2p5(true);
                setH2p6(true);
                setH2p7(true);
                addPlayerVotes(playerNames.uclNames[0]);
                localStorage.setItem('uclNames', playerNames.uclNames[0]);
            }
            else if (p === 2) {
                setH2p1(true);
                setH2p3(true);
                setH2p4(true);
                setH2p5(true);
                setH2p6(true);
                setH2p7(true);
               addPlayerVotes(playerNames.uclNames[1]);
               localStorage.setItem('uclNames', playerNames.uclNames[1]);
            }
            else if (p === 3) {
                setH2p1(true);
                setH2p2(true);
                setH2p4(true);
                setH2p5(true);
                setH2p6(true);
                setH2p7(true);
                addPlayerVotes(playerNames.uclNames[2]);
                localStorage.setItem('uclNames', playerNames.uclNames[2]);
            }
            else if (p === 4) {
                setH2p1(true);
                setH2p2(true);
                setH2p3(true);
                setH2p5(true);
                setH2p6(true);
                setH2p7(true);
                addPlayerVotes(playerNames.uclNames[3]);
                localStorage.setItem('uclNames', playerNames.uclNames[3]);
            }
            else if (p === 5) {
                setH2p1(true);
                setH2p2(true);
                setH2p3(true);
                setH2p4(true);
                setH2p6(true);
                setH2p7(true);
                addPlayerVotes(playerNames.uclNames[4]);
                localStorage.setItem('uclNames', playerNames.uclNames[4]);
            }
            else if (p === 6) {
                setH2p1(true);
                setH2p2(true);
                setH2p3(true);
                setH2p4(true);
                setH2p5(true);
                setH2p7(true);
                addPlayerVotes(playerNames.uclNames[5]);
                localStorage.setItem('uclNames', playerNames.uclNames[5]);

            }
            else if (p === 7) {
                setH2p1(true);
                setH2p2(true);
                setH2p3(true);
                setH2p4(true);
                setH2p5(true);
                setH2p6(true);
                addPlayerVotes(playerNames.uclNames[6]);
                localStorage.setItem('uclNames', playerNames.uclNames[6]);
            }
            setSecondPickImg(img);
            setTimeout(() => {
                setMiddlePageDisplay(false);
                setFinalPageDisplay(true);
            }, 1000);
        }

        return (
            <div>
                <h1 className="heading">UCL Player of the Season:</h1>
                <div className="imgs-wraper">
                    <div className= {h2p1 ? "hidden" : "visible"} onClick={() => next(1, '/images/home2/image95lw.png')}>
                        <img className="cardimg" src={'/images/home2/image95lw.png'} alt="img" />
                    </div>
                    <div className= {h2p2 ? "hidden" : "visible"} onClick={() => next(2, '/images/home2/image96cdm.png')}>
                        <img className="cardimg" src={'/images/home2/image96cdm.png'} alt="img" />
                    </div>
                    <div className= {h2p3 ? "hidden" : "visible"} onClick={() => next(3, '/images/home2/image98lw.png')}>
                        <img className="cardimg" src={'/images/home2/image98lw.png'} alt="img" />
                    </div>
                    <div className= {h2p4 ? "hidden" : "visible"} onClick={() => next(4, '/images/home2/image95cm.png')}>
                        <img className="cardimg" src={'/images/home2/image95cm.png'} alt="img" />
                    </div>
                    <div className= {h2p5 ? "hidden" : "visible"} onClick={() => next(5, '/images/home2/image97rw.png')}>
                        <img className="cardimg" src={'/images/home2/image97rw.png'} alt="img" />
                    </div>
                    <div className= {h2p6 ? "hidden" : "visible"} onClick={() => next(6, '/images/home2/image99cb.png')}>
                        <img className="cardimg" src={'/images/home2/image99cb.png'} alt="img" />
                    </div>
                    <div className= {h2p7 ? "hidden" : "visible"} onClick={() => next(7, '/images/home2/image97st.png')}>
                        <img className="cardimg" src={'/images/home2/image97st.png'} alt="img" />
                    </div>

                </div>
                <div className="vote-for-wraper">

                    <div id="transparent" />

                    <div id="transparent">
                        <img src={'/images/home1/football-player.png'} alt="img" width="50" height="50" />
                    </div>

                    <div id="transparent" />
                </div>
            </div>
        );
    };

    const finalPage = () => {

        const next = (p, img) => {
            if (p === 1) {
                setH3p2(true);
                setH3p3(true);
                setH3p4(true);
                setH3p5(true);
                setH3p6(true);
                setH3p7(true);
                addPlayerVotes(playerNames.overallNames[0]); 
                localStorage.setItem('overallNames', playerNames.overallNames[0]);     
            }

            else if (p === 2) {
                setH3p1(true);
                setH3p3(true);
                setH3p4(true);
                setH3p5(true);
                setH3p6(true);
                setH3p7(true);
                addPlayerVotes(playerNames.overallNames[1]);
                localStorage.setItem('overallNames', playerNames.overallNames[1]);   
            }
            else if (p === 3) {
                setH3p1(true);
                setH3p2(true);
                setH3p4(true);
                setH3p5(true);
                setH3p6(true);
                setH3p7(true);
                addPlayerVotes(playerNames.overallNames[2]);
                localStorage.setItem('overallNames', playerNames.overallNames[2]);   
            }
            else if (p === 4) {
                setH3p1(true);
                setH3p2(true);
                setH3p3(true);
                setH3p5(true);
                setH3p6(true);
                setH3p7(true);
                addPlayerVotes(playerNames.overallNames[3]);
                localStorage.setItem('overallNames', playerNames.overallNames[3]);   
            }
            else if (p === 5) {
                setH3p1(true);
                setH3p2(true);
                setH3p3(true);
                setH3p4(true);
                setH3p6(true);
                setH3p7(true);
                addPlayerVotes(playerNames.overallNames[4]);
                localStorage.setItem('overallNames', playerNames.overallNames[4]);   
            }
            else if (p === 6) {
                setH3p1(true);
                setH3p2(true);
                setH3p3(true);
                setH3p4(true);
                setH3p5(true);
                setH3p7(true);
                addPlayerVotes(playerNames.overallNames[5]);
                localStorage.setItem('overallNames', playerNames.overallNames[5]);   
            }
            else if (p === 7) {
                setH3p1(true);
                setH3p2(true);
                setH3p3(true);
                setH3p4(true);
                setH3p5(true);
                setH3p6(true);                
                addPlayerVotes(playerNames.overallNames[6]);
                localStorage.setItem('overallNames', playerNames.overallNames[6]);   
            }
            setLastPickImg(img);
            setTimeout(() => {
                setFinalPageDisplay(false);       
                localStorage.setItem('firstPickImg', firstPickImg);
                localStorage.setItem('secondPickImg', secondPickImg);
                localStorage.setItem('lastPickImg', img);
                localStorage.setItem('firstVotes', firstVotes);
                localStorage.setItem('secondVotes', secondVotes);
                localStorage.setItem('lastVotes', lastVotes);
                user.history.push('/my-team');
            }, 1000);
        }

        return (
            <div>
                <h1 className="heading">Overall Player of the Season:</h1>
                <div className="imgs-wraper">
                    <div className= {h3p1 ? "hidden" : "visible"} onClick={() => next(1, '/images/home3/image94cm.png')}>
                        <img className="cardimg" src={'/images/home3/image94cm.png'} alt="img" />
                    </div>
                    <div className= {h3p2 ? "hidden" : "visible"} onClick={() => next(2, '/images/home3/image95st.png')}>
                        <img className="cardimg" src={'/images/home3/image95st.png'} alt="img" />
                    </div>
                    <div className= {h3p3 ? "hidden" : "visible"} onClick={() => next(3, '/images/home3/image91cm.png')}>
                        <img className="cardimg" src={'/images/home3/image91cm.png'} alt="img" />
                    </div>
                    <div className= {h3p4 ? "hidden" : "visible"} onClick={() => next(4, '/images/home3/image99rw.png')}>
                        <img className="cardimg" src={'/images/home3/image99rw.png'} alt="img" />
                    </div>
                    <div className= {h3p5 ? "hidden" : "visible"} onClick={() => next(5, '/images/home3/image93cb.png')}>
                        <img className="cardimg" src={'/images/home3/image93cb.png'} alt="img" />
                    </div>
                    <div className= {h3p6 ? "hidden" : "visible"} onClick={() => next(6, '/images/home3/image96cb.png')}>
                        <img className="cardimg" src={'/images/home3/image96cb.png'} alt="img" />
                    </div>
                    <div className= {h3p7 ? "hidden" : "visible"} onClick={() => next(7, '/images/home3/image99st.png')}>
                        <img className="cardimg" src={'/images/home3/image99st.png'} alt="img" />
                    </div>
                </div>
                <div className="vote-for-wraper">

                    <div id="transparent" />

                    <div id="transparent">
                        <img src={'/images/home1/football-player.png'} alt="img" width="50" height="50" />
                    </div>

                    <div id="transparent" />
                </div>
            </div>
        )
    };

    return (
        <div className="home-wrapper"> 
        <HomeNavBar />
            {landingPageDisplay ? landingPage() : null}
            {middlePageDisplay ? middlePage() : null}
            {finalPageDisplay ? finalPage() : null}
        </div>
    )
}

export default withRouter(Home);
