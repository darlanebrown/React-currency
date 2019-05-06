import React, { Component } from 'react';
import './App.css';

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
             <h1>Hello</h1>
         <div class="container">
           <div class="barchart-title">Currency</div>
           <div class="barchart">
             <div onClick={this.showCurrency.bind(this,'EUR')} id="first-currency" class="currency">EUR</div>
             <div onClick={this.showCurrency.bind(this,'USD')} id="second-currency" class="currency">USD</div>
             <div onClick={this.showCurrency.bind(this,'AUD')} id="third-currency" class="currency">AUD</div>
             <div  onClick={this.showCurrency.bind(this,'GBP')}  id="fourth-currency" class="currency">GBP</div>
             <div  onClick={this.showCurrency.bind(this,'BRL')}  id="fifth-currency" class="currency">BRL R</div>
           </div>
         </div>
        </body>
    /*
    /*
            //{this.state.data.map(
            /*step 2: create a div that just says hello the appropriate number of times - hint: use Object.entries() from MDN*/
            /*step 3: narrow down exactly how to get out pieces of data you need
          
       //const object1 = {object.data};
       //console.log(Object.entries(object)[data]);   
       //response(
       //this.data.object  
            
            */
        )
         
    }
}

export default App;
