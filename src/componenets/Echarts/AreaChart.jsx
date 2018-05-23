import React from 'react';
// import echarts from "echarts";
// let echarts =require('echarts/build/echarts-all');
// import  'echarts/chart/line';
// require('echarts/chart/line');

class AreaChart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var echarts = require('echarts/echarts');
        require('echarts/chart/line');
        let defaultOption = {
            title : {
                text: '某楼盘销售情况',
                subtext: '纯属虚构'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['意向','预购','成交']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {

                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [

                {
                    splitLine:{show: false},//去除网格线
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'成交',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[10, 12, 21, 54, 260, 830, 710]
                },
                {
                    name:'预购',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[30, 182, 434, 791, 390, 30, 10]
                },
                {
                    name:'意向',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[1320, 1132, 601, 234, 120, 90, 20]
                }
            ]
        };
        let option = this.props.chartOption? this.props.chartOption:defaultOption;
        let chart =echarts.init(document.getElementById("Area-E"));
        chart.setOption(option);
        // chart.on('click',(params)=>{
        //     console.log(params);
        //     // if(params.componentType == "xAxis"){
        //     //     console.log(params)
        //     // }
        // });
        chart.on('hover',(params)=>{
            // console.log(params);

        })

    }

    render() {
        return (
            <div id="Area-E" style={{width:'100%',height:300}}>
            </div>

        )
    }
}

export default AreaChart;