import React from 'react';
import axios from "axios/index";
import * as d3 from 'd3';

class MapChart extends React.Component {
    componentDidMount(){
        /*axios.get('https://data.jianshukeji.com/jsonp?filename=geochina/china.json&callback=?')
            .then((data)=>{
                console.log(data);

                var svg = d3.select('#svg-box-map')
                    .append('svg')
                    .attr("width",width)
                    .attr("height",height);
                //SVG画布大小
                let width =300;
                let height =300;

                var projection = d3.geoMercator()
                    .center([107, 31])
                    .scale(850)
                    .translate([width/2, height/2]);


                var path = d3.geoPath(projection);

                let  color = d3.schemeCategory10;
                svg.selectAll("path")
                    .data( data )
                    .enter()
                    .append("path")
                    .attr("stroke","#000")
                    .attr("stroke-width",1)
                    .attr("fill", function(d,i){
                        return color[i];
                    })
            })
            .catch((err)=>{
                console.log(err);
            });*/





    }
    render() {
        return (
            <div id="svg-box-map">

            </div>

        )
    }
}

export default MapChart;