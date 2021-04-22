import React from 'react'


class EditTransactionForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {user: this.props.user.id,
                  date: this.props.transaction.date,
                  amount: this.props.transaction.amount, 
                  category: this.props.transaction.category, 
                  description:this.props.transaction.description
                }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.updateTransaction(this.state)
    this.props.toggleEditForm()
  }

  handleChange(field){
    return((e)=>{
      this.setState({[field]: e.currentTarget.value})
    })
  }
  render(){
    return(
      <div>
        <button onClick={()=>this.props.toggleEditForm}>x</button>
        <form onSubmit={this.handleSubmit}>
          <label>Date:
            <input onChange={this.handleChange('date')} type="date" name='date' value={this.state.date}/>
          </label>
          <label>Amount:
            <input onChange={this.handleChange('amount')} type="number" value={this.state.amount}/>
          </label>
          <label>Category:
            <select onChange={this.handleChange('category')} name="category" >
              <option value="income">Income</option>
              <option value="home">Home</option>
              <option value="savings">Savings</option>
              <option value="transportation">Transportation</option>
              <option value="foodAndDining">Food and Dining</option>
              <option value="entertainment">Entertainment</option>
              <option value="shopping">Shopping</option>
              <option value="personalCare">Personal Care</option>
              <option value="miscellaneous">Miscellaneous</option>
              <option value="debt">Debt</option>
            </select>
          </label>
          <label>Description:
            <textarea onChange={this.handleChange('description')} name="description" value={this.state.description}></textarea>
          </label>
          <button>Edit Transaction</button>
        </form>
        <button onClick={()=>this.props.deleteTransaction}>Delete</button>
      </div>
    )
  }
}
export default EditTransactionForm