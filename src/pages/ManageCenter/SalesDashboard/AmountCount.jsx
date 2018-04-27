import React from 'react';
import BarChart from '../../../componenets/Echarts/BarChart'
import '../../../style/SaleDashboard/AmontCount.css'
class AmountCount extends React.Component {


    render() {
        let chartOption = {
            grid: {
                borderWidth: 0,
                y: 80,
                y2: 60
            },
            xAxis: [
                {
                    type: 'category',
                    splitLine:{show: false},//去除网格线
                    show: true,
                    axisLabel: {textStyle: {
                            color:'#A6AEBF'
                        }},
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine:{show: false},//去除网格线
                    axisLabel: {textStyle: {
                            color:'#A6AEBF'
                        }},
                    show: true
                }
            ],
            series: [
                {
                    name: 'ECharts例子个数统计',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#B29EFF','#1CA8DD','#007AE1','#B29EFF','#1CA8DD','#007AE1','#B29EFF',
                                ];
                                return colorList[params.dataIndex]
                            },
                            label: {
                                show: false,
                                position: 'top',
                                formatter: '{b}\n{c}'
                            }
                        }
                    },
                    data: [12,21,10,4,12,5,6],
                }
            ]
        };

        return (
            <div>
                <div >
                    <span className="title" >Pending</span>
                    <span className="title" style={{marginLeft:'.5rem'}}>Completed</span>
                    <span className="title" style={{marginLeft:'.5rem'}}>Refounded</span>
                </div>

                <BarChart chartOption={chartOption} />
                {/*<BarChart></BarChart>*/}
            </div>

        )
    }
}

export default AmountCount;