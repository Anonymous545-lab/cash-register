import React, { useState, useEffect, useCallback } from 'react';
import './CashRegister.css';

const CashRegister = ({ userName, addTransaction }) => {
    const [amount, setAmount] = useState(() => parseFloat(localStorage.getItem('totalAmount')) || 0);
    const [inputAmount, setInputAmount] = useState('');

    const handleInputChange = (event) => {
        setInputAmount(event.target.value);
    };

    const addAmount = useCallback((value) => {
        const amountValue = parseFloat(value);
        if (!isNaN(amountValue)) {
            setAmount((prevAmount) => prevAmount + amountValue);
            addTransaction({ type: 'add', amount: amountValue, date: new Date(), user: userName });
            setInputAmount(''); // Clear input field after adding
        }
    }, [addTransaction, userName]);

    const deductAmount = useCallback((value) => {
        const amountValue = parseFloat(value);
        if (!isNaN(amountValue)) {
            setAmount((prevAmount) => prevAmount - amountValue);
            addTransaction({ type: 'deduct', amount: amountValue, date: new Date(), user: userName });
            setInputAmount(''); // Clear input field after deducting
        }
    }, [addTransaction, userName]);

    useEffect(() => {
        localStorage.setItem('totalAmount', amount);
    }, [amount]);

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
                <p>Total: R{amount}</p>
            </div>
        </div>
    );
};

export default CashRegister;
