import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';

const Login = (user) => {
    
    useEffect(() => {
        fetch('/session')
        .then(response => response.json())
            .then(json => {
                if (json.set === 'active')
                {
                    user.history.push('/home');
                }
        });
    })

    const onSubmitLoginForm = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const options = {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                        "Content-type": "application/json"
                    },
            credentials:'include'
        }
        fetch('/login', options)
            .then(response => response.json())
            .then(json => {
                if (json.login === 'success')
                {
                    user.history.push('/');
                }
            });
    }

    return (
        <div className="login-wrapper">
            <div className="login-img" />
            <div className="login-form">
                <div className="login-form-wrapper">
                    <h1>WELCOME TO FOOTBALL STARS!</h1>
                    <p>Login to vote for your favorite soccer players!</p>
                    <div className="container">
                        <form onSubmit={(e) => onSubmitLoginForm(e)}>
                            <div className="input-field">
                                <input name = "username" type="text" required pattern="[A-Za-z0-9]+" onChange={(e) => (e.target.value)} />
                                <label>Choose a Username</label>
                            </div>
                            <div className="input-field">
                                <input name="password" type="password" required onChange={(e) => (e.target.value)}  />
                                <label>Enter your Password</label>
                            </div>
                            <button className="login-btn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);
