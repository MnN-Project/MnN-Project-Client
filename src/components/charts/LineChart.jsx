import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class LineChart extends Component {
    constructor(props) {
        super(props);
        const {id, data, color, label, children, value} = this.props;
        this.state = {
            chart: {
                id: id,
                type: 'line',
                height: 60,
                width: "100%",
                sparkline: {
                    enabled: true
                },
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 2,
                    opacity: 0.2,
                }
            },
            series: [{
                name: `${label}:`,
                data: data
            }],
            stroke: {
                curve: 'smooth',
                width: 1.5
            },
            markers: {
                size: 0
            },
            grid: {
                padding: {
                    top: 10,
                    bottom: 10,
                }
            },
            colors: [color],
            tooltip: {
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function formatter(val) {
                            return `${val}`;
                        }
                    }
                }
            }
        }
    }

    componentDidMount() {
        this.setState({isClient: true});
    }

    render() {
        const {children, label, value} = this.props;
        return (
            <div className="col-span-12 md:col-span-6 sm:col-span-3 lg:col-span-3">
                <div
                    className="border-gray relative w-full border bg-white transition-all duration-300 rounded-md p-6">
                    <div className="flex items-center justify-between">
                        <h4 className="font-heading text-sm font-medium leading-tight text-dark-gray mb-1">
                            <span>{label}</span>
                        </h4>
                        {children}
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-4 w-full">
                        <div className="grow">
                        <span className="text-dark text-lg font-semibold capitalize">
                         {label === 'sales' ? `${value}k` : label === 'income' ? '$' + `${value}` : value}
                        </span>
                        </div>
                        <div className="grow">
                            <div style={{width: '120px', overflow: 'hidden', height: '60px'}}>
                                <Chart
                                    options={this.state}
                                    series={this.state.series}
                                    type={this.state.chart.type}
                                    height={this.state.chart.height}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default LineChart