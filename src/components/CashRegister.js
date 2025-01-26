import React, { useState } from 'react';

const CashRegister = ({ userName }) => {
    const [amount, setAmount] = useState(0);
    const [inputAmount, setInputAmount] = useState(0);

    const handleInputChange = (event) => {
        setInputAmount(Number(event.target.value));
    };

    const addAmount = () => {
        setAmount((prevAmount) => prevAmount + inputAmount);
        setInputAmount(0); // Reset input field after adding
    };

    const deductAmount = () => {
        setAmount((prevAmount) => prevAmount - inputAmount);
        setInputAmount(0); // Reset input field after deducting
    };

    return (
        <div>
            <h1>Cash Register</h1>
            <p>Welcome, {userName}</p>
            <input
                type="number"
                value={inputAmount}
                onChange={handleInputChange}
                placeholder="Enter amount"
            />
            <button onClick={addAmount}>Add Amount</button>
            <button onClick={deductAmount}>Deduct Amount</button>
            <p>Total: ${amount}</p>
        </div>
    );
};

export default CashRegister;
