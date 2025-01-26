import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ setTab, userName }) {
    return (
        <nav className="nav-ribbon">
            <div className="user-name">
                {userName ? `Welcome, ${userName}` : <Link to="/login">Login</Link>}
            </div>
            <ul className="nav-list">
                <li className="nav-item" onClick={() => setTab('cash_register')}>Cash Register</li>
                <li className="nav-item" onClick={() => setTab('transaction_logs')}>Transaction Logs</li>
            </ul>
        </nav>
    );
}

export default NavBar;
