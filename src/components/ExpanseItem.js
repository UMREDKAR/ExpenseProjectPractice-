function ExpanseItem(props)
{
   return(<div>
           <h2>Expense Items</h2>
            <p>{props.date.toISOString()}</p>
            <p>{props.tittle}</p>
            <p>Rs {props.amount}</p>
            <p>Location is : {props.locationOfExpenditure}</p>
          </div>)
}

export default ExpanseItem