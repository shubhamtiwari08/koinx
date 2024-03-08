import React from 'react';
import Chart from 'react-apexcharts';
 

const DonutChart = () => {
  const chartOptions = {
    series: [80, 20],
    labels: ['Crowdsale investors', 'Foundation'],
    colors: ['#6366F1', '#F59E0B'],
    chart: {
      type: 'donut',
    },
    legend: {
      position: 'right'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default DonutChart;
 