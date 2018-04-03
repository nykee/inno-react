import React from 'react';
import * as d3 from 'd3';



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
        var svg = d3.select('#svg-box-force')
            .append('svg')
            .attr("width",width)
            .attr("height",height);

        var color = d3.schemeCategory10;

        //力导向图初始数据
        var nodes = [ { name: "桂林" }, { name: "广州" },
            { name: "厦门" }, { name: "杭州" },
            { name: "上海" }, { name: "青岛" },
            { name: "天津" } ];

        var links = [ { source : 0 , target: 1 } , { source : 0 , target: 2 } ,
            { source : 0 , target: 3 } , { source : 1 , target: 4 } ,
            { source : 1 , target: 5 } , { source : 1 , target: 6 } ];

        // 通过布局来转换数据，然后进行绘制
       let simulation = d3.forceSimulation(nodes)
           .force('link', d3.forceLink(links).distance(100))
           .force('charge',d3.forceManyBody())
           .force('center',d3.forceCenter(width/2, height/2))
        simulation
            .nodes(nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(links);

        // 绘制

        var svg_links = svg.selectAll("line")
            .data(links)
            .enter()
            .append('line')
            .style("stroke","#ccc")
            .style("stroke-width",3)
            .call(d3.zoom()
                .scaleExtent([-5, 2])
            );

        var svg_nodes = svg.selectAll("circle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("r", '20')
            .attr("fill", function(d,i){
                return color[i];
            })
            .call(d3.drag().on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
        // console.log(nodes);

        //添加描述节点的文字
        var svg_texts = svg.selectAll("text")
            .data(nodes)
            .enter()
            .append("text")
            .style("fill", "black")
            .attr("dx", 20)
            .attr("dy", 8)
            .text(function(d){
                // console.log(d);
                return d.name;
            });

        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        function ticked() {
            svg_links.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            svg_nodes.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            svg_texts.attr("x", function(d){ return d.x; })
                .attr("y", function(d){ return d.y; });
        }

    }

    render() {


        return (
            <div id="svg-box-force">

            </div>

        )
    }
}

export default ForceChart;