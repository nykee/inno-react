import React from 'react';
import {pieChartOption} from '../../../chartConfig/pieConifg'
import PieChart from '../../../componenets/Echarts/PieChart'
import deepCopy from '../../../utils/deepCopy'

class DeliverySummary extends React.Component {
    constructor() {
        super();
        this.state = {
            // myChartOption:pieChartOption
        };
    }

    componentWillMount() {
        this.setState({

        })
    }

    render() {
        let config =deepCopy(pieChartOption);

        // let myChartOption = pieChartOption;
        config.title.text = "运单统计";
        // pieChartOption.tooltip.show =false
        // pieChartOption.series[0].
        config.series[0].data = [
            {value:335, name:'GMC'},
            {value:310, name:'SKU'},
            {value:234, name:'FID'},
        ];
        config.series[0].itemStyle.normal.label.show =
            config.series[0].itemStyle.normal.labelLine.show=false;
        config.legend.data =['GMC','SKU','FID'];
        console.log("DElivery config");
        console.log(config);
        return (
            <div>
                <PieChart chartID="DeliverySummary" chartOption={config}/>
            </div>

        )
    }
}

export default DeliverySummary ;