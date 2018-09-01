import React from 'react';

class PlatDetailItems extends React.Component {


    render() {


        return (
            <div>
                <div >{this.props.itemTitle}</div>
                <div >{this.props.itemContent}</div>
            </div>

        )
    }
}

export default PlatDetailItems;