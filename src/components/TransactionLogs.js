import React from 'react';
import './TransactionLogs.css';

const TransactionLogs = ({ transactions }) => {
    return (
        <div className="transaction-logs">
            <div className="logs-display">
                <h2>Transaction History</h2>
                <ul className="logs-list">
                    {transactions.map((log, index) => (
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
};

export default TransactionLogs;
