import React from 'react'
import EditTransactionFormContainer from './edit_transaction_form_container'
// import {SiAddthis} from 'react-icons/si';

class TransactionShow extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   editFormShow: false
    // }
    this.toggleEditForm = this.toggleEditForm.bind(this)
    this.state = {submitData: {user: this.props.user.id,
                  date: this.props.transaction.date,
                  amount: Number(this.props.transaction.amount), 
                  category: this.props.transaction.category, 
                  description:this.props.transaction.description,
                  _id: this.props.transaction._id},
                  editFormShow: false
                }
  }
  componentDidMount(){
    this.props.getTransaction(this.props.transaction._id)
  }

  toggleEditForm(e){
    e.preventDefault()
    this.setState({editFormShow: !this.state.editFormShow})
  }

  handleChange(field){
    return((e)=>{
      let value = e.currentTarget.value
      this.setState({submitData: {[field]: value}})
    })
  }

  render(){
    let category = this.props.transaction.category.slice(0, 1).toUpperCase() + this.props.transaction.category.slice(1)
    if (category === 'FoodAndDining') {
            category = 'Food and Dining'
          }
    if (category === 'PersonalCare') {
            category = 'Personal Care'
          }
    return(
      <tbody>
                {/* <thead>
                  <tr className='transaction-table-row'>
                    <th>Date:</th>
                    <th>Amount:</th>
                    <th>Category:</th>
                    <th>Description:</th>
                  </tr>
                </thead> */}
                  <tr className={this.state.editFormShow ? 'hidden' : 'transaction_info'}>
                    <td className='transaction-date'>{this.props.transaction.date}</td>
                    <td className='transaction-amount'>{this.props.transaction.amount}</td>
                    <td className='transaction-category'>{category}</td>
                    <td className='transaction-description' >{this.props.transaction.description}</td>
                    <td className='table-cell'><button onClick={this.toggleEditForm}>Edit</button></td>
                  </tr>
                    <EditTransactionFormContainer editFormShow={this.state.editFormShow} toggleEditForm={this.toggleEditForm} transaction={this.props.transaction}/>

        {/* <div className={this.state.editFormShow ? '' : 'hidden'}>
          <EditTransactionFormContainer toggleEditForm={this.toggleEditForm} transaction={this.props.transaction}/>
        </div> */}
      </tbody>
    )
  }
}


export default TransactionShow