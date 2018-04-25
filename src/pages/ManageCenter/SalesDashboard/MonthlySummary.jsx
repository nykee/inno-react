import React from 'react';
import CommonTitle from './CommonTitle'
import AreaChart from '../../../componenets/Echarts/AreaChart'
var Mock = require('mockjs');
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
            backgroundColor:'#2F323A',
            /*title : {
                text: '某楼盘销售情况',
                subtext: '纯属虚构'
            },*/
            tooltip : {
                trigger: 'axis',

            },
            /*legend: {
                data:['意向','预购','成交']
            },*/
           /* toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },*/
           grid:{
               borderWidth:0
               // borderColor:'#2F323A'
           },
            calculable : false,
            xAxis : [
                {
                    splitLine:{show: false},//去除网格线
                    type : 'category',
                    boundaryGap : false,
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12','13',
                        '14','15','16','17','18','19','20','21','22','23','24','25','26',
                        '27','28','29','30','31'],
                    axisLabel: {textStyle: {
                            color:'#A6AEBF'
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
                    itemStyle: {normal: {areaStyle: {type: 'default',color:'rgba(159,134,255,.7)'}}},
                    data:dataFake_1
                },
                {
                    name:'在途量',
                    type:'line',
                    symbol:'none', //去掉折线上的点标注
                    smooth:false,
                    itemStyle: {normal: {areaStyle: {type: 'default',color:'rgba(28,168,221,.7)'}}},
                    data:dataFake_2
                },
                {
                    name:'库存量',
                    type:'line',
                    symbol:'none', //去掉折线上的点标注
                    smooth:false,
                    itemStyle: {normal: {areaStyle: {type: 'default',color:'rgba(0,122,225,.7)'}}},
                    data:dataFake_3
                }
            ]
        };


        return (
            <div>
                <CommonTitle titleName="Monthly Summary"/>
                <AreaChart chartOption={chartOption}/>
            </div>

        )
    }
}

export default MonthlySummary;