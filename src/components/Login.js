import React, { useState, useEffect, useRef } from 'react';
import './Login.css';

function Login({ setLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = () => {
        setError('');

        fetch('/credentials.txt')
            .then(response => response.text())
            .then(text => {
                const users = text.split('---').map(user => {
                    const lines = user.trim().split('\n');
                    const credentials = {};
                    lines.forEach(line => {
                        const [key, value] = line.split('=');
                        credentials[key.trim()] = value.trim();
                    });
                    return credentials;
                });

                const validUser = users.find(user => user.username === username && user.password === password);

                if (validUser) {
                    setLoggedIn(username);
                } else {
                    setError('Invalid credentials. Please try again.');
                    setTimeout(() => {
                        setError('');
                    }, 5000);
                }
            })
            .catch(err => {
                console.error('Error loading credentials:', err);
                setError('Failed to load credentials. Please try again later.');
            });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [username, password]);

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
