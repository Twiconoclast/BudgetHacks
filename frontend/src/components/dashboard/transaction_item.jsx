import React from 'react'

class TransactionItem extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getTransaction(this.props.transaction._id)
  }

  render(){
    return(
      <tr className='transaction_info'>
          <td className='transaction-date'>{this.props.transaction.date}</td>
          <td className='transaction-description'>{this.props.transaction.description}</td>
          <td className='transaction-category'>{this.props.transaction.category}</td>
          <td className='transaction-amount'>{this.props.transaction.amount}</td>
      </tr>
    )
  }
}

export default TransactionItem