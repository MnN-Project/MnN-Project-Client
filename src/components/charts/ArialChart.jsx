"use client"

import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class ArialChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chart: {
                height: 273,
                width: "100%",
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            stroke: {
                curve: 'smooth'
            },
            dataLabels: {enabled: false},
            series: [{
                name: 'Returning',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'Newcomers',
                data: [11, 32, 45, 72, 34, 52, 41]
            }, {
                name: 'Abandoned',
                data: [11, 32, 45, 58, 34, 52, 41]
            }],
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            },
            fill: {
                opacity: 1,
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center'
            }
        }
    }

    componentDidMount() {
        this.setState({isClient: true});
    }

    render() {
        return (
            <Chart
                options={this.state}
                series={this.state.series}
                type={this.state.chart.type}
                height={this.state.chart.height}
                width={this.state.chart.width}
            />
        )
    }
};

export default ArialChart;