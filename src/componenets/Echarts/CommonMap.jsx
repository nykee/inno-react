import React from 'react';
// import echarts from 'echarts'
// import 'echarts/chart/map'

class CommonMap extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var echarts = require('echarts/echarts');
        require('echarts/chart/map');
        let  myChart = echarts.init(document.getElementById(this.props.DomID));
        myChart.setOption(this.props.chartOption);
        window.onresize= ()=>{
            myChart.resize()
        }

    }

    render() {
        return (
            <div id={this.props.DomID} style={{height:400}}>
            </div>

        )
    }
}

export default CommonMap;