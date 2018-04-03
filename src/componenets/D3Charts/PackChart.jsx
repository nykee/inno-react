import React from 'react';
import * as d3 from "d3";

class PackChart extends React.Component {
    componentDidMount(){
        //SVG画布大小
        let width =300;
        let height =300;
        var svg = d3.select('#svg-box-pack')
            .append('svg')
            .attr("width",width)
            .attr("height",height);

        // d3.json('../../assets/json/city_tree.json',function (err, root) {
        //     console.log(root);
        // })

    }
    render() {
        return (
            <div id="svg-box-pack">

            </div>

        )
    }
}

export default PackChart;