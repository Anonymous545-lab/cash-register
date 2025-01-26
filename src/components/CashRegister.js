import React, { useState, useEffect, useRef } from 'react';
import './CashRegister.css'; // Import the CSS file for styling

function CashRegister({ userName }) {
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const inputRef = useRef(null);
    const [animationMessage, setAnimationMessage] = useState('');
    const [animationType, setAnimationType] = useState('');

    useEffect(() => {
        const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        setTransactions(savedTransactions);
        setTotal(savedTransactions.reduce((acc, txn) => {
            return txn.type === 'add' ? acc + txn.amount : acc - txn.amount;
        }, 0));
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                addAmount();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [amount]);

    const addAmount = () => {
        if (amount !== 0) {
            updateTransactions({ amount: parseFloat(amount), type: 'add', user: userName, date: new Date().toISOString() });
            inputRef.current.value = ''; // Clear the input field
            triggerAnimation('You are such a star!', 'add');
        }
    };

    const deductAmount = () => {
        if (amount !== 0) {
            updateTransactions({ amount: parseFloat(amount), type: 'deduct', user: userName, date: new Date().toISOString() });
            inputRef.current.value = ''; // Clear the input field
            triggerAnimation('I am watching you!', 'deduct');
        }
    };

    const updateTransactions = (transaction) => {
        const newTransactions = [...transactions, transaction];
        setTransactions(newTransactions);
        localStorage.setItem('transactions', JSON.stringify(newTransactions));
        setTotal(transaction.type === 'add' ? total + transaction.amount : total - transaction.amount);
    };

    const handleAmountChange = (event) => {
        const value = event.target.value;
        if (!isNaN(value)) {
            setAmount(value);
        }
    };

    const triggerAnimation = (message, type) => {
        setAnimationMessage(message);
        setAnimationType(type);
        setTimeout(() => {
            setAnimationMessage('');
            setAnimationType('');
        }, 3000); // Animation duration
    };

    return (
        <div className="cash-register">
            <div className="display">
                <input
                    type="number"
                    ref={inputRef}
                    onChange={handleAmountChange}
                    placeholder="Enter amount in Rands"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            addAmount();
                        }
                    }}
                />
                <div className="buttons">
                    <button onClick={addAmount}>Add</button>
                    <button onClick={deductAmount}>Deduct</button>
                </div>
                <h3>Total Amount: {total} Rands</h3>
                {animationMessage && (
                    <div className={`animation-message ${animationType}`}>
                        <img src="robot.png" alt="robot" className="robot" />
                        <span>{animationMessage}</span>
                        <div className="star-effect">⭐</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CashRegister;
