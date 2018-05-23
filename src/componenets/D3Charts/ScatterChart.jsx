import React from 'react';
import * as d3 from 'd3'

class ScatterChart extends React.Component {
    constructor() {
        super();
        //SVG画布大小
        this.width =300;
        this.height =300;
        this.xAxisWidth =300;
        this.yAxisWidth =300;

        //画布周边的空白
        this.padding = {
            left:30,
            right:30,
            top:20,
            bottom:20
        };
    }
    componentDidMount(){
      /* let color1= d3.rgb("rgb(255,255,255)");

       console.log(color1.brighter(2));*/
      let hsl = d3.hsl(120,1,.5);

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
        ];
        let xScale =d3.scaleLinear()
            .domain([0,1.2*d3.max(center,(d)=>{
                          return d[0]
                      })])
            .range([0,self.xAxisWidth]);
        let yScale =d3.scaleLinear()
            .domain([0,1.2*d3.max(center,(d)=>{
                return d[1]
            })])
            .range([0,self.yAxisWidth]);
        let circle = svg.selectAll('circle')
            .data(center)
            .enter()
            .append('circle')
            .attr('fill','black')
            .attr('cx',(d)=>{
                return self.padding.left+ xScale(d[0])
            })
            .attr('cy',(d)=>{
                return self.height -self.padding.bottom -yScale(d[1])
            })
            .attr('r',5)

    }

    render() {


        return (
            <div id="svg-box-scatter">

            </div>

        )
    }
}

export default ScatterChart;