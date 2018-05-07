import React from 'react';
import * as d3 from 'd3'

class CustomDPie extends React.Component {
    componentDidMount(){
        let dataset = this.props.data?this.props.data:[ 35,15,50,];
        let pie = d3.pie();
        let piedata =pie(dataset);

        //SVG画布大小
        let width =300;
        let height =300;

        //添加一个 SVG 画布
        var svg = d3.select('.svg-box-pie')
            .append('svg')
            .attr("width",width)
            .attr("height",height);

        var outerRadius = width/2.9; //外半径
        var innerRadius = width/4; //内半径，为0则中间没有空白

        let  color = this.props.colorLists?this.props.colorLists:d3.schemeCategory10;

        let arc =d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

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
        /*arcs.append("text")
            .attr("transform",function(d){
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor","middle")
            .text(function(d){
                return d.data;
            })*/
    }

    render() {


        return (
            <div className="svg-box-pie">

            </div>

        )
    }
}

export default CustomDPie;