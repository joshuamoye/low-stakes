import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import BuyNew from'./components/BuyNew'
import List from'./components/List'
import Nav from './components/SideNav'
import {Grid, Row, Col} from 'react-bootstrap'
//import Footer from'./components/footer'

class App extends Component {
 	constructor(props){
		super(props);
		this.state= {
			portfolio:[
				{name: "Joshua", gain: [19], }, {name: 'Nicholas', gain: [17]}
	  		],
		}
			this.handleCashSubmit= this.handleCashSubmit.bind(this);
			this.handleBuyNewSubmit= this.handleBuyNewSubmit.bind(this);
			this.handleChange= this.handleChange.bind(this);
			this.handleChangegain= this.handleChangegain.bind(this);
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
		console.log(this.state.gainClicker)
	}

	handleChangegain(e,index){
		//console.log(index)
		e.preventDefault();
		this.setState({
			update : index
		})
	}

	handleBuyNewSubmit(e){
		var newportfolio = this.state.portfolio.concat({
			name:this.state.nameInput,
			gain:[this.state.gainInput],
		})

		//console.log(newportfolio.gain)

		var balance= this.state.account - this.state.gainInput

		e.preventDefault();
		this.setState({
			portfolio: newportfolio,
			nameInput: '',
			gainInput: '',
			account: balance,
		})
		
	}

	handleUpdate(e,portfolio){
		//console.log(portfolio)
		e.preventDefault()
		var newportfolio = this.state.portfolio.map(i => {if (i.name==portfolio) {
					i.gain.concat({
						gain: this.state.gain
					})

					return i
				}
				else {
					return i
				}})
		this.setState({
			update: "",
			portfolio: newportfolio,
		})
	}



  render() {
  
    return (

      <div	 	className="App">

      	<Grid>
      		<Row>
 				<Col lg={1}>
 					<Nav/>

			    </Col>

			    <Col lg={9}>

					<List	className = 'List'
	        		portfolio = {this.state.portfolio}
	        		handleChange= {this.handleChange}
	        		updategainWasClicked= {this.state.gainClicker}
	        		changegain = {this.handleChangegain}
	        		update = {this.state.update}
	        		handleUpdate = {this.handleUpdate}
			        /> 
			    	
			    </Col>

		    </Row>

		    <Row>

					<BuyNew onChange= {this.handleChange}
			        		updatePortfolio = {this.handleBuyNewSubmit}
			        		nameInput = {this.state.nameInput}
			        		gainInput = {this.state.gainInput}
			        		qtyInput = {this.state.qtyInput}
			        />

			        

			   
	        </Row>
	       	
	    </Grid>
      </div>
    );
  }
}



export default App;
