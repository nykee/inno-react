import React from 'react';
import { Select,Row,Col,Button } from 'antd';
import MapChartMcenter from '../../componenets/Echarts/MapChartMcenter'
import ep from '../../utils/eventProxy'
import h_301 from '../../assets/img/mCenter/301.png'
import h_JST from '../../assets/img/mCenter/jst.png'
import h_GJTY from '../../assets/img/mCenter/nstc.png'
import h_HSYY from '../../assets/img/mCenter/hsyy.png'
import h_D9RM from '../../assets/img/mCenter/9rm.png'
import h_D6RM from '../../assets/img/mCenter/6rm.jpg'
import h_GZJQ from '../../assets/img/mCenter/gzjy.png'
import h_HNLG from '../../assets/img/mCenter/hnlg.jpg'
import h_WERS from '../../assets/img/mCenter/wales.png'
import  {browserHistory} from "react-router";
import HospItems from './HospItems'
import '../../style/MultipleCenter.css';

const Option = Select.Option;
class MultipleCenter extends React.Component {
    constructor(){
        super();
        this.state ={
            selected:'301',
            isHover:'',
            isBlinking:false
        };


    }
    componentDidMount(){
        let self = this;
        ep.on('makePointHover',(v)=>{
            // console.log(v);
            this.setState({
                isHover:v
            });
            if(v.toString() !="OTHERS"){

                    this.setState({
                        isBlinking:true
                    });
                /*if(this.state.isBlinking){
                    var timer1 =setInterval(()=>{
                        self.setState({
                            isBlinking:false
                        });
                    },1550)
                }else {
                    var timer2 =setInterval(()=>{
                        self.setState({
                            isBlinking:true
                        });
                    },1500)
                }*/



            }
            else{
                this.setState({
                    isBlinking:false
                });
                // clearInterval(timer1); clearInterval(timer2);

            }

        })

    }
    componentWillMount(){
    //    模拟ajax获取医院数据



    }
    chkCenterDetail=()=>{
        ep.trigger('chkHospDetail',this.state.selected);
        browserHistory.push('/hospital')
    };
    handleSelect =(value)=>{
       this.setState({
           selected:value
       })
    };
    render() {
       let hospLists=[
            {name:'解放军301总医院',value:'301'},
            {name:'积水潭医院',value:'JST'},
            {name:'国家体育总局',value:'国家体育总局'},
            {name:'华山医院',value:'SHHS'},
            {name:'上海市第九人民医院',value:'D9RM'},
            {name:'上海市第六人民医院',value:'D6RM'},
            {name:'广州军区总医院',value:'GZJQ'},
            {name:'华南理工大学',value:'HNLG'},
            {name:'香港威尔士亲王医院',value:'XGZW'},
        ];
        let options =[];
        for (let ops of hospLists) {
            options.push(
                <Option value={ops.value} >{ops.name}</Option>
            )
        }
        let beijing =[
            <ul  className={this.state.isHover ==="BJ"&&this.state.isBlinking?"border2":'borderNormal'}>
            <li className="centerListsTitle">XY医疗北京中心</li>
            <li className="centerListsItems">
                <HospItems src={h_301} name ="解放军301总医院"/>
            </li>
            <li className="centerListsItems">
                <HospItems src={h_JST} name ="积水潭医院"/>
            </li>
            <li className="centerListsItems">
                <HospItems src={h_GJTY} name ="国家体育运动总局"/>
            </li>
        </ul>] ;
        let shanghai = [
            <ul>
                <li className="centerListsTitle">XY医疗上海中心</li>
                <li className="centerListsItems">
                    <HospItems src={h_HSYY} name ="华山医院"/>
                </li>
                <li className="centerListsItems">
                    <HospItems src={h_D9RM} name ="上海市第九人民医院"/>
                </li>
                <li className="centerListsItems">
                    <HospItems src={h_D6RM} name ="上海市第六人民医院"/>
                </li>
            </ul>
        ];
        let guangdong = [
            <ul>
                <li className="centerListsTitle">XY医疗广东中心</li>
                <li className="centerListsItems">
                    <HospItems src={h_GZJQ} name ="广州军区总医院"/>
                </li>
                <li className="centerListsItems">
                    <HospItems src={h_HNLG} name ="华南理工大学"/>
                </li>
                <li className="centerListsItems">
                    <HospItems src={h_WERS} name ="香港威尔士亲王医院"/>
                </li>
            </ul>
        ]
        return (
            <div>
                <Row>
                    <Col> <h1>XY医疗多中心展示</h1></Col>
                </Row>
                <Row>
                    <Col><h2>XY医疗致力于关节功能多中心的建立，在北京上海广州香港等地均建立了多中心</h2></Col>
                    <Col style={{marginTop:'.8rem'}}>
                        <span>请选择你需要查看数据的医院或机构： </span>
                        <Select  style={{ width: '12.5rem' }}
                                 defaultValue="301"
                                 onSelect={this.handleSelect}>
                            {options}
                        </Select>
                        <Button type="primary" onClick={this.chkCenterDetail} style={{marginLeft:'.3rem'}}>查看</Button>
                    </Col>
                </Row>
                <Row style={{marginTop:'.8rem'}}>
                    <Col
                        xxl={{span:14}}
                        xl={{span:14}}
                        lg={{span:14}}
                        md={{span:14}}
                        sm={{span:14}}
                        xs={{span:24}}
                        >
                        <MapChartMcenter></MapChartMcenter>
                    </Col>
                    <Col
                        xxl={{span:8,offset:2}}
                        xl={{span:8,offset:2}}
                        lg={{span:8,offset:2}}
                        md={{span:8,offset:2}}
                        sm={{span:8,offset:2}}
                        xs={{span:20,offset:4}}
                         >
                            <ul style={{textAlign:'center',margin:'0 auto'}} >
                                <li >
                                    {beijing}
                                </li>
                                <li >
                                    {shanghai}
                                </li>
                                <li >
                                    {guangdong}
                                </li>
                            </ul>

                    </Col>
                </Row>
            </div>

        )
    }
}

export default MultipleCenter;