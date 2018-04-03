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




    }
    render() {
        return (
            <div id="svg-box-tree">

            </div>

        )
    }
}

export default TreeChart;