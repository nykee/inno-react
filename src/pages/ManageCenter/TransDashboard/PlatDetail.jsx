import React from 'react';
import {Row,Col} from 'antd'
import PlatDetailItems from './PlatDetailItems'
import EP from '../../../utils/eventProxy'

class PlatDetail extends React.Component {
    constructor(){
        super();
        this.state ={
            dItems:{
                name:"亚马逊",
                ALL_SUM_MONTH:'22801',
                ALL_SUM_TODAY:'1489',
                COMPLETED_SUM_TODAY:'1433',
                UNUSUAL_SUM_TODAY:'20',
                ACCURACY:'1%',
                SORT_COMPLETED_SUM_TODAY:'2000',
                SORT_COMPLETED_RATE_TODAY:'1%',
                STOCK_SUM_TODAY:'1',
            }
        }
    }
    componentDidMount(){
        // console.log(this.state.dItems);
        let self =this;
        EP.on('PIE_CLICK',(d)=>{
            console.log(d);
            switch (d.name){
                case "亚马逊":
                    self.setState(
                        {
                            dItems:{
                                name:d.name,
                                ALL_SUM_MONTH:'22801',
                                ALL_SUM_TODAY:'1489',
                                COMPLETED_SUM_TODAY:'1433',
                                UNUSUAL_SUM_TODAY:'20',
                                ACCURACY:'1%',
                                SORT_COMPLETED_SUM_TODAY:'2000',
                                SORT_COMPLETED_RATE_TODAY:'1%',
                                STOCK_SUM_TODAY:'1',

                            }


                        }
                    );
                    break;
                case'天猫':
                    self.setState(
                        {
                            dItems:{
                            name:'天猫',
                            ALL_SUM_MONTH:'14555',
                            ALL_SUM_TODAY:'4074',
                            COMPLETED_SUM_TODAY:'2088',
                            UNUSUAL_SUM_TODAY:'21',
                            ACCURACY:'101%',
                            SORT_COMPLETED_SUM_TODAY:'2001',
                            SORT_COMPLETED_RATE_TODAY:'81%',
                            STOCK_SUM_TODAY:'21',

                            }


                        }
                    );
                    break;
                case '一号店':
                    self.setState(
                        {
                            dItems:{
                                name:'一号店',
                                ALL_SUM_MONTH:'10005',
                                ALL_SUM_TODAY:'3002',
                                COMPLETED_SUM_TODAY:'2052',
                                UNUSUAL_SUM_TODAY:'22',
                                ACCURACY:'102%',
                                SORT_COMPLETED_SUM_TODAY:'2002',
                                SORT_COMPLETED_RATE_TODAY:'82%',
                                STOCK_SUM_TODAY:'22',

                            }


                        }
                    );
                    break;
                case '京东':
                    self.setState(
                        {
                            dItems:{
                                name:'京东',
                                ALL_SUM_MONTH:'15333',
                                ALL_SUM_TODAY:'2389',
                                COMPLETED_SUM_TODAY:'2103',
                                UNUSUAL_SUM_TODAY:'23',
                                ACCURACY:'103%',
                                SORT_COMPLETED_SUM_TODAY:'2003',
                                SORT_COMPLETED_RATE_TODAY:'83%',
                                STOCK_SUM_TODAY:'23',

                            }


                        }
                    );
                    break;
                case'淘宝':
                    self.setState(
                        {
                            dItems:{
                                name:'淘宝',
                                ALL_SUM_MONTH:'254485',
                                ALL_SUM_TODAY:'23409',
                                COMPLETED_SUM_TODAY:'21004',
                                UNUSUAL_SUM_TODAY:'24',
                                ACCURACY:'104%',
                                SORT_COMPLETED_SUM_TODAY:'2004',
                                SORT_COMPLETED_RATE_TODAY:'84%',
                                STOCK_SUM_TODAY:'24',

                            }


                        }
                    );
                    break;
                default:
                    break;
            }
        })
    }

    render() {
        let datas = [
            {itemTitle:"平台名称",itemContent:this.state.dItems.name},
            {itemTitle:"月度运单量",itemContent:this.state.dItems.ALL_SUM_MONTH},
            {itemTitle:"当日累计运单",itemContent:this.state.dItems.ALL_SUM_TODAY},
            {itemTitle:"完成件数量",itemContent:this.state.dItems.COMPLETED_SUM_TODAY},
            {itemTitle:"异常件数量",itemContent:this.state.dItems.UNUSUAL_SUM_TODAY},
            {itemTitle:"准点率",itemContent:this.state.dItems.ACCURACY},
            {itemTitle:"分拣完成数量",itemContent:this.state.dItems.SORT_COMPLETED_SUM_TODAY},
            {itemTitle:"分拣完成率",itemContent:this.state.dItems.SORT_COMPLETED_RATE_TODAY},
            {itemTitle:"积压件数量",itemContent:this.state.dItems.STOCK_SUM_TODAY},
        ];


        return (
            <div>
                <Row>
                    {datas.map((data,i)=>{
                        return <Col span={8}>
                            <PlatDetailItems key={i} itemTitle={data.itemTitle} itemContent={data.itemContent}/>
                        </Col>
                    })}
                </Row>
            </div>

        )
    }
}

export default PlatDetail;