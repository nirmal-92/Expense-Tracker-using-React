import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ExpenseItem} from './screens/ExpenseItem.jsx'
import ExpenseTrackerForm from './screens/ExpenseTrackerForm.jsx'

function App() {
  const [income,setIncome]=useState(0);
  const [expense,setExpense]=useState(0);
  const [isEdit, setIsEdit]=useState(false)
  const [editData,setEditData]=useState(true)

  const [data,setData] = useState([{
    title:"food",
    amount:-300,
    id:1
  },{
    title:"food",
    amount:300,
    id:2
  },{
    title:"food",
    amount:300,
    id:3
  },{
    title:"food",
    amount:-300,
    id:4
  }])

  const handleClick=(value)=>{
    if(isEdit){
      const updatedData=data.map((props,index)=>{
        if(props.id === value.id){
          props.title=value.title,
          props.amount=value.amount
        }
        return props
      })
      setData(updatedData);
      setEditData({});
      setIsEdit(false);
    }
    else{
      let id=data[data.length-1].id+1
      setData([...data,{...value,id:id}])
      if(value.amount>0){
        setIncome(income+Number(value.amount))
      }
      else{
        setExpense(expense+Number(value.amount))
      }
    }
    
  }

  const handleDelete=(value)=>{
    const updatedData=data.filter(detail=>detail.id != value.id);
    setData(updatedData);
    if(value.amount>0){
      setIncome(income-Number(value.amount))
    }
    else{
      setExpense(expense-Number(value.amount))
    }
  }

  const handleEdit=(value)=>{
    setEditData(value);
    setIsEdit(true);
  }

  useEffect(()=>{
    data.map((detail,i)=>{
      if(detail.amount> 0){
        setIncome((income)=>income+detail.amount) 
      }
      else{
        setExpense((expense)=>expense+detail.amount)
      }
    })
  },[])

  return (
    <>
      <div>
        <div>Expense Tracker</div>
        <div className='income-expense-container'> 
            <div className='income'>
              <div className='title'>
                Income
              </div>
            <div>
            {income}
        </div>
      </div>
      <div className='block'></div>
        <div className='expense'>
          <div className='title'>
              Expense
          </div>
        <div>
        {expense}
      </div>
      </div>
      </div>
      </div>
      <ExpenseTrackerForm handleClick={handleClick} editData={editData} isEdit={isEdit}/>
      {data.map((props,index)=>{
        return <div key={index} className='expense-item-container'>
          <div className={`expense-item ${props.amount>0? "positive":"negative"}`}> 
            <div>
                <div>{props.title}</div>
                <div>{props.amount}</div>
            </div>
        </div>
        <button onClick={()=>handleDelete(props)}className="delete-btn">Delete</button>
        <button onClick={()=>handleEdit(props)}className='delete-btn'>Edit</button>
        </div>
      })}
    </>
  )
}
export default App