import React from 'react';
import {Col, Row, Select} from "antd";
import CommonHeader from "../CommonHeader";
import echarts from 'echarts'
import BMap from '../../../../componenets/BMap/BMap'
import 'echarts/chart/map'
const Option = Select.Option;




class UserExperienceIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCity:'上海',
            lat:0,
            lon:0
        };
    }

    componentDidMount() {


    }
    handleChange(value) {
        // console.log(`selected ${value}`);
        this.setState({
            selectedCity:value
        });
        if(value ==="上海"){
            this.setState({
                lat:121.429,
                lon:31.184
            });
        }
        else if(value ==="北京"){
            this.setState({
                lat:116.283,
                lon:39.911
            });
        }
        else {
            this.setState({
                lat:113.263,
                lon:23.148
            });
        }
    }

    render() {
        return (
            <div className="box-container" style={{marginBottom:'.5rem'}}>
                <CommonHeader title="USER EXPERIENCE INDEX" titleSpan={14} lineSpan={10}/>
                <Row className="box-body">
                    <Col span={24}>
                        <Select defaultValue="上海"
                                style={{width:'90%'}}
                                onChange={this.handleChange.bind(this)}
                               >
                            <Option value="上海">上海</Option>
                            <Option value="北京">北京</Option>
                            <Option value="广州">广州</Option>
                        </Select>
                    </Col>
                  {/*  <div>
                        <BMap></BMap>
                        <div id="UEI-map" style={{height:'16rem'}}/>
                    </div>*/}
                    <Col span={24}>
                        <BMap city={this.state.selectedCity} lat={this.state.lat} lon={this.state.lon}></BMap>
                    </Col>
                </Row>

            </div>

        )
    }
}

export default UserExperienceIndex;