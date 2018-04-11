import React from 'react';
import {Select,Button,} from 'antd';
const Option = Select.Option;

class SelectPanel extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }
    handleChange =(value)=>{
        console.log(`selected ${value}`);
        if(value ==="age"){

        }
    };

    render() {
        return (
            <div >
                <span>请选择统计维度</span>
                <Select defaultValue="age" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="age">年龄</Option>
                    <Option value="month">月份</Option>
                    <Option value="dType">病种</Option>
                    <Option value="gender">性别</Option>
                </Select>
                <Button type="primary">提交 </Button>
            </div>

        )
    }
}

export default SelectPanel;