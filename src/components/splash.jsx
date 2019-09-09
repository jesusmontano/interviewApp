import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {

    return (
        <div className="splash">
            <div className="get-started">
                <Link to='/risk'>Get Started</Link>
            </div>
        </div>
    )
}

export default Splash;
