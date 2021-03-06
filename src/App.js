import React, { Component } from 'react';
import './App.css';
import BarChart from './components/BarChart/BarChart';
import Nav from './components/Nav/Nav';

class App extends Component {
    state = {
        data: []
    }
    
    componentDidMount() {
         fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            /*step 1: get fetch working, console.log your data*/
            this.setState({
                data: Object.entries(data.rates)
            })
        })
    }
    
    showCurrency(name) {
        if(!this.state.data || this.state.data.length === 0) {
         return alert('Impossible to fetch currency data');
        }
        
        let value = name === "EUR" ? 1 : this.state.data.filter((cur) => cur[0] === name)[0][1];
        alert(value);
    }
    
    render() {
        
        return (
      <body background="http://www.clearviewsys.com/images/Digital-Currency-Rate-Board-Panel.gif">
             
         <div class="container">
           
           <Nav />
           <BarChart />
         </div>
        </body>
    
        )
         
    }
}

export default App;
