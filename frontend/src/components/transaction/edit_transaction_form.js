import React from 'react'
import { fetchUser } from '../../util/user_util'


class EditTransactionForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {user: this.props.user.id,
                  date: this.props.transaction.date,
                  amount: Number(this.props.transaction.amount), 
                  category: this.props.transaction.category, 
                  description:this.props.transaction.description,
                  _id: this.props.transaction._id
                }
                console.log(this.props.toggleEditForm)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state)
    this.props.updateTransaction(this.state)
    .then(() => {this.props.fetchUser(this.props.user.id)
                  this.props.toggleEditForm(e)})
      // .then(() => this.props.getTransaction(this.props.transaction._id))
    // this.props.toggleEditForm()
  }

  handleChange(field){
    return((e)=>{
      let value = e.currentTarget.value
      this.setState({[field]: value})
    })
  }
  render(){
    let defaultCat = this.state.category
    let defaultDate = this.state.date
    return(
      <div>
        <button onClick={this.props.toggleEditForm}>x</button>
        <form onSubmit={this.handleSubmit}>
          <label>Date:
            <input onChange={this.handleChange('date')} type="date" name='date' value={this.state.date}/>
          </label>
          <label>Amount:
            <input onChange={this.handleChange('amount')} type="text" value={this.state.amount}/>
          </label>
          <label>Category:
            <select defaultValue={defaultCat} onChange={this.handleChange('category')} name="category" >
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
            <input type='text' onChange={this.handleChange('description')} name="description" value={this.state.description}/>
          </label>
          <button type='submit'>Edit Transaction</button>
        </form>
        <button onClick={() => {
          return this.props.deleteTransaction(this.props.transaction._id)
            .then(() => this.props.fetchUser(this.props.user.id))
          }}>Delete</button>
      </div>
    )
  }
}
export default EditTransactionForm