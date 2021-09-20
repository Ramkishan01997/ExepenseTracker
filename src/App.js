import React,{useState,useEffect} from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import Alert from './Components/Alert';
import ExpenseList from './Components/ExpenseList';
// import uuid from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';
function App() {
  
const initialExpenses=localStorage.getItem("expenses")?
JSON.parse(localStorage.getItem("expenses")):[];

  // useState
  const [expenses,setExpenses]=useState(initialExpenses)
  //functionality how to add charge
  const[charge,setCharge]=useState("")
  // how to set amount
  const[amount,setAmount]=useState('');
  // handling function
  const[alert,setAlert]=useState({show:false});

  const[edit,setEdit]=useState(false);

  const[id,setId]=useState(0);

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses))
    //inputRef.current.focus()
  },[expenses]);


  const handleCharge=e=>{
    setCharge(e.target.value)
  };
  const handleAmount=e=>{
    setAmount(e.target.value);
    
  };
//handle alert
const handleAlert = ({ type, text }) => {
  setAlert({ show: true, type, text });
  setTimeout(() => {
    setAlert({ show: false });
  }, 2500);
};
//
  const handleSubmit=e=>{
    e.preventDefault();
    

console.log(charge,amount)
if(charge!=='' && amount>0){
if(edit){
let tempExpenses=expenses.map(item=>{
  return item.id===id? {...item,charge,amount}:item
})
setExpenses(tempExpenses);
setEdit(false);
handleAlert({type:"success" ,text:"item editrd"})
}
else{
  const singleExpense={id:uuidv4(),charge,amount};
setExpenses([...expenses,singleExpense])
handleAlert({type:"success",text:"item added"});

}
setCharge("");
setAmount("");
}
else{
handleAlert({type:"danger",
text:"charge cant be empty and amount must be greater than 0"})
}
  }
  //clear all
  const clearItems=()=>{
    setExpenses([]);
    handleAlert({type:"danger",text:"Deleted all items"})
    
  }
// delete item
const handleDelete=(id)=>{


  setExpenses(expenses.filter(item=>item.id!==id))
handleAlert({type:"danger", text:"item deleted"})
}
//edit function
 const handleEdit=id=>{
 
   let expense=expenses.find(item=>item.id===id);
   let{charge,amount}=expense;
   setCharge(charge);
   setAmount(amount);
   setEdit(true);
   setId(id);
 }

  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text}/>}
  
  <h1> Expense Tracker</h1>
  <main className="App">
  <ExpenseForm charge={charge} amount={amount}
  handleCharge={handleCharge}
  handleAmount={handleAmount}
  handleSubmit={handleSubmit}
  clearItems={clearItems}
  edit={edit}/>
  <ExpenseList expenses={expenses} clearItems={clearItems}
  handleDelete={handleDelete}
  handleEdit={handleEdit}/>
 
  </main>
  <h1>
  Total spending :<span className="total">
  ₹{expenses.reduce((acc,curr)=>{
    return (acc+=parseInt(curr.amount));
  },0)}</span>
  </h1>
 </>
  );
}

export default App;
