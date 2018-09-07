import React from 'react';
import CargoTableHeader from "./CargoTableHeader";
import CargoTableBody from "./CargoTableBody";

class CargoTable extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h4 className="cargo-title">{this.props.title}</h4>
               <CargoTableHeader/>
               <CargoTableBody datasource={this.props.datasource}/>



            </div>

        )
    }
}

export default CargoTable;