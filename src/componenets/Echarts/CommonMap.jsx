import React from 'react';
import echarts from 'echarts'
import 'echarts/chart/map'

class CommonMap extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        let  myChart = echarts.init(document.getElementById(this.props.domID));
        myChart.setOption(this.props.chartOption);

    }

    render() {
        return (
            <div id={this.props.domId} style={{height:400}}>
            </div>

        )
    }
}

export default CommonMap;