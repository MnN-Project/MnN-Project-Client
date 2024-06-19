"use client"

import React from 'react'

const LineChart = ({label, value, children}) => {
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
                         {label === 'sales' ? `${value}k` : label === 'income' ? 'NGN' + `${value}` : value}
                        </span>
                        </div>
                        <div className="grow">
                            <div style={{width: '120px', overflow: 'hidden', height: '60px'}}>
                                {/* <Chart
                                    options={this.state}
                                    series={this.state.series}
                                    type={this.state.chart.type}
                                    height={this.state.chart.height}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default LineChart