import React from 'react';



class ProductListsItems extends React.Component {


    render() {


        return (
           <div style={{border:'1px solid #fff'}}>
               <p>{this.props.name}</p>
           </div>

        )
    }
}

export default ProductListsItems;