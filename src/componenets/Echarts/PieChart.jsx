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
        let chart =echarts.init(document.getElementById("Pie-E"));
        chart.setOption(this.props.chartOption);

    }

    render() {
        return (

                <div id="Pie-E" style={{width:'100%',height:220}}>
                </div>



        )
    }
}

export default PieChart;