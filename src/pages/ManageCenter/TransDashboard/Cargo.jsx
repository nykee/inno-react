import React from 'react';
import {Row,Col} from 'antd';
import CargoTable from './CargoTable'
import '../../../style/TransDash/Cargo.css'

class Cargo extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let columns =[
            {
                title: '车牌',
                dataIndex: 'carNum',
                key: 'carNum',
                className:'tBody'
            },
            {
                title:'卸货仓位',
                dataIndex:'warehouseNum',
                key:'warehouseNum',
                className:'tBody'
            },
            {
                title:'卸货情况',
                dataIndex:'loadingStatus',
                key:'loadingStatus',
                className:'tBody'
            },
            {
                title:'预计完成',
                dataIndex:'finishTime',
                key:'finishTime',
                className:'tBody'
            },

        ];
        let cargo_in_data =[
            {
                carNum:'沪E0037A',
                warehouseNum:'T仓',
                loadingStatus:'卸货中',
                finishTime:'14:00'
            },
            {
                carNum:'沪B2638',
                warehouseNum:'G仓',
                loadingStatus:'已到达，未卸货',
                finishTime:'16:00'
            },
            {
                carNum:'沪DA0824A',
                warehouseNum:'T仓',
                loadingStatus:'卸货中',
                finishTime:'16:30'
            },
            {
                carNum:'沪A2239C',
                warehouseNum:'F仓',
                loadingStatus:'已完成',
                finishTime:'--'
            },
            {
                carNum:'沪A0565A',
                warehouseNum:'T仓',
                loadingStatus:'卸货中',
                finishTime:'14:00'
            },
        ];
        let cargo_out_data =[
            {
                carNum:'沪D2437A',
                warehouseNum:'F仓',
                loadingStatus:'装载中',
                finishTime:'14:00'
            },
            {
                carNum:'沪B22228',
                warehouseNum:'C仓',
                loadingStatus:'装载中',
                finishTime:'15:00'
            },
            {
                carNum:'沪D235245A',
                warehouseNum:'T仓',
                loadingStatus:'等待出发',
                finishTime:'--'
            },
            {
                carNum:'沪A35359C',
                warehouseNum:'C仓',
                loadingStatus:'未装货',
                finishTime:'14:30'
            },
            {
                carNum:'沪A3636A',
                warehouseNum:'F仓',
                loadingStatus:'等待出发',
                finishTime:'14:00'
            },
        ];
        return (
            <div>
                <Row gutter={12}>
                    <Col lg={{span:12}}>
                        <CargoTable title="入库管控" columns={columns} dataSource={cargo_in_data}/>
                    </Col>
                    <Col lg={{span:12}}>
                        <CargoTable title="出库管控" columns={columns} dataSource={cargo_out_data}/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Cargo;