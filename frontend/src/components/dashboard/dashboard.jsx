import React from 'react';
import TransactionItemContainer from './transaction_item_container';
import CreateTransactionContainer from '../transaction/create_transaction_container';
import BudgetChartContainer from '../chart/budget_chart_container';
import SpendingChartContainer from '../chart/spending_chart_container';
import {SiAddthis} from 'react-icons/si';

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


  toggleCreateForm(e){
    this.setState({createFormShow : !this.state.createFormShow})
  }

  render(){
    let transactionsList;
    if (this.props.transactions){
      transactionsList = this.props.transactions.map((trans)=>{
        return <TransactionItemContainer key={trans._id} transaction={trans}/>
      })
    }
    return (
      <div className='dashboard'>
        <section className='charts-section'>
          <h1>Your Charts</h1>
          <div className='charts-div'>
            <BudgetChartContainer/>
            <SpendingChartContainer/>
          </div>
        </section>
        <section className='transactions-section'>
          <h1>Transactions List</h1>
          <div className='transactions-div'>
          <p className='account-balance'>Current Account Balance: ${this.props.balance}</p>
            <div className='button-holder'> 
              <button className='add-trans' onClick={this.toggleCreateForm}>
                  <SiAddthis/><p>Create Transaction</p>
              </button>
            </div>
            <div className={this.state.createFormShow ? "" : 'hidden'}>
              <CreateTransactionContainer/>
            </div>
          <table className='transaction-table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactionsList}
            </tbody>
          </table>
          </div>
        </section>
      </div>
    )
  }
};



export default TransactionIndex 