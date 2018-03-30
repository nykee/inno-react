import React from 'react';
import * as d3 from 'd3';
import '../../style/D3Charts/LineCharts.css'
class LineCharts extends React.Component {

    componentDidMount(){
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

        //数据集
        var dataset = [ 10, 20, 30, 40, 33, 24, 12, 5];


        //x轴的比例尺,索引比例尺
        var xScale = d3.scaleBand()
            .domain(d3.range(dataset.length))
            .rangeRound([0, width - padding.left - padding.right]);

        //y轴的比例尺，线性比例尺
        var yScale = d3.scaleLinear()
            .domain([0,d3.max(dataset)])
            .range([height - padding.top - padding.bottom, 0]);

        //定义x轴
        /* var xAxis = d3.svg.axis()
             .scale(xScale)
             .orient("bottom");*/
        var xAxis = d3.axisBottom(xScale);

        //定义y轴
        /*var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");*/
        var yAxis = d3.axisLeft(yScale);

        //矩形之间的空白
        var rectPadding = 4;

        //添加矩形元素
        var rects = svg.selectAll(".LineRect")
            .data(dataset)
            .enter()
            .append("rect")
            .on('mousemove',function (d,i) {
                d3.select(this)
                    .attr("fill","yellow");
            })
            .on('mouseout',function (d,i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("fill","steelblue");
            })
            .attr("class","LineRect")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + rectPadding/2;
            } )
            .attr("width", xScale.bandwidth() - rectPadding )
            .attr("y",function(d){
                var min = yScale.domain()[0];
                return yScale(min);
            })
            .attr("height",function (d) {
                return 0
            })
            .transition()
            .delay(200)
            .duration(2000)

            .attr("y",function(d){
                return yScale(d);
            })
            .attr("height", function(d){
                return height - padding.top - padding.bottom - yScale(d);
            })
            .attr('fill','steelblue')



        ;

        //添加文字元素
        var texts = svg.selectAll(".MyText")
            .data(dataset)
            .enter()
            .append("text")
            .attr("class","MyText")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + rectPadding/2;
            } )
                .attr("dx",function(){
                    return (xScale.bandwidth() - rectPadding)/2;
                })
                .attr("dy",function(d){
                    return 20;
                })
                .text(function(d){
                    return d;
                })
            .attr('y',function (d) {
                let min = yScale.domain()[0];
                return yScale(min);
            })
            .transition()
            .delay(200)
            .duration(2000)
            .attr("y",function(d){
                return yScale(d);
            });

        //添加x轴
        svg.append("g")
            .attr("class","axis")
            .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
            .call(xAxis);

        //添加y轴
        svg.append("g")
            .attr("class","axis")
            .attr("transform","translate(" + padding.left + "," + padding.top + ")")
            .call(yAxis);

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

export default LineCharts;