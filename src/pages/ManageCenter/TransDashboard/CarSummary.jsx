import React from 'react';
import PieChart from "../../../componenets/Echarts/PieChart";
import {PieConfig} from "../../../chartConfig/pieConifg";

class CarSummary extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let config =new PieConfig();
        config.pieChartOption.legend.data =[
            {name:'休息',icon:'rect',textStyle:{color:'#fff'}},
            {name:'已出车',icon:'rect',textStyle:{color:'#fff'}},
            {name:'异常',icon:'rect',textStyle:{color:'#fff'}},
            {name:'已返回',icon:'rect',textStyle:{color:'#fff'}}
        ];
        config.pieChartOption.title.textStyle={
            //文字颜色
            color:'#FFB95A',
            //字体风格,'normal','italic','oblique'
            fontStyle:'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight:'bold',
            //字体系列
            fontFamily:'sans-serif',
            //字体大小
            fontSize:18
        };
        config.pieChartOption.series[0].data =[{value:35, name:'休息'},
            {value:310, name:'已出车'},
            {value:5, name:'异常'},
            {value:135, name:'已返回'},
            ];
        config.pieChartOption.toolbox.show=false;
        config.pieChartOption.title.text ='车辆统计';
        config.pieChartOption.series[0].name= '车辆统计';
        config.pieChartOption.tooltip.show =false;
        config.pieChartOption.series[0].itemStyle.normal.label.show =
            config.pieChartOption.series[0].itemStyle.normal.labelLine.show=false;
        return (
            <div>
                <PieChart  chartID="CarSummary" chartOption={config.pieChartOption}/>
            </div>

        )
    }
}

export default CarSummary;