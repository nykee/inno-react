import React from 'react';
import {AreaChart, Area, XAxis, YAxis, Tooltip,ResponsiveContainer} from 'recharts'
import CommonTitle from "../SalesDashboard/CommonTitle";

let  Mock = require('mockjs');
class MonthlySummary extends React.Component {


    render() {
        let data2=[];
        for(let i =0;i<30;i++){
            let dataItem ={name:i+1+'',uv:Mock.mock({"number|100-5000":5000}).number,pv:Mock.mock({"number|100-5000":5000}).number,amt:Mock.mock({"number|100-5000":5000}).number};
            data2.push(dataItem);
        }
        console.log(data2);

        return (
            <div>
                <CommonTitle titleName="Monthly Summary"/>
                <ResponsiveContainer width='100%' height={300}>
                    <AreaChart  data={data2}
                               margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area type='linear' dataKey='uv' stackId="1"  fill='#9F86FF' />
                        <Area type='linear' dataKey='pv' stackId="2"  fill='#007AE1' />
                        <Area type='linear' dataKey='amt' stackId="3"  fill='#1CA8DD' />
                    </AreaChart>
                </ResponsiveContainer>

            </div>

        )
    }
}

export default MonthlySummary;