import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RadialLineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: {
        type: 'bar',
        height: 150,
        width: '100%',
        stacked: true
      },
      plotOptions: {
        bar: {
          columnWidth: '100%'
        }
      },
      colors: ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'],
      series: [
        {
          name: 'Orders',
          data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56]
        },
        {
          name: 'Abandoned',
          data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4]
        }
      ],
      labels: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#78909c'
          }
        }
      },
      title: {
        text: 'Order Summary',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      }
    };
  }

  componentDidMount() {
    this.setState({ isClient: true });
  }

  render() {
    return (
      <div style={{ minHeight: '133px', width: '100%' }}>
        <Chart
          options={this.state}
          series={this.state.series}
          type={this.state.chart.type}
          height={this.state.chart.height}
          width={this.state.chart.width}
        />
      </div>
    );
  }
}

export default RadialLineChart;
