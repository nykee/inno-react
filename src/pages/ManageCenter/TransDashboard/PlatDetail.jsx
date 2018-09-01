import React from 'react';
import {Row,Col} from 'antd'
import PlatDetailItems from './PlatDetailItems'

class PlatDetail extends React.Component {


    render() {
        let datas = [
            {itemTitle:"平台名称",itemContent:'亚马逊'},
            {itemTitle:"总运单量",itemContent:'1114577'},
            {itemTitle:"当日累计运单",itemContent:'23525'},
            {itemTitle:"完成件数量",itemContent:'3253'},
            {itemTitle:"异常件数量",itemContent:'34'},
            {itemTitle:"准点率",itemContent:'90.45'},
            {itemTitle:"分拣完成数量",itemContent:'2383'},
            {itemTitle:"分拣完成率",itemContent:'94.56%'},
            {itemTitle:"积压件数量",itemContent:'2435'},
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