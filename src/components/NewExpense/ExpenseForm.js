import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

   //const [enteredTitle, setEnteredTitle] = useState('');
   //const [enteredAmount, setEnteredAmount] = useState('');
   //const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    });

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle : event.target.value
        });
        console.log(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
        console.log(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate : event.target.value
        });
        console.log(event.target.value);
    };

    return <form>
        <div className='new-expense__control'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min={0.01} step={0.01} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min={"2019-01-01"} max={"2023-01-29"} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__control'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm