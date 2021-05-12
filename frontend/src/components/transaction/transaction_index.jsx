import React from 'react'
import {GrPowerReset} from 'react-icons/gr'
import TransactionShowContainer from './transaction_show_container'
import CreateTransactionContainer from './create_transaction_container'
// import BudgetChartContainer from '../chart/budget_chart_container';
// import SpendingChartContainer from '../chart/spending_chart_container';


import {SiAddthis} from 'react-icons/si';


// import PrizeStoreContainer from '../prize_store/prize_store_container'


class TransactionIndex extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {createFormShow: false, editFormShow: false, selectedCategory: this.props.selectedCategory, selectedDate: this.props.selectedDate, categorySelectForm: false, dateSelectForm: false}
    this.toggleCreateForm = this.toggleCreateForm.bind(this)
    this.toggleCategoryForm = this.toggleCategoryForm.bind(this)
    this.toggleDateForm = this.toggleDateForm.bind(this)
    this.handleDateReset = this.handleDateReset.bind(this)
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

  handleCategorySelect(category) {
    this.setState({selectedCategory: category})
  }

  sliceDate(date) {
    return date.slice(0, 7)
  }

  handleDateSelect(date) {
    this.setState({selectedDate: this.sliceDate(date)})
    this.toggleDateForm()
  }

  handleDateReset() {
    this.setState({selectedDate: "yyyy-MM-dd"})
    this.toggleDateForm()
  }
  
  toggleCategoryForm() {
    this.setState({categorySelectForm : !this.state.categorySelectForm})
  }

  toggleDateForm() {
    this.setState({dateSelectForm : !this.state.dateSelectForm})
  }

  toggleCreateForm(){
    this.setState({createFormShow : !this.state.createFormShow})
  }

  render(){
    let tList;
    if (this.props.transactions){
      tList = this.props.transactions.map((trans)=>{
        if ((this.state.selectedCategory === 'all' || this.state.selectedCategory === trans.category) && (this.state.selectedDate === "yyyy-MM-dd" || this.state.selectedDate === this.sliceDate(trans.date))  ){
        return (
            <TransactionShowContainer key={trans._id} transaction={trans}/>
        )
      } else {
        return <tbody className='hidden' key={trans._id} ></tbody>
      }
    }
    )
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
              <th className={!this.state.dateSelectForm ? '' : 'hidden'}>Date <span className='add-pointer' onClick={this.toggleDateForm}>+</span></th>
              <th className={this.state.dateSelectForm ? 'date-stuff' : 'hidden'}>
                <label>Date <span className='add-pointer' onClick={this.toggleDateForm}>+</span>
                <br/>
                <input
                  onKeyDown={(e) => e.preventDefault()}
                  disableentry='true'
                  // placeholder="dd-mm-yyyy"
                  min="1997-01-01" 
                  onChange={(e) => this.handleDateSelect(e.currentTarget.value)} type="date" name='date'/>
              </label>
              <button onClick={() => this.handleDateReset()}><GrPowerReset/></button>
            </th>
              <th>Amount:</th>
              <th className={!this.state.categorySelectForm ? '' : 'hidden'}>Category <span className='add-pointer' onClick={this.toggleCategoryForm}>+</span></th>
                <th className={this.state.categorySelectForm ? '' : 'hidden'}>
                  <label>Category <span className='add-pointer' onClick={this.toggleCategoryForm}>+</span>
                  <br/>
                  <select defaultValue='' onChange={(e) => this.handleCategorySelect(e.currentTarget.value)} name="category" >
                    <option value='' disabled>---select---</option>
                    <option value="all">All Transactions</option>
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
                </th>
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