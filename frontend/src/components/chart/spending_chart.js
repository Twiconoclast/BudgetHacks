import React from 'react'
import { Bar } from 'react-chartjs-2';

class SpendingChart extends React.Component{

  total(month){
    let total = 0;
    this.props.transactions.forEach((trans)=>{
      if (trans.category !== 'savings' && trans.category !== 'income'){
        let monthString = trans.date.slice(5,7);
  
        if(monthString === month){
          total += Number(trans.amount)
        }
      }
    })
    return -total;
  }

  getMonth(month){
    if (month < 10){
      month = '0' + month;
    } else {
      month = month.toString();
    }
    return month;
  }


  label(month){
    let monthArr = ['January', 'February', 'March', 
    'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];

    return monthArr[month]
  }

  render(){
    let currDate = new Date().getMonth()
    let Month3Label = this.label(currDate)
    let Month3Spending = this.total(this.getMonth(currDate + 1))
    let Month2Label = this.label(currDate-1)
    let Month2Spending = this.total(this.getMonth(currDate))
    let Month1Label = this.label(currDate-2)
    let Month1Spending = this.total(this.getMonth(currDate - 1))
    const data = {
      labels: [Month1Label, Month2Label, Month3Label],
      datasets: [
        {
          label: 'Spending',
          data: [Month1Spending, Month2Spending, Month3Spending],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
    
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      responsive: true,
      maintainAspectRatio: true,
    }
    return(
      <div className='bar-chart'>
        <Bar data={data} options={options}/>
      </div>
    )
  }
}

export default SpendingChart