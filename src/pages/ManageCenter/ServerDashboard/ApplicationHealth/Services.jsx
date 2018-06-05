import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";
import CustomLegend from "../CustomLegend";
import AreaChart from "../../../../componenets/Echarts/AreaChart";
let  Mock = require('mockjs');

class Services extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let dataFake_1 =[];
        let dataFake_2 =[];
        let dataFake_3 =[];
        for(let i =0;i<4;i++){
            dataFake_1.push(Mock.mock(
                {"number|2-40":40}
            ).number);
        }
        for(let i =0;i<4;i++){
            dataFake_2.push(Mock.mock(
                {"number|10-40":40}
            ).number);
        }
        for(let i =0;i<4;i++){
            dataFake_3.push(Mock.mock(
                {"number|20-70":70}
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
                                    color:'rgba(42,82,95,1)'
                                },
                                lineStyle:{
                                    color:'#0CBFF8'
                                }
                            }
                    },
                    data:dataFake_1,

                },
                {
                    name:'在途量',
                    type:'line',
                    symbol:'none', //去掉折线上的点标注
                    smooth:false,
                    itemStyle: {
                        normal:
                            {
                                areaStyle: {
                                    type: 'default',
                                    color:'rgba(66,59,59,1)'},
                                lineStyle:{
                                    color:'#A17171'
                                }
                            }
                    }
                    ,
                    data:dataFake_2
                },
                {
                    name:'库存量',
                    type:'line',
                    symbol:'none', //去掉折线上的点标注
                    smooth:false,
                    itemStyle: {
                        normal:
                            {
                                areaStyle: {
                                    type: 'default',
                                    color:'rgba(56,70,83,1)'},
                                lineStyle:{
                                    color:'#3165CD'
                                }
                            }
                    },

                    data:dataFake_3
                }


            ]
        };
        let legends=[
            {color:'#0CBFF8',name:'react_SSR',value:'3.24K'},
            {color:'#A17171',name:'vue_SSR',value:419},
            {color:'#3165CD',name:'SSR',value:1251},
        ];
        return (
            <div className="box-container">
                <CommonHeader title="SERVICES | 3 MOST USED" titleSpan={14} lineSpan={10}/>
                <Row className="box-body">
                    <Row>
                        <Col span={5} offset={19}>
                            <span>Reload</span>
                        </Col>
                        <Col span={24}>
                            <CustomLegend legends={legends}/>

                        </Col>
                    </Row>



                        <Row>
                            <AreaChart chartOption={chartOption} chartHeight={200} chartID="Services-Area"/>

                        </Row>


                </Row>
            </div>

        )
    }
}

export default Services;