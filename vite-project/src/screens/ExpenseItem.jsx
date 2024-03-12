import React from 'react'
export const ExpenseItem =(props)=>{
    return <div className="expense-item-container">
        {/* Expenditure */}
        <div className={`expense-item ${props.amount>0? "positive":"negative"}`}> 
            <div>
                <div>{props.title}</div>
                <div>{props.amount}</div>
            </div>
        </div>
        <button className="delete-btn">Delete</button>
    </div>
}