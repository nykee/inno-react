import React from 'react';
import { Select,Row,Col,Button } from 'antd';
import MapChartMcenter from '../componenets/Echarts/MapChartMcenter'
import ep from '../utils/eventProxy'
import h_301 from '../assets/img/mCenter/301.png'
import h_JST from '../assets/img/mCenter/jst.png'
import h_GJTY from '../assets/img/mCenter/nstc.png'
import h_HSYY from '../assets/img/mCenter/hsyy.png'
import h_D9RM from '../assets/img/mCenter/9rm.png'
import h_D6RM from '../assets/img/mCenter/6rm.jpg'
import h_GZJQ from '../assets/img/mCenter/gzjy.png'
import h_HNLG from '../assets/img/mCenter/hnlg.jpg'
import h_WERS from '../assets/img/mCenter/wales.png'
import  {browserHistory} from "react-router";

const Option = Select.Option;
class MultipleCenter extends React.Component {
    constructor(){
        super();
        this.state ={
            selected:'301'
        };


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
        return (
            <div>
                <Row>
                    <Col> <h1>逸动医疗多中心展示</h1></Col>
                </Row>
                <Row>
                    <Col><h2>逸动医疗致力于关节功能多中心的建立，在北京上海广州香港等地均建立了多中心</h2></Col>
                    <Col>
                        <span>请选择你需要查看数据的医院或机构： </span>
                        <Select  style={{ width: 200 }}
                                 defaultValue="301"
                                 onSelect={this.handleSelect}>
                            <Option value="301" >解放军301总医院</Option>
                            <Option value="JST">积水潭医院</Option>
                            <Option value="GJTY">国家体育总局</Option>
                            <Option value="SHHS">华山医院</Option>
                            <Option value="D9RM">上海市第九人民医院</Option>
                            <Option value="D6RM">上海市第六人民医院</Option>
                            <Option value="SHTY">上海体育学院</Option>
                            <Option value="SHJT">上海交通大学</Option>
                            <Option value="GZJQ">广州军区总医院</Option>
                            <Option value="HNLG">华南理工大学</Option>
                            <Option value="XGZW">香港威尔士亲王医院</Option>
                        </Select>
                        <Button type="primary" onClick={this.chkCenterDetail}>查看</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={14}>
                        {/*map*/}
                        <MapChartMcenter></MapChartMcenter>
                    </Col>
                    <Col span={10}>
                        <ul>
                            <li>
                                <ul>
                                    <li>逸动医疗北京中心</li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_JST} alt="积水潭医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>积水潭医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_GJTY} alt="国家体育运动总局" style={{width:50,height:50,verticalAlign:'middle'}}/><span>国家体育运动总局</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>逸动医疗上海中心</li>
                                    <li>
                                        <a ><img src={h_HSYY} alt="华山医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>华山医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_D9RM} alt="上海市第九人民医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>上海市第九人民医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_D6RM} alt="上海市第六人民医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>上海市第六人民医院</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>逸动医疗广东中心</li>
                                    <li>
                                        <a ><img src={h_GZJQ} alt="广州军区总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>广州军区总医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_HNLG} alt="华南理工大学" style={{width:50,height:50,verticalAlign:'middle'}}/><span>华南理工大学</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_WERS} alt="香港威尔士亲王医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>香港威尔士亲王医院</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default MultipleCenter;