import React, { Component } from 'react';

class BuyNew extends Component{
render(){


	return(
		<div className= 'BuyNew'>
			<form onSubmit = {this.props.updatePortfolio}>
			<input
				className= 'ListItem' 	
				type= 'text' 
		    	name= 'nameInput' 
		        placeholder= 'Enter a company name' 
		       	value={this.props.nameInput}
		       	onChange= {this.props.onChange}
		    />


		    <input
				className= 'ListItem' 	
				type= 'number' 
		    	name= 'gainInput' 
		        placeholder= 'Enter a gain' 
		        value={this.props.gainInput}
		        onChange= {this.props.onChange}
		    />

		    <input type = 'submit'/>

		    </form>

		</div>
		)
}

}

export default BuyNew;