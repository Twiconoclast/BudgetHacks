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
    console.log(this.state)
    this.props.createTransaction(this.state)
    .then(() => {this.props.fetchUser(this.props.user.id)
                  this.props.toggleCreateForm(e)})
    
    this.setState(
      { user: this.props.user.id,
      date: '',
      amount: '', 
      category: '', 
      description:''})
  }

  handleChange(field){
    return((e)=>{
      let value = e.currentTarget.value
      this.setState({[field]: value})
    })
  }
  render(){
    return(
      <div className='create-trans-section'>
        <h1>Enter New Transaction Details Below:</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='create-trans-form'>
            <label>Date:
              <input onChange={this.handleChange('date')} type="date" name='date' value={this.state.date}/>
            </label>
            <label>Amount:
              <input onChange={this.handleChange('amount')} type="text" value={this.state.amount} placeholder='19.99'/>
            </label>
            <label>Category:
              <select defaultValue='' onChange={this.handleChange('category')} name="category" >
                <option value='' disabled>---select---</option>
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
              <input type='text' onChange={this.handleChange('description')} name="description" id="" value={this.state.description}/>
            </label>
          </div>
          <div className='create-button-holder'>
            <button type='submit' className='create-button'>Submit Transaction</button>
          </div>
        </form>
      </div>
    )
  }
}
export default CreateTransactionForm