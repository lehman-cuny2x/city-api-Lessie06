import React from 'react';


class CitySearchComponent extends React.Component{
    constructor(props){
        super(props);
        
        
    }


    render(){

        let items=[];
        items = this.props.zips.map((i)=> {return <p> {i}</p>})

        return(
            <div>
            <h2>Zip Codes</h2>
                {items}
            </div>
        )
    }
}

export default CitySearchComponent;