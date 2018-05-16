import React from 'react';
import * as d3 from 'd3'

class ScatterChart extends React.Component {
    constructor() {
        super();
        //SVG画布大小
        this.width =300;
        this.height =300;

        //画布周边的空白
        this.padding = {
            left:30,
            right:30,
            top:20,
            bottom:20
        };
    }
    componentDidMount(){
        let self = this;
        let svg = d3.select('#svg-box-scatter')
            .append('svg')
            .attr("width",self.width)
            .attr("height",self.height);

        //圆心数据
        let center =[
            [0.5,0.5],[.7,.8],[.4,.9],
            [0.11,0.32],[.88,.25],[.75,.12],
            [0.5,0.1],[.2,.3],[.4,.1],[.6,.7]
        ]
    }

    render() {


        return (
            <div id="svg-box-scatter">

            </div>

        )
    }
}

export default ScatterChart;