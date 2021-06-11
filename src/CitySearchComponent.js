import React from 'react';


class CitySearchComponent extends React.Component{
    constructor(props){
        super(props);
        
        
    }


    render(){

        let items=[];
        items = this.props.zips.map((i)=> {return <p>Zip Codes in that area {i}</p>})

        return(
            <div>
                {items}
            </div>
        )
    }
}

export default CitySearchComponent;