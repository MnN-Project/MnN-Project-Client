import React from 'react';
import Chart from 'react-apexcharts';

const RadialBarChart = () => {
    const options = {
        chart: {
            type: 'radialBar',
            height: 120,
            zoom: {
                enabled: false
            },
            offsetY: 20
        },
        colors: ['#E91E63'],
        stroke: {
            lineCap: 'round',
            width: 2
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 5
                    }
                },
                hollow: {
                    size: '50%'
                }
            }
        },
        series: [55],
        theme: {
            monochrome: {
                enabled: true
            }
        },
        legend: {
            show: false
        },
        value: {
            show: false
        }
    };


    return (
        <div className="max-w-[110px] max-h-[110px] lg:max-w-[120px] lg:max-h-[120px] flex mx-auto h-full justify-center items-center">
            <Chart
            options={options}
            series={options.series}
            type={options.chart.type}
            height={options.chart.height}
        />
        </div>
    );
};

export default RadialBarChart;
