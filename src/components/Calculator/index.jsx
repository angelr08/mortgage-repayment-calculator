import React from 'react';
import calculatorIcon from '../../assets/images/icon-calculator.svg';
import { Context } from '../../Context';
import './Calculator.css';

function Calculator() {
    const { mortgageAmount, setMortgageAmount, mortgageTerm, setMortgageTerm, interestRate, setInterestRate, mortgageType, setMortgageType, calculateMortgage, setShowResults } = React.useContext(Context);
    const [errors, setErrors] = React.useState({});
    

    const handleMortgageTypeChange = (e) => {
        setMortgageType(e.target.value);
    }

    const validateInputs = () => {
       const newErrors = {};

        if(!mortgageAmount) {
            newErrors.mortgageAmount = 'This field is required';
        }
          if(!mortgageTerm) {
            newErrors.mortgageTerm = 'This field is required';
        }
        if(!interestRate) {
            newErrors.interestRate = 'This field is required';
        }
         if(!mortgageType) {
            newErrors.mortgageType = 'This field is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }

    const CleanInputs = () => {
        setMortgageAmount('');
        setMortgageTerm('');
        setInterestRate('');
        setMortgageType('');
        setErrors({});
        setShowResults(false);
    }

    return (
        <form className='calculator'>
            <div className='calculator-header'>
                <h1>Mortgage Calculator</h1>
                <span
                onClick={CleanInputs}
                >
                    Clear All
                </span>
            </div>
            <label className='input-container input-container_amount'>
                <span className='input-container_title'>Mortgage Amount</span>
                <div className={errors.mortgageAmount ? 'input-error' : ''}>
                    <span className={errors.mortgageAmount ? 'span-error' : ''}>$</span>
                    <input 
                        className='input-amount'
                        type="number" 
                        required 
                        value={mortgageAmount}
                        onChange={
                            (e) => {setMortgageAmount(e.target.value)
                        }
                    }
                    />
                </div>
                {errors.mortgageAmount && <span className='error-message'>{errors.mortgageAmount}</span>}
            </label>
            <div className='term-rate-container'>
                <label className='input-container input-container_term'>
                    <span className='input-container_title'>Mortgage Term</span>
                    <div className={errors.mortgageTerm ? 'input-error' : ''}>
                        <input
                            className='input-term' 
                            type="number" 
                            required 
                            value={mortgageTerm}
                            onChange={
                                (e) => {setMortgageTerm(e.target.value)
                            }
                        }
                        />
                        <span className={errors.mortgageTerm ? 'span-error' : ''}>years</span>
                    </div>
                    {errors.mortgageTerm && <span className='error-message'>{errors.mortgageTerm}</span>}
                </label>
                <label className='input-container input-container_interest'>
                    <span className='input-container_title'>Interest Rate</span>
                    <div className={errors.interestRate ? 'input-error' : ''}>
                        <input
                            className='input-interest' 
                            type="number" 
                            required
                            value={interestRate}
                            onChange= {
                                (e) => {
                                    setInterestRate(e.target.value)
                                }
                            }
                            />
                        <span className={errors.interestRate ? 'span-error' : ''}>%</span>
                    </div>
                    {errors.interestRate && <span className='error-message'>{errors.interestRate}</span>}
                </label>
            </div>
            <div className='type-container'>
                <span className='input-container_title'>Mortgage Type</span>
                <label className='input-container_type'>
                    <input 
                    type="radio" 
                    name="mortgage-type" 
                    required
                    value="repayment"
                    onChange={handleMortgageTypeChange} 
                    />
                    Repayment
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="mortgage-type" 
                        required
                        value="interest-only"
                        onChange={handleMortgageTypeChange} 
                    />
                    Interest Only
                </label>
                {errors.mortgageType && <span className='error-message'>{errors.mortgageType}</span>}
            </div>
            <div className='button-container'>
                <button 
                type="submit"
                onClick={
                    (e) => {
                        e.preventDefault();
                        if(validateInputs()) {
                            setShowResults(true);
                            calculateMortgage();
                        }
                    }
                }
                >
                    <span>
                        <img src={calculatorIcon} alt="Calculator icon" />
                    </span>
                    Calculate Repayments
                </button>
            </div>
        </form>
    )
}

export { Calculator }