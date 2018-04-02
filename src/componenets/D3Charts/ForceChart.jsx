import React from 'react';
import * as d3 from 'd3';
import * as  fetch from  'd3-fetch'


class ForceChart extends React.Component {
    componentDidMount(){
        //SVG画布大小
        let width =300;
        let height =300;
       /* var padding = {
            left:30,
            right:30,
            top:20,
            bottom:20
        };*/

        //添加一个 SVG 画布
        var svg = d3.select('#svg-box')
            .append('svg')
            .attr("width",width)
            .attr("height",height);

        var color = d3.schemeCategory10;

        //力导向图初始数据
        var nodes = [ { name: "桂林" }, { name: "广州" },
            { name: "厦门" }, { name: "杭州" },
            { name: "上海" }, { name: "青岛" },
            { name: "天津" } ];

        var edges = [ { source : 0 , target: 1 } , { source : 0 , target: 2 } ,
            { source : 0 , target: 3 } , { source : 1 , target: 4 } ,
            { source : 1 , target: 5 } , { source : 1 , target: 6 } ];

        var simulation = d3.forceSimulation()
            .force('link',d3.forceLink().id((d)=>{
                return d.id
            }))
            .force('charge',d3.forceManyBody())
            .force('center',d3.forceCenter(width/2, height/2));
        fetch.json("../../assets/json/miserables.json").then(
            function(error,graph){
                if (error) throw error;
                console.log(graph);
                var link = svg.append("g")
                    .attr("class","links")
                    .selectAll("line")
                    .data(graph.links)
                    .enter().append("line")
                    .attr("stroke-width",function(d){return Math.sqrt(d.value);});

                var node = svg.append("g")
                    .attr("class","nodes")
                    .selectAll("circle")
                    .data(graph.nodes)
                    .enter().append("circle")
                    .attr("r",5)
                    .attr("fill",function(d){return color(d.group);})
                    .call(d3.drag()
                        .on("start",dragstarted)
                        .on("drag",dragged)
                        .on("end",dragended));

                simulation.nodes(graph.nodes)
                    .on("tick",ticked)
                    .force("link")
                    .links(graph.links);


                function ticked(){
                    link
                        .attr("x1",function(d){return d.source.x;})
                        .attr("y1",function(d){return d.source.y;})
                        .attr("x2",function(d){return d.target.x;})
                        .attr("y2",function(d){return d.target.y;});

                    node
                        .attr("cx",function(d){return d.x;})
                        .attr("cy",function(d){return d.y;});
                }

            });

        function dragstarted(d){
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx=d.x;
            d.fy=d.y;
        }
        function dragged(d){
            d.fx=d3.event.x;
            d.fy=d3.event.y;
        }

        function dragended(d){
            if(!d3.event.active) simulation.alphaTarget(0);
            d.fx=null;
            d.fy=null;
        }
    }

    render() {


        return (
            <div>
                <div id="svg-box">

                </div>
            </div>

        )
    }
}

export default ForceChart;