import React from 'react';
import CreateTransactionContainer from '../transaction/create_transaction_container';
import BudgetChart from '../chart/budget_chart';
import SpendingChart from '../chart/spending_chart';
import {SiAddthis} from 'react-icons/si';
import {FaGift} from 'react-icons/fa';
import {GrPowerReset} from 'react-icons/gr'
import {RiMoneyDollarBoxFill} from 'react-icons/ri';
import {IoEnterSharp} from 'react-icons/io5';
import {Link} from 'react-router-dom'
// import { slice } from 'lodash';

class Dashboard extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {createFormShow: false, editFormShow: false, selectedCategory: this.props.selectedCategory, selectedDate: this.props.selectedDate, categorySelectForm: false, dateSelectForm: false}
    // this.toggleEditForm = this.toggleEditForm.bind(this)
    this.toggleCreateForm = this.toggleCreateForm.bind(this)
    this.toggleCategoryForm = this.toggleCategoryForm.bind(this)
    this.toggleDateForm = this.toggleDateForm.bind(this)
    this.handleDateReset = this.handleDateReset.bind(this)
    this.prizesThatCanBeWon = ["ColdStone Gift Card", "Starbucks Gift Card", "Safeway Gift Card", "Olive Garden GIft Card", "One month membership to Gold's Gym", "Netflix for 6 months", "Chevron Gift Card", "Amazon Gift Card", "Steam Gift Card", "One free bike from Fixie", "San Fransisco Bay Boat Cruise Wine Tasting", "Disneyland Tickets"]

  }

  componentDidMount(){
    this.props.fetchUser(this.props.user.id)
      .then(() => this.props.fetchTransactions(this.props.user.id))
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (prevProps.transactions !== this.props.transactions){
  //     this.setState(this.state)
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   Object.entries(this.props).forEach(([key, val]) =>
  //     prevProps[key] !== val && console.log(`Prop '${key}' changed`)
  //   );
  //   if (this.state) {
  //     Object.entries(this.state).forEach(([key, val]) =>
  //       prevState[key] !== val && console.log(`State '${key}' changed`)
  //     );
  //   }
  // }

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

    let budgetChart;
    let spendingChart;
    let transactionsList;

    if (this.props.transactions && this.props.budget){
      budgetChart =  <BudgetChart user={this.props.user} budget={this.props.budget} transactions={this.props.transactions}/>
      spendingChart = <SpendingChart transactions={this.props.transactions}/>
    }


    if (this.props.transactions){
      transactionsList = this.props.transactions.map((trans)=>{
        let category = trans.category.slice(0, 1).toUpperCase() + trans.category.slice(1)
        console.log(typeof trans.date)
          if (category === 'FoodAndDining') {
                  category = 'Food and Dining'
                }
          if (category === 'PersonalCare') {
                  category = 'Personal Care'
                }
              if ((this.state.selectedCategory === 'all' || this.state.selectedCategory === trans.category) && (this.state.selectedDate === "yyyy-MM-dd" || this.state.selectedDate === this.sliceDate(trans.date))  ) {
              return (<tr key={trans._id} className='transaction_info'>
              <td className='transaction-date'>{trans.date}</td>
              <td className='transaction-description'>{trans.description}</td>
              <td className='transaction-category'>{category}</td>
              <td className='transaction-amount'>{trans.amount}</td>
          </tr>)
              } else {
                return <tr className='hidden' key={trans._id} ></tr>
              }
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
        } else {
          return <tr key={category}></tr>
        }
      })
    }

    
    // console.log(this.state.selectedDate)
    return (
      <div className='dashboard'>
        <section className='charts-section'>
          <h1>Your Charts</h1>
          <div className='charts-div'>
            {budgetChart}
            {spendingChart}
            {/* <BudgetChartContainer/>
            <SpendingChartContainer/> */}
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
                <th>Description</th>
                <th className={!this.state.categorySelectForm ? '' : 'hidden'}>Category <span className='add-pointer' onClick={this.toggleCategoryForm}>+</span></th>
                <th className={this.state.categorySelectForm ? '' : 'hidden'}><label>Category <span className='add-pointer' onClick={this.toggleCategoryForm}>+</span>
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
                </label></th>
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