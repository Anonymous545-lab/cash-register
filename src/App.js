import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CashRegister from './components/CashRegister';
import TransactionLogs from './components/TransactionLogs';
import Login from './components/Login';
import './App.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [showWelcome, setShowWelcome] = useState(true);
    const [tab, setTab] = useState('cash_register');

    useEffect(() => {
        if (loggedIn) {
            setTimeout(() => {
                setShowWelcome(false);
            }, 3000); // Show welcome animation for 3 seconds
        }
    }, [loggedIn]);

    return (
        <Router>
            <div className="app">
                {loggedIn && !showWelcome && <NavBar setTab={setTab} userName={userName} />}
                <div className="content-container">
                    {loggedIn ? (
                        showWelcome ? (
                            <div className="welcome-container">
                                <div className="welcome-animation">
                                    <h1>{userName}! <span className="star">⭐</span></h1>
                                </div>
                                <img src="loading.gif" alt="Loading" className="loading-gif" />
                                <div className="loading-bar">
                                    <div className="loading-progress"></div>
                                </div>
                            </div>
                        ) : (
                            <div className="app-container">
                                {tab === 'cash_register' ? <CashRegister userName={userName} /> : <TransactionLogs />}
                            </div>
                        )
                    ) : (
                        <Routes>
                            <Route path="*" element={<Login setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
                        </Routes>
                    )}
                </div>
            </div>
        </Router>
    );
}

export default App;
