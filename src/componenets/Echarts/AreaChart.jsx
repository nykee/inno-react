import React from 'react';
// import echarts from "echarts";
// let echarts =require('echarts/build/echarts-all');
// import  'echarts/chart/line';
// require('echarts/chart/line');
let  Mock = require('mockjs');

class AreaChart extends React.Component {
    constructor() {
        super();
        this.state = {
            height:300,

        };
    }
    componentWillMount(){
        // console.log(this.props.chartHeight);
        // this.setState()
        if(this.props.chartHeight){
            this.setState({
                height:this.props.chartHeight
            })
        }
    }
    componentWillReceiveProps(nextProps){
        var echarts = require('echarts/echarts');
        require('echarts/chart/line');
        // console.log(nextProps);
        let chart =echarts.init(document.getElementById(this.props.chartID));
        chart.setOption(nextProps.chartOption);
    }
    
    componentDidMount() {
        var echarts = require('echarts/echarts');
        require('echarts/chart/line');

        let option = this.props.chartOption;
        // console.log(option);
        let chart =echarts.init(document.getElementById(this.props.chartID));
        chart.setOption(option);
        // chart.on('click',(params)=>{
        //     console.log(params);
        //     // if(params.componentType == "xAxis"){
        //     //     console.log(params)
        //     // }
        // });
        chart.on('hover',(params)=>{
            // console.log(params);

        });


    }

    render() {
        return (
            <div id={this.props.chartID} style={{width:'100%',height:this.state.height}}>
            </div>

        )
    }
}

export default AreaChart;