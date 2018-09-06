import React from 'react';
import EP from '../../utils/eventProxy';

class PieChart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        // console.log(this.props.chartOption);
        var echarts = require('echarts/echarts');
        require('echarts/chart/pie');
        let ecConfig = require('echarts/config');
        let chart =echarts.init(document.getElementById(this.props.chartID));
        chart.setOption(this.props.chartOption);
        chart.on(
            ecConfig.EVENT.CLICK,(d)=>{
                // console.log(d);
                EP.trigger("PIE_CLICK",d);

            });
        window.onresize =function () {
            chart.resize();
        }



    }

    render() {
        return (

                <div id={this.props.chartID} style={{width:'100%',height:220}}>
                </div>



        )
    }
}

export default PieChart;