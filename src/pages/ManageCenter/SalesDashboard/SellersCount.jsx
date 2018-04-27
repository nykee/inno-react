import React from 'react';
import {Row,Col} from 'antd'
import LineChart from '../../../componenets/Echarts/LineChart'
import '../../../style/SaleDashboard/SellersCount.css'

class SellersCount extends React.Component {


    render() {
        let chartOption={
           /* title : {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },*/
            grid:{
                x:25,
                y:25,
                x2:25,
                y2:25,
                borderWidth:0
            },
            calculable : false,
            xAxis : [
                {
                    show:false,
                    type : 'category',
                    splitLine:{show: false},
                    axisLabel: {textStyle: {
                            color:'#A6AEBF'
                        }},
                    axisLine:{
                        lineStyle:{
                            color:'transparent'
                        },
                    },
                    boundaryGap : false,
                    data : ['1','2','3','4','5','6','7','7']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{show: true,
                        lineStyle:{
                            color:'#3D4049',
                            width:1
                        }},//Y轴显示网格线，并设置线条样式
                    axisLabel : {
                        show:false,
                        textStyle: {
                            color:'#A6AEBF'
                        },
                        formatter: '{value} °C'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#3D4049',
                            width:1
                        },
                    }
                }
            ],
            series : [
                {
                    name:'最高气温',
                    type:'line',
                    symbol:'none',
                    data:[2, 6, 5, 9, 7, 8, 7,14],
                    itemStyle:{
                        normal:{
                            lineStyle:{
                                color:'#0D76DF',
                                width:5,
                                shadowColor:'#313755',
                                shadowBlur:6
                            }
                        }
                    }


                },

            ]
        };

        return (
            <div>
                <Row>
                    <Col span={8} offset={6}>
                        <span>Best Sellers</span>
                    </Col>
                    <Col span={6} >
                        <span>View All</span>
                    </Col>
                    <Col span={4} >
                        <i className="fa fa-edit"/>
                    </Col>
                </Row>

                <LineChart chartOption={chartOption}/>
                <Row>
                    <Col span={12} >
                        <span className="price">$&nbsp;27,856&nbsp;</span><span className="time">April 2018</span>
                        <i className="fa fa-arrow-up" style={{color:'#0AD02F',marginLeft:'.3rem'}}/>
                    </Col>
                    <Col span={5} offset={7}>
                        <span className="increase">+140%</span>
                    </Col>
                </Row>

            </div>

        )
    }
}

export default SellersCount;