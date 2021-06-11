import React from 'react';


class CitySearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Zips:this.props.Zips
        }
        
    }


    render(){

        return(
            <div>
                <p>Zip Codes in that area {this.state.Zips}</p>
            </div>
        )
    }
}

export default CitySearchComponent;