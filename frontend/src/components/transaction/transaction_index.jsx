import React from 'react'
import TransactionShowContainer from './transaction_show_container'
import CreateTransactionContainer from './create_transaction_container'
import BudgetChartContainer from '../chart/budget_chart_container';
import SpendingChartContainer from '../chart/spending_chart_container';

class TransactionIndex extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {createFormShow: false, editFormShow: false}
    // this.toggleEditForm = this.toggleEditForm.bind(this)
    this.toggleCreateForm = this.toggleCreateForm.bind(this)
    console.log(this.toggleCreateForm)
  }

  componentDidMount(){
    this.props.fetchTransactions(this.props.user.id)
    this.props.fetchUser(this.props.user.id)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.transactions !== this.props.transactions){
      this.setState(this.state)
    }
  }


  toggleCreateForm(e){
    e.preventDefault()
    this.setState({createFormShow : !this.state.createFormShow})
  }

  render(){
    let tList;
    if (this.props.transactions){
      tList = this.props.transactions.map((trans)=>{
        return (
          <li key={trans._id}>
            <TransactionShowContainer key={trans._id} transaction={trans}/>
          </li>
        )
      })
    }

    let fixedBalance;
    if (this.props.balance) {
      fixedBalance = this.props.balance.toFixed(2)
    }
    return (
      <div>
        <BudgetChartContainer/>
        <SpendingChartContainer/>
        <h1>Transaction List</h1>
        <p>Current Balance : ${fixedBalance}</p>
        <button onClick={this.toggleCreateForm}>+</button>
        <ul>
          <li className={this.state.createFormShow ? "" : 'hidden'}>
            <CreateTransactionContainer toggleCreateForm={this.toggleCreateForm}/>
          </li>
            {tList}
        </ul>
      </div>
    )
  }
};



export default TransactionIndex 