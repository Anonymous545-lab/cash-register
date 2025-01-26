import React, { useState, useCallback } from 'react';
import './CashRegister.css';

const CashRegister = ({ userName }) => {
    const [amount, setAmount] = useState(0);
    const [inputAmount, setInputAmount] = useState(0);
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setInputAmount(Number(event.target.value));
    };

    const addAmount = useCallback((value) => {
        setAmount((prevAmount) => prevAmount + value);
        setMessage('Thank you!');
        setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds
    }, []);

    const deductAmount = useCallback((value) => {
        setAmount((prevAmount) => prevAmount - value);
        setMessage("I'm watching you!");
        setTimeout(() => setMessage(''), 2000); // Clear message after 2 seconds
    }, []);

    return (
        <div className="cash-register">
            <div className="display">
                <h1>Cash Register</h1>
                <p>Welcome, {userName}</p>
                <input
                    type="number"
                    value={inputAmount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                />
                <div className="buttons">
                    <button onClick={() => addAmount(inputAmount)}>Add Amount</button>
                    <button onClick={() => deductAmount(inputAmount)}>Deduct Amount</button>
                </div>
                <p>Total: ${amount}</p>
                {message && <p className="animation-message">{message}</p>}
            </div>
        </div>
    );
};

export default CashRegister;
