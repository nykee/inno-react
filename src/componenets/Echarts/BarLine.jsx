import React from 'react';

class BarLine extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var echarts = require('echarts/echarts');
        require('echarts/chart/bar');
        require('echarts/chart/line');
        let chart =echarts.init(document.getElementById(this.props.chartID));
        chart.setOption(this.props.chartOption);

    }

    render() {
        return (
            <div id={this.props.chartID} style={{width:'100%',height:220}}>
            </div>

        )
    }
}

export default BarLine;