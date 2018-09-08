import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Main extends Component{



	render(){
		
		return(
			<div>
		 		<header className="App-header">
          			<h1 className="App-title"> LowStakes </h1>
          			<h4 className= 'Mission-Statement'> Learn to trade. Play it safe. </h4>

	      			<form onSubmit = {this.props.onSubmit}>
		       			<label> What's your wager? 
		        			<input	type= 'number' 
			        				name= 'wager' 
			        				placeholder= '$' 
			        				value={this.props.wager}
			        				onChange= {this.props.updateWager}
			        				 
		        			/>

		        			<input  type = 'submit'
		        			/>
						</label>
	        		</form>
        		</header>
        		<h1 className = 'Bash'> Cash: {this.props.account}</h1>
        		
        	</div>
        
       )
	}
}





export default Main;

