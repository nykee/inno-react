import React from 'react';
import '../../../style/ECharts/CustomLegend.css'
// import ep from '../../../utils/eventProxy';
import CustomLegendItems from './CustomLegendItems'
class CustomLegend extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    // componentWillMount() {
    //     let self = this;
    //     // console.log(this.props.legendOption.items);
    //     ep.on('changeLegendColor',function (event,color) {
    //         // console.log('pieHover');
    //         // console.log(event);
    //         // console.log(color);
    //         // self.props.legendOption.items.color =color;
    //
    //         self.setState({
    //            isHover:event
    //         });
    //         // console.log(self.state.isHover);
    //     })
    //
    // }

    render() {
        let items =this.props.legendOption.items;

        return(
            <div>
                {items.map((item,i)=>
                    <CustomLegendItems key={i} item={item} />
                )}
            </div>
        )

    }
}

export default CustomLegend;