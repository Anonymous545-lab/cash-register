import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CashRegister from './components/CashRegister';
import LoadingScreen from './components/LoadingScreen';
import Login from './components/Login';
import NavBar from './components/NavBar';
import TransactionLogs from './components/TransactionLogs';
import './App.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [tab, setTab] = useState('cash_register');
    const [transactions, setTransactions] = useState(() => JSON.parse(localStorage.getItem('transactions')) || []);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, { ...transaction, user: userName }]);
    };

    const handleLogin = (username) => {
        setUserName(username);
        setLoading(true);
        setTimeout(() => {
            setLoggedIn(true);
            setLoading(false);
        }, 3000); // 3 seconds loading screen
    };

    if (loading) {
        return <LoadingScreen setLoading={setLoading} />;
    }

    return (
        <Router>
            <div className="app-container">
                {loggedIn && <NavBar setTab={setTab} userName={userName} />}
                <Routes>
                    <Route path="/login" element={<Login setLoggedIn={handleLogin} setUserName={setUserName} />} />
                    {loggedIn ? (
                        <>
                            <Route path="/" element={tab === 'cash_register' ? <CashRegister userName={userName} addTransaction={addTransaction} /> : <TransactionLogs transactions={transactions} />} />
                        </>
                    ) : (
                        <Route path="/" element={<Login setLoggedIn={handleLogin} setUserName={setUserName} />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
