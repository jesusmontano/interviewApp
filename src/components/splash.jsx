import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {

    return (
        <div className="splash">
            <div className="get-started">
                <div>
                    Shape Your Financial Future!
                </div>
                <br/>
                <button>
                    <Link to='/risk'>Get Started</Link>
                </button>
            </div>
        </div>
    )
}

export default Splash;
