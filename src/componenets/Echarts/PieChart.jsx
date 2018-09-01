import React from 'react';


class PieChart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var echarts = require('echarts/echarts');
        require('echarts/chart/pie');
        let chart =echarts.init(document.getElementById(this.props.chartID));
        chart.setOption(this.props.chartOption);
        chart.on('HOVER',(d)=>{
            console.log(d);
        }).on('CLICK',(d)=>{console.log(d)})

    }

    render() {
        return (

                <div id={this.props.chartID} style={{width:'100%',height:220}}>
                </div>



        )
    }
}

export default PieChart;