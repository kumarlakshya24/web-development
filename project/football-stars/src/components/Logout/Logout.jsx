import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Logout.css'

const Logout = (user) => {

    useEffect(() => {
        setTimeout(() => {
            fetch('/logout')
            .then(response => response.json())
                .then(json => {
                    if (json.logout === 'success')
                    {
                        user.history.push('/');
                    }
            });                
    }, 500);
});

return (
    <div className="logging-out">
    </div>
)
}

export default withRouter(Logout);
