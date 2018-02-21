import React, { Component } from 'react';

class UpdateWager extends Component{
	constructor(props){
		super(props);
		this.state= {
			wager:"",
			account: ""
			//needs prop-types
	}
		this.handleSubmit= this.handleSubmit.bind(this);
		this.handleChange= this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({
			wager: e.target.value});
		
	}

	handleSubmit(e){
		this.setState({
			account:this.state.wager,
			wager:""
		})
		e.preventDefault();
	}


	render(){
		console.log(this.state)
		return(
			<div>
		 		<header className="App-header">
          			<h1 className="App-title"> LowStakes </h1>
          			<h4 className= 'Mission-Statement'> Let us give you a free trial to the market </h4>

	      			<form onSubmit = {this.handleSubmit}>
		       			<label> What's your wager? 
		        			<input	type= 'text' 
		        				name= 'wager' 
		        				placeholder= '$' 
		        				value={this.state.wager}
		        				onChange= {this.handleChange} 
		        			/>

		        			<input type = 'submit'/>
						</label>
	        		</form>
        		</header>
        	</div>
        
       )
	}
}

export default Main;

