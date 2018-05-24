import React from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts';
// 引入柱状图
import  'echarts/chart/pie';

class PieChart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        let chart =echarts.init(document.getElementById(this.props.charID));
        chart.setOption(this.props.chartOption);

    }

    render() {
        return (

                <div id={this.props.charID} style={{width:'100%',height:220}}>
                </div>



        )
    }
}

export default PieChart;