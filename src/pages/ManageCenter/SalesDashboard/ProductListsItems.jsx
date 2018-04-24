import React from 'react';



class ProductListsItems extends React.Component {
    componentDidMount(){

    }

    render() {

        let qty = this.props.qty;
        qty = (qty/1000>1)?(qty/1000)+"K":qty;
        // console.log(qty);
        return (
           <div  >
               <p>{this.props.name}</p>
               <div className="SVG-container" >
                   <svg width="120" height="120" >
                       <defs>
                           <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient1">
                               <stop offset="0%" stopColor="#1CA6DA"/>
                               {/*<stop offset="50%" stopColor="#2091BE"/>*/}
                               <stop offset="100%" stopColor="#1CA6DA"/>
                           </linearGradient>
                           <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient2">
                               <stop offset="0%" stopColor="#2188B1"/>
                               {/*<stop offset="50%" stopColor="#2D414E"/>*/}
                               <stop offset="100%" stopColor="#2B4B5D"/>
                           </linearGradient>
                           <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient3">
                               <stop offset="0%" stopColor="#2B4B5D"/>
                               {/*<stop offset="50%" stopColor="#2D414E"/>*/}
                               <stop offset="100%" stopColor="#2F323A"/>
                           </linearGradient>
                       </defs>
                       <g>

                           <circle cx="60" cy="60" r="45" strokeWidth="8" stroke="url('#gradient1')" fill="none" />
                           <circle cx="60" cy="60" r="45" strokeWidth="8" stroke="url('#gradient2')" fill="none" />
                           <circle cx="60" cy="60" r="45" strokeWidth="8" stroke="url('#gradient3')" fill="none" />
                       </g>

                   </svg>
                   <div className="QTY-container">
                       <h4 className="QTYNumber">{qty}</h4>
                       <h4 className="QTY">QTY</h4>
                   </div>
               </div>




           </div>

        )
    }
}

export default ProductListsItems;