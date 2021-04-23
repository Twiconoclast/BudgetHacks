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
      if (field === 'amount') {
        value = Number(e.currentTarget.value)
      }
      console.log(typeof value)
      this.setState({[field]: value})
    })
  }
  render(){
    return(
      <div className='create-trans-section'>
        <h1>Enter New Transaction Details Below:</h1>
        <form className='create-trans-form' onSubmit={this.handleSubmit}>
          <label>Date:
            <input onChange={this.handleChange('date')} type="date" name='date' value={this.state.date}/>
          </label>
          <label>Amount:
            <input onChange={this.handleChange('amount')} type="number" value={this.state.amount} placeholder='19.99'/>
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
            <textarea onChange={this.handleChange('description')} name="description" id="" cols="30" rows="10" value={this.state.description}></textarea>
          </label>
        </form>
        <div className='create-button-holder'>
        <button className='create-button'>Submit Transaction</button>
        </div>
      </div>
    )
  }
}
export default CreateTransactionForm