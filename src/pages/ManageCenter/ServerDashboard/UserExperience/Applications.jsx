import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";
import CustomLegend from "../CustomLegend";
import AreaChart from "../../../../componenets/Echarts/AreaChart";
let  Mock = require('mockjs');

class Applications extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let dataFake_1 =[];
        for(let i =0;i<4;i++){
            dataFake_1.push(Mock.mock(
                {"number|60-70":70}
            ).number);
        }

        let chartOption={
            backgroundColor:'#303030',
            tooltip : {
                trigger: 'axis',
                axisPointer:{
                    type:'line'
                }

            },
            grid:{
                x:25,
                y:25,
                x2:25,
                y2:25,
                borderWidth:0
                // borderColor:'#2F323A'
            },
            calculable : false,
            xAxis : [
                {
                    splitLine:{show: false},//去除网格线
                    type : 'category',
                    triggerEvent:true,
                    boundaryGap : false,
                    data : ['11:30','12:00','12:30','13:00'],
                    axisLabel: {
                        clickable:true,
                        textStyle: {
                            color:'#A6AEBF',

                        }},
                    axisLine:{
                        lineStyle:{
                            color:'transparent'
                        },
                    }

                }
            ],
            yAxis : [
                {
                    splitLine:{
                        show: false,
                        lineStyle:{
                            color:'#3D4049',
                            width:1
                        }},//Y轴显示网格线，并设置线条样式
                    type : 'value',
                    axisLabel: {
                        show:false,
                        textStyle: {
                            color:'#A6AEBF'
                        }},
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
                    name:'端口连接率',
                    type:'line',
                    symbol:'none', //去掉折线上的点标注
                    smooth:false,
                    itemStyle: {
                        normal:
                            {
                                areaStyle: {
                                    type: 'default',
                                    color:'rgba(35,106,128,.7)'
                                },
                                lineStyle:{
                                    color:'transparent'
                                }
                            }
                    },
                    data:dataFake_1,

                },


            ]
        };
        return (
            <div className="box-container">
                <CommonHeader title="APPLICATIONS | 3 MOST ACTIVE"/>
                <Row className="box-body">
                    <Col span={5} offset={19}>
                        <span>Reload</span>
                    </Col>
                    <Col span={24}>
                        <CustomLegend/>

                    </Col>
                    <Col span={24}>
                        <AreaChart chartOption={chartOption} chartHeight={240}/>

                    </Col>

                </Row>
            </div>

        )
    }
}

export default Applications;