import React, { useState } from 'react';
import { TextInput } from '../components/UI';
import { Link } from 'react-router-dom';

function Signup() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="login-signup-page">
            <div className="login-signup-page-content">
                {isLoading && (
                    <div className="loader-container">
                        <div className="loader" />
                    </div>
                )}
                <h1>Create new account</h1>
                <form>
                    <TextInput
                        type="text"
                        name="fullname"
                        required
                        onChange={() => console.log('test')}
                        label="Full Name"
                    />
                    <TextInput
                        type="text"
                        name="job"
                        required
                        onChange={() => console.log('test')}
                        label="Job Title"
                    />
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
                    <button type="submit">Create New Account</button>
                </form>
                <p className="own-account-p">Already have an account? <Link to='login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;