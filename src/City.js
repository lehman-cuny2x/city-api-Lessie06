import React from 'react';
import axios from 'axios';
import CitySearchComponent from './CitySearchComponent';

class City extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
    }

    citySubmit= (e) =>{
        e.preventDefault();

        let userInput = document.getElementById('city').value.toUpperCase();
        
        axios.get("https://ctp-zip-api.herokuapp.com/city/" + userInput )
        // .then(response => response.data)
        .then((response) =>{
            this.setState({
                loading:false,
                data: response.data,
                
                
            })
            // console.log(this.state.data)
            
            // console.log("Hello World")
        })
        .catch(error=> console.log(error))

        
        
    }

    
    
    
    render(){
        console.log(this.state.data)
        // let zips=[];
        // zips = this.state.data.map((zips,i) => <CitySearchComponent {...zips}/>)
         

        // let displayData=[];
         let displayData = <CitySearchComponent zips={(this.state.data)}/>;
        return(
            <div>
                <h1>Enter City </h1>
                <form >
                    <label>City Search:</label>
                   <p> <input type="text" id="city"></input>
                    <button type="button" onClick={this.citySubmit} >Submit</button>
                    </p>
                   {displayData} 
                </form>
            </div>
        )
    }
}

export default City;