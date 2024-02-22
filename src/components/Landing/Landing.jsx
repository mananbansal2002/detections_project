import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-page">

            <div className="login-field">

                {/* Title */}
                <div className="title">Login</div>

                {/* Email input field */}
                <div className="email-field">
                    <label for="email">Email:</label><br/>
                    <input className='email-field' id='email' type='email' placeholder="Enter your email" /><br/>
                </div>

                {/* Password field */}
                <div className="password-field">
                    <label for="password">Password:</label><br/>
                    <input className='password-field' type="password" id="password" placeholder='********' /><br/>
                </div>

                {/* Login */}
                <button className='login-button'>Login</button>
            </div>
        </div>
    )
};

export default Landing;
