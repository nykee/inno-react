import React from 'react';
import BarChart from '../../../componenets/D3Charts/BarChart'
import {Row,Col} from 'antd'
import ep from "../../../utils/eventProxy";

class AmountCount extends React.Component {
    constructor() {
        super();
        this.state = {
            selected:'pending',
            sData:[1200,857,3300,720,3900,1221,590]
        };
    }

    getChartData(type){
        let ajaxData=[];
        if(type ==="Pending"){
            // console.log('pending');
            ajaxData =[1200,857,3300,720,3900,1221,590];
            this.setState({
                selected:'pending',
                sData:ajaxData
            });

            // ep.trigger('AmountSelectionChange','Pending',ajaxData);

        }
        else if(type ==="Completed"){
            ajaxData =[700,527,3700,620,4100,221,190];
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
            ajaxData =[850,897,2200,1280,880,3221,790];
            this.setState({
                selected:'refounded',
                sData:ajaxData
            });

            // ep.trigger('AmountSelectionChange','Refounded',ajaxData);
        }
        console.log(ajaxData);
    }


        render() {
        let colorLists =['#B29EFF','#1CA8DD','#007AE1','#B29EFF','#1CA8DD','#007AE1','#B29EFF',]

        return (
            <div>
                <Row >
                    <Col span={4} offset={2}><span className={this.state.selected==="pending"?'title-selected':'title'}  onClick={this.getChartData.bind(this,'Pending')}>Pending</span></Col>
                    <Col span={6}><span className={this.state.selected==="completed"?'title-selected':'title'} style={{marginLeft:'.5rem'}} onClick={this.getChartData.bind(this,'Completed')}>Completed</span></Col>
                    <Col span={6}><span className={this.state.selected==="refounded"?'title-selected':'title'} style={{marginLeft:'.5rem'}} onClick={this.getChartData.bind(this,'Refounded')}>Refounded</span></Col>
                    <Col span={4} offset={2}><i className="fa fa-edit fa-2x"/></Col>
                </Row>
                <BarChart dataset={this.state.sData} colorLists={colorLists}/>
            </div>

        )
    }
}

export default AmountCount;