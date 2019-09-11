import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {

    return (
        <div className="splash">
            <div className="get-started">
                <div className="tagline">
                    Shape Your Financial Future!
                </div>
                <br/>
                <div>
                    Adjust Your Portfolio at JMCP
                </div>
                <br/>
                <button>
                    <Link to='/risk' style={{ textDecoration: 'none', color: 'black' }}>Get Started!</Link>
                </button>
            </div>
        </div>
    )
}

export default Splash;
