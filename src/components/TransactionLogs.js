import React, { useEffect, useState } from 'react';
import './TransactionLogs.css'; // Import the CSS file for styling

function TransactionLogs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        setLogs(savedTransactions);
    }, []);

    return (
        <div className="transaction-logs">
            <div className="logs-display">
                <h2>Transaction History</h2>
                <ul className="logs-list">
                    {logs.map((log, index) => (
                        <li key={index} className="log-item">
                            <div className="log-details">
                                <span className={`log-type ${log.type}`}>{log.type === 'add' ? 'Added' : 'Removed'}:</span> 
                                <span className="log-amount">{log.amount} Rands</span>
                            </div>
                            <div className="log-info">
                                <span className="log-date">{new Date(log.date).toLocaleString()}</span> by 
                                <span className="log-user">{log.user}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TransactionLogs;
