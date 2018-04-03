import React from 'react';
import * as d3 from 'd3';
import '../../style/D3Charts/TreeChart.css'
class TreeChart extends React.Component {
    componentDidMount(){
        //SVG画布大小
        let width =300;
        let height =300;

        var svg = d3.select('#svg-box-tree')
            .append('svg')
            .attr("width",width)
            .attr("height",height);

        let pathg=svg
            .append("g")
            .attr("transform", "translate(40,0)");

        let nodeg=svg
            .append('g')
            .attr('class','nodes-group')
            .attr("transform", "translate(40,0)");

        let text = svg
            .append('g')
            .attr('class','text-group')
            .attr("transform", "translate(40,0)");


        let tree =d3.tree()
            .size([width,height-100])
            .separation(function(a, b) { return (a.parent === b.parent ? 2 : 3); });

        let CityTreedata= "{\n" +
            "            \"name\":\"中国\",\n" +
            "            \"children\":\n" +
            "                [\n" +
            "                    {\n" +
            "                        \"name\":\"浙江\" ,\n" +
            "                        \"children\":\n" +
            "                            [\n" +
            "                                {\"name\":\"杭州\" },\n" +
            "                                {\"name\":\"宁波\" },\n" +
            "                                {\"name\":\"温州\" },\n" +
            "                                {\"name\":\"绍兴\" }\n" +
            "                            ]\n" +
            "                    },\n" +
            "\n" +
            "                    {\n" +
            "                        \"name\":\"广西\" ,\n" +
            "                        \"children\":\n" +
            "                            [\n" +
            "                                {\n" +
            "                                    \"name\":\"桂林\",\n" +
            "                                    \"children\":\n" +
            "                                        [\n" +
            "                                            {\"name\":\"秀峰区\"},\n" +
            "                                            {\"name\":\"叠彩区\"},\n" +
            "                                            {\"name\":\"象山区\"},\n" +
            "                                            {\"name\":\"七星区\"}\n" +
            "                                        ]\n" +
            "                                },\n" +
            "                                {\"name\":\"南宁\"},\n" +
            "                                {\"name\":\"柳州\"},\n" +
            "                                {\"name\":\"防城港\"}\n" +
            "                            ]\n" +
            "                    },\n" +
            "\n" +
            "                    {\n" +
            "                        \"name\":\"黑龙江\",\n" +
            "                        \"children\":\n" +
            "                            [\n" +
            "                                {\"name\":\"哈尔滨\"},\n" +
            "                                {\"name\":\"齐齐哈尔\"},\n" +
            "                                {\"name\":\"牡丹江\"},\n" +
            "                                {\"name\":\"大庆\"}\n" +
            "                            ]\n" +
            "                    },\n" +
            "\n" +
            "                    {\n" +
            "                        \"name\":\"新疆\" ,\n" +
            "                        \"children\":\n" +
            "                            [\n" +
            "                                {\"name\":\"乌鲁木齐\"},\n" +
            "                                {\"name\":\"克拉玛依\"},\n" +
            "                                {\"name\":\"吐鲁番\"},\n" +
            "                                {\"name\":\"哈密\"}\n" +
            "                            ]\n" +
            "                    }\n" +
            "                ]\n" +
            "        }";
        var root = JSON.parse(CityTreedata);
        console.log(root);
        let nodes = d3.hierarchy(root);
        console.log(nodes);
        let haveDeal = tree(nodes);
        console.log(haveDeal);

        /**
         * 所有节点
         * */
        let lastAfterEdit = haveDeal.descendants();
        console.log("lastAfterEdit:",lastAfterEdit);

        /**
         * 所有连线
         * */
        let links = nodes.links();

        /***    画连线*/
        var link = pathg.selectAll(".link")
            .data(links)
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("d", d3.linkHorizontal()
                .x(function(d) { return d.y ; })
                .y(function(d) { return d.x ; }));

        /**
         * 画圆圈
         * */
        var circles=nodeg.selectAll('.circle')
            .data(lastAfterEdit)
            .enter()
            .append("circle")
            .attr('class','circle')
            .attr('cx',function (d) {
                return d.y;
            })
            .attr('cy',function (d) {
                return d.x;
            })
            .attr("r", 6);


        /** 画文本*/
        var texts = text
            .selectAll('text')
            .data(lastAfterEdit)
            .enter()
            .append('text')
            .attr('x',function (d) {
                return d.y;
            })
            .attr('y',function (d) {
                return d.x;
            })
            .text(function (d) {
                return d.data.name;
            })
            .style("text-anchor", function (d) {
                return d.children ? "end" : "start";
            })
            .attr("dx", function (d) {
                return d.children ? -10 : 10;
            })
            .attr('dy',function (d) {
                return 5;

            })

    }
    render() {
        return (
            <div id="svg-box-tree">

            </div>

        )
    }
}

export default TreeChart;