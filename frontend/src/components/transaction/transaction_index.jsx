import React from 'react'
import TransactionShowContainer from './transaction_show_container'
import CreateTransactionContainer from './create_transaction_container'
import VerticalBar from '../chart/chart.js';

class TransactionIndex extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {createFormShow: false, editFormShow: false}
    // this.toggleEditForm = this.toggleEditForm.bind(this)
    this.toggleCreateForm = this.toggleCreateForm.bind(this)

  }

  componentDidMount(){
    this.props.fetchTransactions(this.props.user.id)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.transactions !== this.props.transactions){
      this.setState(this.state)
    }
  }

  // toggleEditForm(e){
  //   e.preventDefault()
  //   this.state.editFormShow ? 'hidden' : ''
  // }

  toggleCreateForm(e){
    this.setState({createFormShow : !this.state.createFormShow})
  }

  render(){
    let tList;
    if (this.props.transactions){
      tList = Object.values(this.props.transactions).map((trans)=>{
        return (
          <li key={trans._id}>
            <TransactionShowContainer key={trans._id} transaction={trans}/>
          </li>
        )
      })
    }
    return (
      <div>
        < VerticalBar />
        <h1>Transaction List</h1>
        <p>Current Balance : ${this.props.balance}</p>
        <button onClick={this.toggleCreateForm}>+</button>
        <ul>
          <li className={this.state.createFormShow ? "" : 'hidden'}>
            <CreateTransactionContainer/>
          </li>
            {tList}
        </ul>
      </div>
    )
  }
};



export default TransactionIndex 