import React from 'react'

const Context = React.createContext();

function ContextProvider({ children }) {
    const [showResults, setShowResults] = React.useState(false);
    const [mortgageAmount, setMortgageAmount] = React.useState('');
    const [mortgageTerm, setMortgageTerm] = React.useState('');
    const [interestRate, setInterestRate] = React.useState('');
    const [mortgageType, setMortgageType] = React.useState('');

    const calculateMortgage = () => {
        const amount = Number(mortgageAmount);
        const term = Number(mortgageTerm);
        const interest = Number(interestRate);
        if (mortgageType === 'repayment') {
            const monthlyInterestRate = interest / 100 / 12;
            const numberOfPayments = term * 12;
            const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
            return monthlyPayment;
        } else if (mortgageType === 'interest-only') {
            const monthlyPayment = (amount * (interest / 100)) / 12;
            return monthlyPayment;
        }
    }

    const monthlyPayment = calculateMortgage();
    const totalPayment = monthlyPayment * 12;

    return (
        <Context.Provider 
        value={{ showResults, setShowResults, mortgageAmount, setMortgageAmount, mortgageTerm, setMortgageTerm, interestRate, setInterestRate, mortgageType, setMortgageType, calculateMortgage, monthlyPayment, totalPayment }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }