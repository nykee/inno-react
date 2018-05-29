import React from 'react';
// import BarChart from '../../../componenets/D3Charts/BarChart'
import {Row,Col} from 'antd'
import ep from "../../../utils/eventProxy";
import {BarChart,Bar, XAxis, YAxis,  Tooltip} from 'recharts'

class AmountCount extends React.Component {
    constructor() {
        super();
        this.state = {
            selected:'pending',
            sData:[
                {name: 'Mon', value: 2400},
                {name: 'Tue', value: 1398},
                {name: 'Wed', value: 9800},
                {name: 'Thu', value: 3908},
                {name: 'Fri', value: 4800},
                {name: 'Sat', value: 3800},
                {name: 'Sun', value: 4300},
            ]
        };
    }

    getChartData(type){
        let ajaxData=[];
        if(type ==="Pending"){
            // console.log('pending');
            ajaxData =[
                {name: 'Mon', value: 2400},
                {name: 'Tue', value: 1398},
                {name: 'Wed', value: 9800},
                {name: 'Thu', value: 3908},
                {name: 'Fri', value: 4800},
                {name: 'Sat', value: 3800},
                {name: 'Sun', value: 4300},
            ];
            this.setState({
                selected:'pending',
                sData:ajaxData
            });

            // ep.trigger('AmountSelectionChange','Pending',ajaxData);

        }
        else if(type ==="Completed"){
            ajaxData =[
                {name: 'Mon', value: 1400},
                {name: 'Tue', value: 398},
                {name: 'Wed', value: 1800},
                {name: 'Thu', value: 2908},
                {name: 'Fri', value: 1800},
                {name: 'Sat', value: 800},
                {name: 'Sun', value: 3300},
            ];
            this.setState({
                selected:'completed',
                sData:ajaxData
            });

            // ep.trigger('AmountSelectionChange','Completed',ajaxData);
            // this.setState({
            //     ajaxData:ajaxData
            // });
        }
        else if(type ==="Refounded"){
            // console.log('Refounded');
            ajaxData =[
                {name: 'Mon', value: 1200},
                {name: 'Tue', value: 3398},
                {name: 'Wed', value: 4800},
                {name: 'Thu', value: 5908},
                {name: 'Fri', value: 2822},
                {name: 'Sat', value: 5300},
                {name: 'Sun', value: 1700},
            ];
            this.setState({
                selected:'refounded',
                sData:ajaxData
            });

            // ep.trigger('AmountSelectionChange','Refounded',ajaxData);
        }
        // console.log(ajaxData);
    }


        render() {
        let colorLists =['#B29EFF','#1CA8DD','#007AE1','#B29EFF','#1CA8DD','#007AE1','#B29EFF','#1CA8DD','#007AE1','#B29EFF'];
        return (
            <div>
                <Row>
                    <Col span={4} offset={2}><span className={this.state.selected==="pending"?'title-selected':'title'}  onClick={this.getChartData.bind(this,'Pending')}>Pending</span></Col>
                    <Col span={6}><span className={this.state.selected==="completed"?'title-selected':'title'} style={{marginLeft:'.5rem'}} onClick={this.getChartData.bind(this,'Completed')}>Completed</span></Col>
                    <Col span={6}><span className={this.state.selected==="refounded"?'title-selected':'title'} style={{marginLeft:'.5rem'}} onClick={this.getChartData.bind(this,'Refounded')}>Refounded</span></Col>
                    <Col span={4} offset={2}><i className="fa fa-edit fa-2x"/></Col>
                </Row>

                <BarChart width={300} height={300} data={this.state.sData}
                          margin={{top: 5, right: 5, left: 5, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>

        )
    }
}

export default AmountCount;