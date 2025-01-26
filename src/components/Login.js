import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Login.css';

function Login({ setLoggedIn, setUserName }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = () => {
        setError('');
        // Your login logic here
    };

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    }, [handleLogin]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]); // Ensure handleKeyDown is included as a dependency

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input
                    type="text"
                    ref={usernameRef}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    autoFocus
                />
                <input
                    type="password"
                    ref={passwordRef}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button onClick={handleLogin}>Login</button>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default Login;
