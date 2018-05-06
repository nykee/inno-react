import React from 'react';
import {Row,Col} from 'antd'
import LineChart from '../../../componenets/Echarts/LineChart'
import ep from '../../../utils/eventProxy'

import '../../../style/SaleDashboard/SellersCount.css'
import '../../../style/SaleDashboard/common.css'

class SellersCount extends React.Component {
    constructor() {
        super();
        this.state = {
            selected:'bestsellers',
            amountAll:'27,856',
            increasement:140
        };


    }
    getChartData(type){
        let ajaxData=[];
        if(type ==="bestsellers"){
            this.setState({
                selected:'bestsellers',
                amountAll:'27,856',
                increasement:140

            });
            ajaxData =[2, 6, 5, 9, 7, 8, 7,14];
            ep.trigger('SellerSelectionChange','bestsellers',ajaxData);
        }
        else if(type ==="viewAll"){
            // console.log('Completed');
            this.setState({
                selected:'viewAll',
                amountAll:'47,888',
                increasement:121
            });
            ajaxData =[12, 21, 50, 39, 17, 18, 7,14];
            ep.trigger('SellerSelectionChange','viewAll',ajaxData);
        }
    }

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
                    name:'销售额',
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
                    <Col span={6} offset={8}>
                        <span className={this.state.selected==='bestsellers'?'title-selected':'title'} onClick={this.getChartData.bind(this,'bestsellers')}>Best Sellers</span>
                    </Col>
                    <Col span={6} >
                        <span className={this.state.selected==='viewAll'?'title-selected':'title'} onClick={this.getChartData.bind(this,'viewAll')}>View All</span>
                    </Col>
                    <Col span={4} >
                        <i className="fa fa-edit fa-2x"/>
                    </Col>
                </Row>

                <LineChart chartOption={chartOption}/>
                <Row>
                    <Col span={12} >
                        <span className="price">$&nbsp;{this.state.amountAll}&nbsp;</span><span className="time">April 2018</span>
                        <i className="fa fa-arrow-up" style={{color:'#0AD02F',marginLeft:'.3rem'}}/>
                    </Col>
                    <Col span={5} offset={7}>
                        <span className="increase">{'+'+this.state.increasement+'%'}</span>
                    </Col>
                </Row>

            </div>

        )
    }
}

export default SellersCount;