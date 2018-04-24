import React from 'react';
import BarChart from '../../../componenets/Echarts/BarChart'

class AmountCount extends React.Component {


    render() {
        let chartOption ={
            title: {
                text: '按病种查看'
            },

            grid: {
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: false
            },
            calculable : false,
            xAxis : [
                {   splitLine:{show: false},//去除网格线
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
                    }}
                }
            ],
            series : [
                {
                    name:'',
                    type:'bar',
                    barWidth: '20%',
                    data:[2, 4, 7, 23, 25, 76, 135],
                    itemStyle:{
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#9F86FF','#1CA8DD','#007AE1'
                                ];
                                return colorList[params.dataIndex]
                            },
                            label: {
                                show: false,
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
                <BarChart chartOption={chartOption} />
                {/*<BarChart></BarChart>*/}
            </div>

        )
    }
}

export default AmountCount;