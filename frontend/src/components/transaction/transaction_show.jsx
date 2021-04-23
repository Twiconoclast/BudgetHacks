import React from 'react'
import EditTransactionFormContainer from './edit_transaction_form_container'
import {SiAddthis} from 'react-icons/si';

class TransactionShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editFormShow: false
    }
    this.toggleEditForm = this.toggleEditForm.bind(this)
  }
  componentDidMount(){
    this.props.getTransaction(this.props.transaction._id)
  }

  toggleEditForm(e){
    e.preventDefault()
    this.setState({editFormShow: !this.state.editFormShow})
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
      <div>
                {/* <thead>
                  <tr className='transaction-table-row'>
                    <th>Date:</th>
                    <th>Amount:</th>
                    <th>Category:</th>
                    <th>Description:</th>
                  </tr>
                </thead> */}
                  <tr className='transaction-table-row'>
                    <td>{this.props.transaction.date}</td>
                    <td>{this.props.transaction.amount}</td>
                    <td>{category}</td>
                    <td>{this.props.transaction.description}</td>
                    <td><button onClick={this.toggleEditForm}>Edit</button></td>
                  </tr>
                  <tr className={this.state.editFormShow ? '' : 'hidden'}>
                    <td><EditTransactionFormContainer toggleEditForm={this.toggleEditForm} transaction={this.props.transaction}/></td>
                  </tr>

        {/* <div className={this.state.editFormShow ? '' : 'hidden'}>
          <EditTransactionFormContainer toggleEditForm={this.toggleEditForm} transaction={this.props.transaction}/>
        </div> */}
      </div>
    )
  }
}


export default TransactionShow