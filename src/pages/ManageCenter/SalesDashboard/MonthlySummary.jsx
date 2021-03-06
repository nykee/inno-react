import React from 'react';
import CommonTitle from '../../../componenets/common/CommonTitle'
import AreaChart from '../../../componenets/Echarts/AreaChart'
let  Mock = require('mockjs');
class MonthlySummary extends React.Component {


    render() {
        let dataFake_1 =[],
        dataFake_2=[],
        dataFake_3=[];
        for(let i =0;i<31;i++){
            dataFake_1.push(Mock.mock(
                {"number|1-60":60}
            ).number);
            dataFake_2.push(Mock.mock(
                {"number|1-60":60}
            ).number);
            dataFake_3.push(Mock.mock(
                {"number|1-60":60}
            ).number);
        }
        /*console.log(dataFake_1);
        console.log(dataFake_2);
        console.log(dataFake_3);*/
        let chartOption={
            backgroundColor:'#1F242A',
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
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12','13',
                        '14','15','16','17','18','19','20','21','22','23','24','25','26',
                        '27','28','29','30','31'],
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
                    splitLine:{show: true,
                        lineStyle:{
                            color:'#3D4049',
                            width:1
                        }},//Y轴显示网格线，并设置线条样式
                    type : 'value',
                    axisLabel: {textStyle: {
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
                    name:'出货量',
                    type:'line',
                    symbol:'none', //去掉折线上的点标注
                    smooth:false,
                    itemStyle: {
                                normal:
                                    {
                                        areaStyle: {
                                            type: 'default',
                                            color:'rgba(159,134,255,.7)'
                                        },
                                        lineStyle:{
                                            color:'transparent'
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
                                            color:'rgba(28,168,221,.7)'},
                                        lineStyle:{
                                            color:'transparent'
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
                                            color:'rgba(0,122,225,.7)'},
                                        lineStyle:{
                                            color:'transparent'
                                        }
                                    }
                                },

                    data:dataFake_3
                }
            ]
        };


        return (
            <div>
                <CommonTitle titleName="Monthly Summary"/>
                <AreaChart chartOption={chartOption} chartID="MonthlySummary"/>
            </div>

        )
    }
}

export default MonthlySummary;