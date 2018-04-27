import React from 'react';



class ProductListsItems extends React.Component {
    componentDidMount(){

    }

    render() {

        return (
           <div  >
               <span style={{fontSize:'.9rem',fontWeight:'bold',textAlign:'left'}}>{this.props.name}</span>
           </div>

        )
    }
}

export default ProductListsItems;