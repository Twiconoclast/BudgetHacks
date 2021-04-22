import React from 'react'

class CreateTransactionForm extends React.Component{
  constructor(props){
    super(props)
    this.state = { user: this.props.user.id,
                    date: '',
                    amount: '', 
                    category: '', 
                    description:''}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createTransaction(this.state)
    this.setState(
      { user: this.props.user.id,
      date: '',
      amount: '', 
      category: '', 
      description:''})
  }

  handleChange(field){
    return((e)=>{
      this.setState({[field]: e.currentTarget.value})
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Date:
            <input onChange={this.handleChange('date')} type="date" name='date' value={this.state.date}/>
          </label>
          <label>Amount:
            <input onChange={this.handleChange('amount')} type="text" value={this.state.amount} placeholder='19.99'/>
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
            <textarea onChange={this.handleChange('description')} name="description" id="" cols="30" rows="10" value={this.state.description}></textarea>
          </label>
          <button>Submit Transaction</button>
        </form>
      </div>
    )
  }
}
export default CreateTransactionForm