import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const checkBudgetValues = () =>{
        if(newBudget < totalExpenses){
            alert("Cannot reduce budget below current spending!")
            setNewBudget(totalExpenses)
        }
        if(newBudget > 20000){
            setNewBudget(20000)
            alert("Cannot exceed 20,000!")
        }
    }
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        checkBudgetValues()
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input id = "budgetID"type="number" step="10" value={newBudget} onChange={handleBudgetChange}max={"20000"}></input>
</div>
    );
};
export default Budget;
