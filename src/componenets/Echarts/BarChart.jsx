import React from 'react';
import echarts from 'echarts';
import  'echarts/chart/bar';
import 'echarts/component/title';
import 'echarts/component/tooltip';
class BarChart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        let defaultOption ={
            title: {
                text: '按病种查看'
            },
            // color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            toolbox: {
                show: true,
                backgroundColor: 'rgba(0,0,0,0)',
                color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
                feature: {
                    dataView: {show: true, readOnly: false},
                    /* restore: {show: true},*/
                    saveAsImage: {show: true},

                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '12%',
                containLabel: true
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data :  ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        interval:0,
                        rotate:40
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'按病种查看',
                    type:'bar',
                    barWidth: '70%',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    itemStyle:{
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#C1232B','#334B5C','#6AB0B8','#E98F6F','#9FDABF',
                                    '#749F83','#DE9325','#CFB2A9','#797B7F','#5C6F7B',
                                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            },
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
        let option = this.props.chartOption? this.props.chartOption:defaultOption;
        let chart =echarts.init(document.getElementById("Bar-E"));
        chart.setOption(option);
    }


    render() {
        return (
            <div id="Bar-E" style={{width:300,height:300}}>
            </div>

        )
    }
}

export default BarChart;