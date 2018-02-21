import React, { Component } from 'react';

class BuyNew extends Component{
render(){


	return(
		<div className= 'BuyNew'>
			<form onSubmit = {this.props.updatePortfolio}>
			<input
				className= 'ListItem' 	
				type= 'text' 
		    	name= 'tickerInput' 
		        placeholder= 'Enter a company name' 
		       	value={this.props.tickerInput}
		       	onChange= {this.props.onChange}
		    />


		    <input
				className= 'ListItem' 	
				type= 'number' 
		    	name= 'priceInput' 
		        placeholder= 'Enter a price' 
		        value={this.props.priceInput}
		        onChange= {this.props.onChange}
		    />

		    <input
				className= 'ListItem' 	
				type= 'number' 
		    	name= 'qtyInput' 
		        placeholder= 'Enter a quantity' 
		        value={this.props.qtyInput}
		        onChange= {this.props.onChange}
		    />

		    <input type = 'submit'/>

		    </form>

		</div>
		)
}

}

export default BuyNew;