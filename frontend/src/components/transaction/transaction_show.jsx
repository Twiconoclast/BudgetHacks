import React from 'react'
import EditTransactionFormContainer from './edit_transaction_form_container'

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
    return(
      <div>
        <div className={this.state.editFormShow ? 'hidden' : ''}>
          <div>Date: 
            {this.props.transaction.date}
          </div>
          <div>Amount:  
            {this.props.transaction.amount}
          </div>
          <div>Category: 
            {this.props.transaction.category}
          </div>
          <div>Description: 
            {this.props.transaction.description}
          </div>
        </div>
        <div className={this.state.editFormShow ? '' : 'hidden'}>
          <EditTransactionFormContainer toggleEditForm={this.toggleEditForm} transaction={this.props.transaction}/>
        </div>
      </div>
    )
  }
}

export default TransactionShow