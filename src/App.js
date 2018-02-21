import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import BuyNew from'./components/BuyNew'
import List from'./components/List'
import footer from'./components/footer'

class App extends Component {
 	constructor(props){
		super(props);
		this.state= {
			wager:'',
			account: 0,
			stock:[
				{ticker: "Netflix", price: 250, }
	  		],
		}
			this.handleCashSubmit= this.handleCashSubmit.bind(this);
			this.handleBuyNewSubmit= this.handleBuyNewSubmit.bind(this);
			this.handleChange= this.handleChange.bind(this);
			this.handleChangePrice= this.handleChangePrice.bind(this);
			this.handleUpdate = this.handleUpdate.bind(this);
	}



	handleChange(e){
		var name = e.target.name;
		var value = e.target.value
		this.setState({
			[name]: value
		})
	}

	handleCashSubmit(e){
		e.preventDefault();
		this.setState({
			account:this.state.wager,
			wager:"",
		})
		console.log(this.state.priceClicker)
	}

	handleChangePrice(e,index){
		console.log(index)
		e.preventDefault();
		this.setState({
			update : index
		})
	}

	handleBuyNewSubmit(e){
		var newStock = this.state.stock.concat({
			ticker:this.state.tickerInput,
			price:this.state.priceInput,
		})

		console.log(newStock.price)

		var balance= this.state.account - this.state.priceInput

		e.preventDefault();
		this.setState({
			stock: newStock,
			tickerInput: '',
			priceInput: '',
			account: balance,
		})
		
	}

	handleUpdate(e,stock){
		console.log(stock)
		e.preventDefault()
		var newStock = this.state.stock.map(i => {if (i.ticker==stock) {
					i.newPrice=this.state.newPrice
					return i
				}
				else {
					return i
				}})
		this.setState({
			update: "",
			stock: newStock,
			newPrice: 0
		})
	}



  render() {
    return (
      <div	 	className="App">

       <Main 	wager= {this.state.wager}
       			account= {this.state.account}
       			updateWager= {this.handleChange}
       			onSubmit= {this.handleCashSubmit}
        />

        <List	stock = {this.state.stock}
        		handleChange= {this.handleChange}
        		updatePriceWasClicked= {this.state.priceClicker}
        		changePrice = {this.handleChangePrice}
        		update = {this.state.update}
        		handleUpdate = {this.handleUpdate}
        />
       

        <BuyNew onChange= {this.handleChange}
        		updatePortfolio = {this.handleBuyNewSubmit}
        		tickerInput = {this.state.tickerInput}
        		priceInput = {this.state.priceInput}
        		qtyInput = {this.state.qtyInput}
        		/>

        <footer/>

      </div>
    );
  }
}



export default App;
