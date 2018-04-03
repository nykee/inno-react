import React from 'react';
import * as d3 from 'd3';

class TreeChart extends React.Component {
    componentDidMount(){
        //SVG画布大小
        let width =300;
        let height =300;

        var svg = d3.select('#svg-box-force')
            .append('svg')
            .attr("width",width)
            .attr("height",height);


        let tree =d3.tree()
            .size([width,height-200])
            .separation(function(a, b) { return (a.parent === b.parent ? 1 : 2); });


    }
    render() {
        return (
            <div id="svg-box-tree">

            </div>

        )
    }
}

export default TreeChart;