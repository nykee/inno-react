import React from 'react';
import {Table} from 'antd'

class CargoTable extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }
    rowTest(r,i){
        // console.log(i);
        // console.log(r);
    }

    render() {
        return (
            <div>
                <h4 className="cargo-title">{this.props.title}</h4>
                <Table
                    dataSource={this.props.dataSource}
                    columns={this.props.columns}
                    bordered={true}
                    pagination={false}
                    size="small"
                    rowClassName={this.rowTest(0)}
                    showHeader={true}
                    // title={this.props.title}
                />

            </div>

        )
    }
}

export default CargoTable;