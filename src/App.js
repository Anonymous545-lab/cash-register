import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CashRegister from './components/CashRegister';
import Login from './components/Login';
import NavBar from './components/NavBar';
import TransactionLogs from './components/TransactionLogs';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [tab, setTab] = useState('cash_register');

    return (
        <Router>
            <div className="app-container">
                {loggedIn && <NavBar setTab={setTab} userName={userName} />}
                <Routes>
                    <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
                    {loggedIn ? (
                        <>
                            <Route path="/" element={tab === 'cash_register' ? <CashRegister userName={userName} /> : <TransactionLogs />} />
                        </>
                    ) : (
                        <Route path="/" element={<Login setLoggedIn={setLoggedIn} setUserName={setUserName} />} />
                    )}
                </Routes>
                {loggedIn && <Footer />}
            </div>
        </Router>
    );
};

export default App;
