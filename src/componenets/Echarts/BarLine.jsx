import React from 'react';
var echarts = require('echarts/echarts');
require('echarts/chart/bar');
require('echarts/chart/line');
class BarLine extends React.Component {
    constructor() {
        super();
        // let chart =echarts.init(document.getElementById(this.props.chartID));
        // this.chart =echarts.init(document.getElementById(this.props.chartID));
        this.state = {};
    }

    componentDidMount() {

        let chart =echarts.init(document.getElementById(this.props.chartID));
        chart.setOption(this.props.chartOption);
        window.onresize = ()=>{
            chart.resize()
        }

    }
    componentWillReceiveProps(nextProps){
        let chart =echarts.init(document.getElementById(this.props.chartID));
        chart.setOption(nextProps.chartOption)
    }
    /*setOption(){
        this.chart.setOption(this.props.chartOption);
    }*/

    render() {
        return (
            <div id={this.props.chartID} style={{width:'100%',height:220}}>
            </div>

        )
    }
}

export default BarLine;