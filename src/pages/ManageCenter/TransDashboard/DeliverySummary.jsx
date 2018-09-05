import React from 'react';
import {PieConfig} from '../../../chartConfig/pieConifg'
import PieChart from '../../../componenets/Echarts/PieChart'

class DeliverySummary extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentWillMount() {

    }

    render() {
        let config =new PieConfig();
        config.pieChartOption.title.text = "运单统计";
        config.pieChartOption.title.x = "center";
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
        config.pieChartOption.series[0].data = [
            {value:335, name:'GMC'},
            {value:310, name:'SKU'},
            {value:234, name:'FID'},
        ];
        config.pieChartOption.series[0].itemStyle.normal.label.show =
            config.pieChartOption.series[0].itemStyle.normal.labelLine.show=false;
        config.pieChartOption.legend.data =[
            {name:'GMC',icon:'rect',textStyle:{color:'#fff'}},
            {name:'SKU',icon:'rect',textStyle:{color:'#fff'}},
            {name:'FID',icon:'rect',textStyle:{color:'#fff'}}];
        config.pieChartOption.toolbox.show =
            config.pieChartOption.tooltip.show =false;
        return (
            <div>
                <PieChart chartID="DeliverySummary" chartOption={config.pieChartOption}/>
            </div>

        )
    }
}

export default DeliverySummary ;