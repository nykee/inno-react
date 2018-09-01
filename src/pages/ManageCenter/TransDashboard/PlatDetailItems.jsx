import React from 'react';
import '../../../style/TransDash/PlatDetailItems.css'
class PlatDetailItems extends React.Component {


    render() {


        return (
            <div>
                <div className="plat-item-title">{this.props.itemTitle}</div>
                <div className="plat-item-content">{this.props.itemContent}</div>
            </div>

        )
    }
}

export default PlatDetailItems;