import React from 'react'
import TransactionShowContainer from './transaction_show_container'
import CreateTransactionContainer from './create_transaction_container'
// import BudgetChartContainer from '../chart/budget_chart_container';
// import SpendingChartContainer from '../chart/spending_chart_container';


import {SiAddthis} from 'react-icons/si';


// import PrizeStoreContainer from '../prize_store/prize_store_container'


class TransactionIndex extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {createFormShow: false, editFormShow: false}
    this.toggleCreateForm = this.toggleCreateForm.bind(this)

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
            <TransactionShowContainer key={trans._id} transaction={trans}/>
        )
      })
    }

    let fixedBalance;
    if (this.props.balance) {
      fixedBalance = this.props.balance.toFixed(2)
    }

    return (
      <div id='transaction-page' className='dashboard'>
      <section className='transactions-section'>
        <h1>Transaction List</h1>
      <div className='transactions-div'>
        <p  className='account-balance'>Current Balance : ${fixedBalance}</p>
        <div className='button-holder'> 
        <button id='transaction-page-add-button' className='add-trans'  onClick={this.toggleCreateForm}><SiAddthis/><p>Create Transaction</p></button>
        </div>
          <div className={this.state.createFormShow ? "" : 'hidden'}> 

            <CreateTransactionContainer toggleCreateForm={this.toggleCreateForm}/>
          </div>
        <table  className='transaction-table'>
          <thead>
            <tr>
              <th>Date:</th>
              <th>Amount:</th>
              <th>Category:</th>
              <th>Description:</th>
              <th>Actions:</th>
            </tr>
          </thead>
            {tList}
        </table>

      </div>
      </section>
      </div>
    )
  }
};



export default TransactionIndex 