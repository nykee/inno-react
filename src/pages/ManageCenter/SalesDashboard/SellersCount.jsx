import React from 'react';
import LineChart from '../../../componenets/Echarts/LineChart'

class SellersCount extends React.Component {


    render() {
        let chartOption={
           /* title : {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },*/
            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    splitLine:{show: false},
                    axisLabel: {textStyle: {
                            color:'#A6AEBF'
                        }},
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
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
                        textStyle: {
                            color:'#A6AEBF'
                        },
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [
                {
                    name:'最高气温',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],


                },

            ]
        };

        return (
            <div>
                <span>Best Sellers</span>
                <LineChart chartOption={chartOption}/>
            </div>

        )
    }
}

export default SellersCount;