import React from 'react';
import BarChart from '../../../componenets/Echarts/BarChart'
import '../../../style/SaleDashboard/AmontCount.css'
class AmountCount extends React.Component {


    render() {
        let chartOption ={
           /* title: {
                text: '按病种查看'
            },*/

            grid: {
                borderWidth:0,
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: false
            },
            calculable : false,
            xAxis : [
                {
                    splitLine:{show: false},//去除网格线
                    type : 'category',
                    data :  ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        interval:0,
                        rotate:0,
                        textStyle: {
                            color:'#A6AEBF'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'transparent'
                        },
                    }
                }
            ],
            yAxis : [
                {
                    // show:false,
                    splitLine:{show: false},//去除网格线
                    type : 'value',
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
            series : [
                {
                    name:'SS',
                    type:'bar',
                    barWidth: '70%',
                    data:[2,4,7,23,25,76,13],
                    itemStyle:{
                        normal: {
                            /*color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#9F86FF','#1CA8DD','#007AE1'
                                ];
                                return colorList[params.dataIndex]
                            },*/
                            label: {
                                show: true,
                                position: 'top',
                                formatter: '{c}'
                            }
                        }

                    }
                }



            ],
            /*loadingOption:{
                text:'数据读取中...',
                effect:'spin'

            },
            noDataLoadingOption:{
                text:'暂无数据'
            }*/
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