import React, { useState, useEffect, useCallback } from 'react';

const CashRegister = ({ userName }) => {
    const [amount, setAmount] = useState(0);

    const addAmount = useCallback((value) => {
        setAmount((prevAmount) => prevAmount + value);
    }, []);

    useEffect(() => {
        // Your useEffect logic here
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
