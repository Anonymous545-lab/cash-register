import React from 'react';
import './NavBar.css';

const NavBar = ({ setTab, userName }) => {
    return (
        <nav className="nav-ribbon">
            <div className="user-name">Welcome, may you have a special day</div>
            <ul className="nav-list">
                <li className="nav-item" onClick={() => setTab('cash_register')}>Cash Register</li>
                <li className="nav-item" onClick={() => setTab('transaction_logs')}>Transaction Logs</li>
            </ul>
        </nav>
    );
};

export default NavBar;
