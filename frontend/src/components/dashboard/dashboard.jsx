import React from 'react';
import CreateTransactionContainer from '../transaction/create_transaction_container';
import BudgetChartContainer from '../chart/budget_chart_container';
import SpendingChartContainer from '../chart/spending_chart_container';
import {SiAddthis} from 'react-icons/si';
import {FaGift} from 'react-icons/fa';
import {RiMoneyDollarBoxFill} from 'react-icons/ri';
import {IoEnterSharp} from 'react-icons/io5';
import {Link} from 'react-router-dom'
// import { slice } from 'lodash';

class Dashboard extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {createFormShow: false, editFormShow: false}
    // this.toggleEditForm = this.toggleEditForm.bind(this)
    this.toggleCreateForm = this.toggleCreateForm.bind(this)
    this.prizesThatCanBeWon = ["ColdStone Gift Card", "Starbucks Gift Card", "Safeway Gift Card", "Olive Garden GIft Card", "One month membership to Gold's Gym", "Netflix for 6 months", "Chevron Gift Card", "Amazon Gift Card", "Steam Gift Card", "One free bike from Fixie", "San Fransisco Bay Boat Cruise Wine Tasting", "Disneyland Tickets"]
  }

  componentDidMount(){
    this.props.fetchUser(this.props.user.id)
      .then(() => this.props.fetchTransactions(this.props.user.id))
    
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
    let transactionsList;
    if (this.props.transactions){
      transactionsList = this.props.transactions.map((trans)=>{

        let category = trans.category.slice(0, 1).toUpperCase() + trans.category.slice(1)
    if (category === 'FoodAndDining') {
            category = 'Food and Dining'
          }
    if (category === 'PersonalCare') {
            category = 'Personal Care'
          }
        return (<tr key={trans._id} className='transaction_info'>
        <td className='transaction-date'>{trans.date}</td>
        <td className='transaction-description'>{trans.description}</td>
        <td className='transaction-category'>{category}</td>
        <td className='transaction-amount'>{trans.amount}</td>
    </tr>)
      })
    }
    let prizeList = [];
    if (this.props.prizes) {
      this.prizesThatCanBeWon.forEach((prizeThatCanBeWon) => {
        if (this.props.prizes[prizeThatCanBeWon]) {
            prizeList.push({name: prizeThatCanBeWon, quanity: this.props.prizes[prizeThatCanBeWon]})
        }
      })
    }
    let finishedPrizeList;
    if (prizeList.length) {
      finishedPrizeList = prizeList.map((prize) => {
        return (<tr key={prize.name} className="transaction_info">
          <td className="transaction-prizename">{prize.name}</td>
          <td className="transaction-prizequantity">{prize.quanity}</td>
        </tr>)
      })
    } else {
      finishedPrizeList = 
     (<tr>
        <td>No Prizes Yet!</td>
      </tr>)
    }
    let income;
    let budgetItems;
    if (this.props.budget){
      income = this.props.budget.income ? this.props.budget.income : 0
      budgetItems = Object.keys(this.props.budget).map((category) => {
        if (category !== 'editCounter' && category !== '_id' && category !== 'income') {
          let name = category.slice(0, 1).toUpperCase() + category.slice(1)
          if (name === 'FoodAndDining') {
            name = 'Food and Dining'
          }
          if (name === 'PersonalCare') {
            name = 'Personal Care'
          }
          return (<tr className="transaction_info" key={name}>
          <td className="transaction-category">{name}</td>
          <td className="transaction-dollars">${this.props.budget[category] * this.props.budget.income}</td>
          <td className="transaction-percentage">{this.props.budget[category] * 100}%</td>
        </tr>)
        }
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
              <Link to='/transactions'>
                <button className='add-trans'>
                    <IoEnterSharp/><p>Go to my Transactions</p>
                </button>
              </Link>
              <button className='add-trans' onClick={this.toggleCreateForm}>
                  <SiAddthis/><p>Create Transaction</p>
              </button>
            </div>
            <div className={this.state.createFormShow ? "" : 'hidden'}>
              <CreateTransactionContainer toggleCreateForm={this.toggleCreateForm}/>
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
        <section className='transactions-section'>
          <h1>Your Budget</h1>
          <div className='transactions-div'>
          <p className='account-balance'>Income: {income}</p>
            <div className='button-holder'> 
              <Link to='/budget'>
                <button className='add-trans'>
                    <RiMoneyDollarBoxFill/><p>Go to your Budget</p>
                </button>
              </Link>
            </div>
          <table className='transaction-table'>
            <thead>
              <tr>
                <th>Category</th>
                <th>Dollars</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {budgetItems}
            </tbody>
          </table>
          </div>
        </section>
        <section className='transactions-section'>
          <h1>Your Prizes</h1>
          <div className='transactions-div'>
          <p className='account-balance'>Points: {this.props.points}</p>
            <div className='button-holder'> 
              <Link to='/prizes'>
                <button className='add-trans'>
                    <FaGift/><p>Go to the Prize Store!</p>
                </button>
              </Link>
            </div>
          <table className='transaction-table'>
            <thead>
              <tr>
                <th>Prize</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {finishedPrizeList}
            </tbody>
          </table>
          </div>
        </section>
      </div>
    )
  }
};



export default Dashboard 