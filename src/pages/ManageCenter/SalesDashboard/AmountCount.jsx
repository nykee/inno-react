import React from 'react';
import BarChart from '../../../componenets/Echarts/BarChart'
import '../../../style/SaleDashboard/AmontCount.css'
import {Row,Col} from 'antd'
class AmountCount extends React.Component {


    render() {
        let chartOption = {
            grid: {
                borderWidth: 0,
                x:30,
                y:30,
                x2:25,
                y2:25,
            },
            xAxis: [
                {
                    type: 'category',
                    splitLine:{show: false},//去除网格线
                    show: true,
                    axisLabel: {textStyle: {
                            color:'#A6AEBF'
                        }},
                    axisLine:{
                        lineStyle:{
                            color:'transparent'
                        },
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine:{show: false},//去除网格线
                    axisLabel: {textStyle: {
                            color:'#A6AEBF',
                            /*formatter:function (v) {
                                console.log("Yaxis formatter");
                                console.log(v);
                            }*/
                        },
                        formatter:function (v) {
                            v/1000>=1? v=(v/1000)+'k':'';
                            console.log(v);
                            return '$ '+v
                        }},
                    axisLine:{
                        lineStyle:{
                            color:'transparent'
                        },
                    },
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
                    data: [1200,857,3300,720,3900,1221,590],
                }
            ]
        };

        return (
            <div>
                <Row >
                    <Col span={5} offset={2}><span className="title" >Pending</span></Col>
                    <Col span={5}><span className="title" style={{marginLeft:'.5rem',color:'#1D85B4'}}>Completed</span></Col>
                    <Col span={5}><span className="title" style={{marginLeft:'.5rem'}}>Refounded</span></Col>
                    <Col span={5} offset={2}><i className="fa fa-edit fa-2x"/></Col>
                </Row>

                <BarChart chartOption={chartOption} />
                {/*<BarChart></BarChart>*/}
            </div>

        )
    }
}

export default AmountCount;