import { useEffect, useState } from "react"

const ExpenseTrackerForm=(props)=>{
    const [errors, setErrors]=useState({});
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState(0);
    const [date,setDate]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
            if(!title && amount===0){
                setErrors({...errors,title:"Title is required",amount:"Amount is required",date:"Date is required"})
            }else if(amount===0){
                setErrors({...errors,title:"",amount:"Enter a vaild amount"})
            }else if(!title){
                setErrors({...errors,title:"Enter a title",amount:""})
            }else if(!date){
                setErrors({...errors,title:"",amount:"",date:"Enter a Date"})
            }else{
                if(props.isEdit){
                    props.handleClick({title,amount,id:props.editData.id})
                }
                else{
                    props.handleClick({title,amount})
                }
                setTitle("");
                setAmount("");
                setDate("")
            }
    }
    const handleChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleChangeAmount=(e)=>{
        setAmount(e.target.value)
    }
    const handleChangeDate=(e)=>{
        setDate(e.target.value)
    }
    useEffect(()=>{
        if(props.isEdit){
            setTitle(props.editData.title)
            setAmount(props.editData.amount)
        }
    },[props.isEdit])
    console.log(errors)
    return <form className="form" onSubmit={handleSubmit}>
        <div className="input-container" onSubmit={handleChangeTitle}>
            
            <div>Title</div>
            <input type="text" onChange={handleChangeTitle} className="input" value={title}/>
            {errors.title && <div className="error">title is required</div>}

            <div>Amount</div>
            <input type="number" onChange={handleChangeAmount} className="input" value={amount}/>
            {errors.amount && <div className="error">amount is required</div>}

            <div>Date</div>
            <input type="date" onChange={handleChangeDate} className="input" value={date} />
            {errors.date && <div className="error"> Date is required </div>}

            <button type="submit">Add Transaction</button>
        </div>
    </form>
}
export default ExpenseTrackerForm