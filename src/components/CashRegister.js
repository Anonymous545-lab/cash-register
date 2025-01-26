import React, { useState, useEffect } from 'react';

const CashRegister = ({ userName }) => {
    const [amount, setAmount] = useState(0);

    const addAmount = (value) => {
        setAmount(amount + value);
    };

    useEffect(() => {
        // Your useEffect logic here
        // Ensure addAmount is included as a dependency if used inside useEffect
    }, [addAmount]);

    return (
        <div>
            <h1>Cash Register</h1>
            <p>Welcome, {userName}</p>
            <button onClick={() => addAmount(10)}>Add $10</button>
            <p>Total: ${amount}</p>
        </div>
    );
};

export default CashRegister;
