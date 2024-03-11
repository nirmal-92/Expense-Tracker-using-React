const ExpenseTrackerForm=()=>{
    return <form className="form">
        <div className="input-container">
            <div>Title</div>
            <input type="text" />
            <div className="error">error</div>

            <div>Amount</div>
            <input type="number" className="input"/>
            <div className="error">error</div>
            <button type="submit">Add Transaction</button>
        </div>
    </form>
}
export default ExpenseTrackerForm