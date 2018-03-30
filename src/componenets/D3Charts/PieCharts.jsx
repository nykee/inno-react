import React from 'react';
import * as d3 from 'd3'

class PieCharts extends React.Component {
    componentDidMount(){
        let dataset = [30 , 10 , 43 , 55 , 13];
        let pie = d3.pie();
        let piedata =pie(dataset);

        //SVG画布大小
        let width =300;
        let height =300;

        //画布周边的空白
        var padding = {
            left:30,
            right:30,
            top:20,
            bottom:20
        };

        //添加一个 SVG 画布
        var svg = d3.select('#svg-box')
            .append('svg')
            .attr("width",width)
            .attr("height",height);

        var outerRadius = 150; //外半径
        var innerRadius = 0; //内半径，为0则中间没有空白

        let arc =d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        let  color = d3.schemeCategory10;
        console.log(color);

        var arcs =svg.selectAll('g')
            .data(piedata)
            .enter()
            .append('g')
            .attr('transform','translate('+(width/2)+','+(width/2)+')');

        arcs.append('path')
            .attr('fill',(d,i)=>{
                return color[i]
            })
            .attr("d",(d)=>{
                return arc(d)
            });
        arcs.append("text")
            .attr("transform",function(d){
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor","middle")
            .text(function(d){
                return d.data;
            });
    }
    render() {
        return (
            <div>

            </div>

        )
    }
}

export default PieCharts;