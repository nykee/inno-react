import React from 'react';
import { Select,Row,Col,Button } from 'antd';
import h_301 from '../assets/img/mCenter/301.png'

const Option = Select.Option;
class MultipleCenter extends React.Component {
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
                                 placeholder="选择你需要查看数据的医院或机构">
                            <option value="301" selected="selected">解放军301总医院</option>
                            <option value="JST">积水潭医院</option>
                            <option value="GJTY">国家体育总局</option>
                            <option value="SHHS">华山医院</option>
                            <option value="D9RM">上海市第九人民医院</option>
                            <option value="D6RM">上海市第六人民医院</option>
                            <option value="SHTY">上海体育学院</option>
                            <option value="SHJT">上海交通大学</option>
                            <option value="GZJQ">广州军区总医院</option>
                            <option value="HNLG">华南理工大学</option>
                            <option value="XGZW">香港威尔士亲王医院</option>
                        </Select>
                        <Button type="primary">查看</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <ul>
                                    <li>逸动医疗北京中心</li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>逸动医疗上海中心</li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>逸动医疗广东中心</li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
                                    </li>
                                    <li>
                                        <a ><img src={h_301} alt="解放军301总医院" style={{width:50,height:50,verticalAlign:'middle'}}/><span>解放军301总医院</span></a>
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