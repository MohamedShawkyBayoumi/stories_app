import React, { useState } from 'react';
import { TextInput } from '../components/UI';
import { Link } from 'react-router-dom';

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="login-signup-page">
            <div className="login-signup-page-content">
                {isLoading && (
                    <div className="loader-container">
                        <div className="loader" />
                    </div>
                )}
                <h1>Login to your Account</h1>
                <form>
                    <TextInput
                        type="text"
                        name="email"
                        required
                        onChange={() => console.log('test')}
                        label="Email Address"
                    />
                    <TextInput
                        type="password"
                        name="password"
                        required
                        onChange={() => console.log('test')}
                        label="Password"
                    />
                    <button type="submit">Login To Your Account</button>
                </form>
                <p className="own-account-p">Don't have an account? <Link to='signup'>Signup</Link></p>
            </div>
        </div>
    )
}

export default Login
