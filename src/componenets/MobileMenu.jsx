import React from 'react';
import { Drawer, List, NavBar,Icon } from 'antd-mobile';

class MobileMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            open:true
        };
    }

    componentDidMount() {

    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    };

    render() {
        const sidebar = (<List>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
                if (index === 0) {
                    return (<List.Item key={index}
                                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                       multipleLine
                    >Category</List.Item>);
                }
                return (<List.Item key={index}
                                   thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                >Category{index}</List.Item>);
            })}
        </List>);
        return (
            <div>
                <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>运动学图表分析</NavBar>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: 100 }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                </Drawer>
            </div>

        )
    }
}

export default MobileMenu;