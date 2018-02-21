import React, { Component } from 'react';

class List extends Component{


	render(){ 
		var stock = this.props.stock.map((item,index)=>
			<tr key= {index}>

					<td>
						{item.ticker}
					</td>


					<td>
						{item.price}
					</td>


					<td>
						{item.newPrice}
					</td>


					<td>
						{this.props.update === index ?
						<div>
						<input type="number"
								name= "newPrice"
								onChange= {this.props.handleChange}
								 />
						<input type="submit" 
						onClick= {(e)=>this.props.handleUpdate(e,item.ticker)}
						/>
						</div>
						:
						<input type = 'submit'
							value= "update price"
							// onChange= {this.props.handleChange}
							onClick= {(e)=>this.props.changePrice(e,index)}
						/>
						}
						
					</td>

			</tr>)



		return(
			<div >	
				<form>
				<table>
					<tbody>
			       		<tr>
			       		
				       		<th>Ticker</th>
				       		<th>Cost</th>
				       		<th>Current Price</th>

			       		</tr>

			       		
			       		{stock}
			   

			       </tbody>
      			</table>
      			</form>	
				
			</div>
			)
	}
}

export default List;