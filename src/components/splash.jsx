import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {

    return (
        <div className="splash">
            <Link to='/risk'>Get Started</Link>
        </div>
    )
}

export default Splash;

//style={{
// backgroundImage: "url(" + "https://www.kiplinger.com/kipimages/pages/15943.jpg" + ")",
//     backgroundPosition: 'center',
//         backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat'
//         }}

