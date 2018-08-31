import React from 'react';


class PieChart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var echarts = require('echarts/echarts');
        require('echarts/chart/pie');
        let chart =echarts.init(document.getElementById(this.props.DomID));
        chart.setOption(this.props.chartOption);

    }

    render() {
        return (

                <div id={this.props.DomID} style={{width:'100%',height:220}}>
                </div>



        )
    }
}

export default PieChart;