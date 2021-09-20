import React from 'react'
import { MdSend } from 'react-icons/md'


export const ExpenseForm = ({
    handleCharge,
    handleAmount,
    handleSubmit,
    amount,charge,edit}) => {
    return (
     <form  onSubmit={handleSubmit}>
     <div className="form-center">
     <div className="form-group">
     <label htmlFor="expense">Items Name</label>
     <input type="text"
     className="form-control"
     id="charge"
     name="charge"
     value={charge}
    onChange={handleCharge}
     placeholder="e.g shopping"/>
     </div>

     <div className="form-group">
     <label htmlFor="charge">Amount</label>
     <input type="text"
     className="form-control"
     id="amount"
     name="amount"
     value={amount}
     onChange={handleAmount}
     placeholder="100"

     />
     </div> 
     </div>
     
     <button type="submit" className="btn" id="submit">
     {edit? 'edit':'submit'} <MdSend className="btn-icon"/></button>
     </form>
    )
}

export default ExpenseForm