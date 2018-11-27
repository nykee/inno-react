import React from 'react';
import {Button, Col, Row, Select} from "antd";

import {
    LineChart, Line, ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, Cell,
    CartesianGrid, Legend, PieChart, Pie, ScatterChart, ZAxis, Scatter, RadialBarChart, RadialBar
} from 'recharts';
const Option = Select.Option;
// let  Mock = require('mockjs');
class BasicChartAnalyze extends React.Component {
    constructor() {
        super();
        this.state = {
            ageData:[
                {name: '10-20岁', value: 2400},
                {name: '20-30岁', value: 1398},
                {name: '30-40岁', value: 9800},
                {name: '40-50岁', value: 3908},
                {name: '50-60岁', value: 4800},
                {name: '60-70岁', value: 3800},
                {name: '70-80岁', value: 4300},
                {name: '80-90岁', value: 4300},
                {name: '90-100岁', value: 4300},
            ],
            monthData:[
                {name:"1月",value:1000},
                {name:"2月",value:2000},
                {name:"3月",value:3000},
                {name:"4月",value:4000},
                {name:"5月",value:5000},
                {name:"6月",value:6000},
                {name:"7月",value:7000},
                {name:"8月",value:8000},
                {name:"9月",value:325000},
                {name:"10月",value:346000},
                {name:"11月",value:13450},
                {name:"12月",value:1530},
            ],
           dTypeData:[
                {name:"健康",value:102340},
                {name:"韧带断裂",value:22340},
                {name:"关节炎",value:301230},
                {name:"半月板损伤",value:400},
                {name:"骨质增生",value:5000},
                {name:"滑膜炎",value:600},
                {name:"韧带重建",value:7000},
                {name:"全膝置换",value:8000},
                {name:"臀肌挛缩",value:35000},
                {name:"股骨头坏死",value:36000},
                {name:"髋关节撞击",value:1350},
                {name:"其他",value:154230},
            ],
            genderData: [
                {name:"男",value:10400},
                {name:"女",value:2000},
            ],
            data:[
                {name: '10-20岁', value: 2400},
                {name: '20-30岁', value: 1398},
                {name: '30-40岁', value: 9800},
                {name: '40-50岁', value: 3908},
                {name: '50-60岁', value: 4800},
                {name: '60-70岁', value: 3800},
                {name: '70-80岁', value: 4300},
                {name: '80-90岁', value: 4300},
                {name: '90-100岁', value: 4300},
            ],
            selected:"age"
        };
    }

    componentDidMount() {


    }
    handleChange =(value)=>{
        // console.log(`selected ${value}`);
        this.setState({
            selected:value
        })


    };
    reDrawChart(){
        if(this.state.selected.toString() ==="age"){
            this.setState({
                data:this.state.ageData
            })
        }
        else if(this.state.selected.toString() ==="dType"){
            this.setState({
                data:this.state.dTypeData
            })
        }else if(this.state.selected.toString() ==="month"){
            this.setState({
                data:this.state.monthData
            })
        }
        else if(this.state.selected.toString() ==="gender"){
            this.setState({
                data:this.state.genderData
            })
        }
    }


    render() {
        let colorLists =['#B29EFF','#1CA8DD','#007AE1','#c6ff86','#48dd67','#a104e1','#ff714f','#1CA8DD','#43e1bc','#42b3ff','#f716ff','#a2ff05','#2ffbda'];
        return (
            <div style={{background:'#fff',height:'42rem'}}>
                <div style={{padding:'.9rem 0 1.2rem 0'}}>
                    <span style={{marginRight:'.5rem'}}>请选择统计维度</span>
                    <Select defaultValue="age" style={{ width: 120, marginRight:'.5rem'}} onChange={this.handleChange.bind(this)}>
                        <Option value="age">年龄</Option>
                        <Option value="month">月份</Option>
                        <Option value="dType">病种</Option>
                        <Option value="gender">性别</Option>
                    </Select>
                    <Button type="primary" onClick={this.reDrawChart.bind(this)}>提交 </Button>
                </div>

                <Row>
                    <Col span={12}>
                        <ResponsiveContainer width='100%' height={300}>
                            <BarChart  data={this.state.data}
                                       style={{margin:'0 auto'}}>
                                <XAxis dataKey="name" />
                                <YAxis  />
                                <Tooltip/>
                                <Legend />
                                <Bar style={{cursor:'pointer'}} dataKey="value"   >
                                    {this.state.data.map((entry,i)=>{
                                        return<Cell  key={'cell'+i} stroke={colorLists[i]}  fill={colorLists[i]}/>
                                    })}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col span={12}>
                        <ResponsiveContainer width='100%' height={300}>
                        <LineChart   data={this.state.data}
                                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                        </ResponsiveContainer>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <ResponsiveContainer width='100%' height={300}>
                            <PieChart  >
                            <Pie data={this.state.data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label>
                                {this.state.data.map((entry,i)=>{
                                    return<Cell  key={'cell'+i} stroke={colorLists[i]}  fill={colorLists[i]}/>
                                })}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col span={12}>
                        <ResponsiveContainer width='100%' height={300}>
                            <RadialBarChart   innerRadius="10%" outerRadius="80%" data={this.state.data} startAngle={180} endAngle={0}>
                                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='value' >
                                    {this.state.data.map((entry,i)=>{
                                        return<Cell  key={'cell'+i} stroke={colorLists[i]}  fill={colorLists[i]}/>
                                    })}
                                </RadialBar>
                                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                                <Tooltip />
                            </RadialBarChart>
                       </ResponsiveContainer>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default BasicChartAnalyze;