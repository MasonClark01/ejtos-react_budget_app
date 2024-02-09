import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () =>{
    let { currency, dispatch } = useContext(AppContext)
    const [newCurrency, setNewCurrency] = useState(currency)
    const changeCur = (event) =>{
        setNewCurrency(event.target.value)
        dispatch(
            {
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            }
        )
    }
    return(
        <div>
            <select onChange={changeCur} id='currentCurrency' value={newCurrency} style={{backgroundColor: "lightgreen", padding: "8px"}}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    )
}
export default CurrencyDropdown
