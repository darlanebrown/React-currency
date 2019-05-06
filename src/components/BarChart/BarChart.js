import React, { Component } from 'react';
import './BarChart.css';

class BarChart extends Component {

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
           <div class="barchart">
             <div onClick={this.showCurrency.bind(this,'EUR')} id="first-currency" class="currency">EUR</div>
             <div onClick={this.showCurrency.bind(this,'USD')} id="second-currency" class="currency">USD</div>
             <div onClick={this.showCurrency.bind(this,'AUD')} id="third-currency" class="currency">AUD</div>
             <div  onClick={this.showCurrency.bind(this,'GBP')}  id="fourth-currency" class="currency">GBP</div>
             <div  onClick={this.showCurrency.bind(this,'BRL')}  id="fifth-currency" class="currency">BRL R</div>
           </div>
         
        
   
        )
         
    }
}

export default BarChart;
