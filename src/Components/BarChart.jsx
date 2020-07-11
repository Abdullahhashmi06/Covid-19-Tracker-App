import React from 'react';
import  { Bar } from 'react-chartjs-2';

const BarChart = ({totCases, totDeaths, totRecovered}) => {
    
    const barChart = (
        totCases
        ? (
          <Bar 
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [{
                label: 'People',
                backgroundColor: [
                  '#0457be',
                  '#03ac13',
                  '#f72500',
              ],
              
              data: [totCases, totRecovered, totDeaths ]
              }]
            }}
            options={{
              legend: { display: false },
              title: { display: false, text:`` }
            }}
          />
        ) : null
      )
    
    return (
        <div>
            {barChart}
        </div>
    )
}

export default BarChart;