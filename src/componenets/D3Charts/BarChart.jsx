import React from 'react';
import * as d3 from 'd3';
import '../../style/D3Charts/BarChart.css'
class BarChart extends React.Component {
    constructor() {
        super();
        this.state = {

        };

        //SVG画布大小
        this.width =300;
        this.height =300;

        //画布周边的空白
        this.padding = {
            left:30,
            right:30,
            top:20,
            bottom:20
        };
        this.rectPadding = 4;  //矩形之间的空白


    }
    componentDidMount(){
        let self = this;
        let svg = d3.select('#svg-box-bar')
            .append('svg')
            .attr("width",self.width)
            .attr("height",self.height);

        //数据集
        let dataset = this.props.dataset?this.props.dataset:[ 10, 20, 30, 40, 33, 24, 12, 5];
        // console.log(dataset);

        //x轴的比例尺,索引比例尺

        let xScale = d3.scaleBand()
            .domain(d3.range(dataset.length))
            .rangeRound([0, self.width - self.padding.left - self.padding.right]);

        /* let xScale = d3.scaleOrdinal()
             .domain(['AA','AA','AA','AA','AA','AA','AA','AA'])
             .range([0, width - padding.left - padding.right])*/


        //y轴的比例尺，线性比例尺
        let yScale = d3.scaleLinear()
            .domain([0,d3.max(dataset)])
            .range([self.height - self.padding.top - self.padding.bottom, 0]);

        //定义x轴

        let xAxis = d3.axisBottom(xScale);

        //定义y轴
        let yAxis = d3.axisLeft(yScale);

        //矩形之间的空白
        let color=this.props.colorLists;
        let color2 =d3.schemeCategory10;
        //添加矩形元素
        let rects = svg.selectAll(".LineRect")
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
                    .attr("fill","steelblue"
                    );
            })
            .attr("class","LineRect")
            .attr("transform","translate(" + self.padding.left + "," + self.padding.top + ")")
            .attr("x", function(d,i){
                return xScale(i) + self.rectPadding/2;
            } )
            .attr("width", xScale.bandwidth() - self.rectPadding )
            .attr("y",function(d){
                let min = yScale.domain()[0];
                return yScale(min);
            })
            .attr("height",function (d) {
                return 0
            })
            .transition()
            .delay(200)
            .duration(1000)

            .attr("y",function(d){
                return yScale(d);
            })
            .attr("height", function(d){
                // console.log(this.padding.top);
                return self.height - self.padding.top - self.padding.bottom - yScale(d);
            })
            .attr('fill',(d,i)=>{
                return color2[i];
            });


        //添加x轴
        svg.append("g")
            .attr("class","axis")
            .attr("transform","translate(" + self.padding.left + "," + (self.height - self.padding.bottom) + ")")
            .call(xAxis);

        //添加y轴
        svg.append("g")
            .attr("class","axis")
            .attr("transform","translate(" + self.padding.left + "," + self.padding.top + ")")
            .call(yAxis);



    }
    componentWillReceiveProps(nextProps){
        /*在componentWillReceiveProps使用从父组件获取到的nextProps进行重绘*/
        // console.log(nextProps.dataset);
        let self =this; //使用self绑定this！！！达到在组件中进行属性提取的作用
        // this.reDraw(nextProps.dataset,self)

    }
   /* reDraw(dataset,self){
        let xScale = d3.scaleBand()
            .domain(d3.range(dataset.length))
            .rangeRound([0, self.width - self.padding.left - self.padding.right]);

        let yScale = d3.scaleLinear()
            .domain([0,d3.max(dataset)])
            .range([self.height - self.padding.top - self.padding.bottom, 0]);
        //添加一个 SVG 画布
        let svg = d3.select('#svg-box-bar');
        let color2 =d3.schemeCategory10;

       let updateRect =svg.selectAll('rect').data(dataset).on('mousemove',function (d,i) {
            d3.select(this)
                .attr("fill","yellow");
        })
            .on('mouseout',function (d,i) {
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("fill",(d,i)=>{
                        return color2[i]
                    });
            });

       let enterRect = updateRect.enter();

       let exitRect = updateRect.exit();

       updateRect.attr('fill',(d,i)=>{
           return color2[i]
       })

           .attr('x',(d,i)=>{
               return xScale(i) + self.rectPadding/2;
           })
           .attr('width',xScale.bandwidth() - self.rectPadding)
           .attr("y",function(d){
               let min = yScale.domain()[0];
               return yScale(min);
           })
           .attr("height",function (d) {
               return 0
           })
           .transition()
           .delay(200)
           .duration(1000)
           .attr('y',(d)=>{
               return yScale(d);
           })

           .attr("height", function(d){
               return self.height - self.padding.top - self.padding.bottom - yScale(d);
           })

    }*/
    render() {
        return (
            <div id="svg-box-bar">

            </div>

        )
    }
}

export default BarChart;