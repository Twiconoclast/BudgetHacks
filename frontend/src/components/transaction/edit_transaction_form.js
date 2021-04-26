import React from 'react'
// import { fetchUser } from '../../util/user_util'


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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
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
    // let defaultCat = this.state.category
    // let defaultDate = this.state.date
    return(
      <tr className={this.props.editFormShow ? 'transaction_info' : 'hidden'}>
     
                    <td className='hidden'><form onSubmit={this.handleSubmit} ><input type='hidden'/></form></td>
                    <td className='transaction-date'><input onChange={this.handleChange('date')} type="date" name='date' value={this.state.date}/></td>
                    <td className='transaction-amount'><input onChange={this.handleChange('amount')} type="text" value={this.state.amount}/></td>
                    <td className='transaction-category'><select onChange={this.handleChange('category')} name="category" >
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
                    </select></td>
                    <td className='transaction-description'><input type='text' onChange={this.handleChange('description')} name="description" value={this.state.description}/></td>
                    <td><button onClick={this.handleSubmit} type='submit'>Submit</button>
                    <button onClick={this.props.toggleEditForm}>Close</button>
                    <button onClick={() => {
                        return this.props.deleteTransaction(this.props.transaction._id)
                          .then(() => this.props.fetchUser(this.props.user.id))
                          }}>Delete</button></td>
        
  
      </tr>
    )
  }
}
export default EditTransactionForm