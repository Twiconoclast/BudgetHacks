import React from 'react'
import { Bar } from 'react-chartjs-2';

class SpendingChart extends React.Component{
  render(){
    const data = {
      labels: ['February', 'March', 'April'],
      datasets: [
        {
          label: 'Spending',
          data: [12, 19, 3, 5, 2, 3],
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
    }
    return(
      <div>
        <Bar data={data} options={options} />
      </div>
    )
  }
}

export default SpendingChart