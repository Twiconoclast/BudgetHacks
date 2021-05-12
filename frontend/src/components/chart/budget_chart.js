import React from 'react'
import { Line } from 'react-chartjs-2';

class BudgetChart extends React.Component{

  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({loading:false})
    }, 1000)
  }

  total(month, day){
    let total = 0;
    this.props.transactions.forEach((trans)=>{
      if (trans.category !== 'savings' && trans.category !== 'income'){
        let monthString = trans.date.slice(5,7);
        let dayString = trans.date.slice(8);
        if(monthString === month && dayString <= day){
          total += Number(trans.amount)
        }
      }
    })
    return total;
  }

  getMonth(month){
    if (month < 10){
      month = '0' + month;
    } else {
      month = month.toString();
    }
    return month;
  }

  getDay(day){
    if (day < 10){
      day = '0' + day;
    } else {
      day = day.toString();
    }
    return day;
  }

  label(day){
    let dayArr = ['1','2','3','4','5','6','7','8','9','10',
                  '11','12','13','14','15','16','17','18','19','20',
                  '21','22','23','24','25','26','27','28','29', '30', '31'];

    return dayArr.slice(0, day)
  }


  getBudget(){
    let total = 0;
    let income = this.props.budget.income
    Object.keys(this.props.budget).forEach((key)=>{
      if (key !== 'savings' && key !== 'income' && key !== '_id' && key !== 'editCounter'){
        total += this.props.budget[key] * income
      }
    });
    return total;
  };


  render(){
 
    let currDay = new Date().getDate()
    let dayLabels = this.label(currDay)
    let currMonth = this.getMonth(new Date().getMonth() + 1)
    let spendData = [];
    dayLabels.forEach(day => {
      let dateString = this.getDay(day)
      this.total(currMonth, dateString)
      spendData.push(this.total(currMonth, dateString))
    })
    let budget;
    if (this.props.budget){
      budget = this.getBudget();
    }
    let budgetData = [];
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let totalDays = new Date(year, month, 0).getDate()
    dayLabels.forEach(day => {
      let num = Number(day)
      budgetData.push(((budget/totalDays) * num).toFixed(2))
    })

    const data = {
      labels: dayLabels,
      datasets: [
        {
          label: 'Actual Spending',
          data: spendData,
          backgroundColor: [
            'red'
          ],
          borderColor: [
            'red',
          ],
          borderWidth: 1,
        },
        {
          label: 'Budgeted Spending',
          data: budgetData,
          backgroundColor: [
            'green'
          ],
          borderColor: [
            'green',
          ],
          borderWidth: 1,
        },
      ],
    }
    
    const options = {
      plugins: {
        title: {
            display: true,
            text: 'Spending vs Budget Chart'
        },
      },
      scales: {
        x: {
          title: {
            color: 'grey',
            display: true,
            text: 'Day of the Month'
          }
        },
        y: {
          title: {
            color: 'grey',
            display: true,
            text: 'Budget Spent'
          },
        },
      },
    responsive: true,
    maintainAspectRatio: true,
    }

    let loadingClass = this.state.loading ? 'loader': '';


    let display = this.state.loading ? (
      <div className='bar-chart'>
        <div className={`${loadingClass}`}></div>
      </div>

    ) : (
      <div className='bar-chart'>
        <Line data={data} options={options}/>
      </div>
    );

      return(
        display
      )}
    
  
}

export default BudgetChart