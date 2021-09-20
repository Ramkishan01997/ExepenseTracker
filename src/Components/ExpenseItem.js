import React from 'react'
import { MdEdit,MdDelete } from 'react-icons/md';
 const ExpenseItem = ({expense, handleDelete,handleEdit}) => {
     const {id,charge,amount}=expense;
    return (
        <li className="item">
        <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">{amount}</span>
            
        </div>
        <div>
        <button  onClick={() => handleEdit(id)}
         className="edit-btn" aria-label="edit-button">
        <MdEdit/></button>
        <button onClick={()=>handleDelete(id)} className="delete-btn" aria-label="delete-button">
        <MdDelete/></button>
         </div>
        </li>
    )
}
export default ExpenseItem;