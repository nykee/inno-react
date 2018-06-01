import React from 'react';
import {Row,Col} from 'antd'
// import ep from "../../../utils/eventProxy";
import {Line, LineChart, XAxis, YAxis,ResponsiveContainer,CartesianAxis,CartesianGrid} from 'recharts'
class SellersCount extends React.Component {
    constructor() {
        super();
        this.state = {
            selected:'bestsellers',
            amountAll:'27,856',
            increasement:140,
            chartData: [
                {name: 'A', val: 1000},
                {name: 'B', val: 2000},
                {name: 'C', val: 2200},
                {name: 'D', val: 2780},
                {name: 'E', val: 1890},
                {name: 'F', val: 2390},
                {name: 'G', val: 3490},
            ]
        };


    }
    getChartData(type){
        if(type ==="bestsellers"){
            this.setState({
                selected:'bestsellers',
                amountAll:'27,856',
                increasement:140,
                chartData: [
                    {name: ' A', val: 1000},
                    {name: ' B', val: 2000},
                    {name: ' C', val: 2200},
                    {name: ' D', val: 2780},
                    {name: ' E', val: 1890},
                    {name: ' F', val: 2390},
                    {name: ' G', val: 3490},
                ]

            });
        }
        else if(type ==="viewAll"){
            // console.log('Completed');
            this.setState({
                selected:'viewAll',
                amountAll:'47,888',
                increasement:121,
                chartData: [
                    {name: ' A', val: 1200},
                    {name: ' B', val: 2200},
                    {name: ' C', val: 1100},
                    {name: ' D', val: 3280},
                    {name: ' E', val: 2190},
                    {name: ' F', val: 4490},
                    {name: ' G', val: 2390},
                ]
            });
        }
    }

    render() {


        return (
            <div>
                <Row>
                    <Col span={6} offset={8}>
                        <span className={this.state.selected==='bestsellers'?'title-selected':'title'} onClick={this.getChartData.bind(this,'bestsellers')}>Best Sellers</span>
                    </Col>
                    <Col span={6} >
                        <span className={this.state.selected==='viewAll'?'title-selected':'title'} onClick={this.getChartData.bind(this,'viewAll')}>View All</span>
                    </Col>
                    <Col span={4} >
                        <i className="fa fa-edit fa-2x"/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <ResponsiveContainer width='100%' height={300}>
                            <LineChart  data={this.state.chartData}
                                        margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                                <XAxis dataKey={[]} tickLine={false}/>
                                <YAxis  />
                                {/*<Tooltip/>
                    <Legend />*/}
                                <CartesianGrid vertical={false} horizontal={true}  strokeWidth={1}/>
                                {/*<CartesianAxis/>*/}
                                <Line type="linear" dataKey="val" stroke="#0D76DF" dot={false} strokeWidth={4}/>
                                {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                            </LineChart>
                        </ResponsiveContainer>

                    </Col>
                </Row>

                <Row>
                    <Col span={12} >
                        <span className="price">$&nbsp;{this.state.amountAll}&nbsp;</span><span className="time">April 2018</span>
                        <i className="fa fa-arrow-up" style={{color:'#0AD02F',marginLeft:'.3rem'}}/>
                    </Col>
                    <Col span={5} offset={7}>
                        <span className="increase">{'+'+this.state.increasement+'%'}</span>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default SellersCount;