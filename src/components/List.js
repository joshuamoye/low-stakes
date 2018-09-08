import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import {StickyContainer, Sticky} from 'react-sticky'


class List extends Component{


	render(){ 
		var portfolio = this.props.portfolio.map((item,index)=> /* need another key*/
		<div key = {index}>

			<Grid>

			  <Row key = {index} className="show-grid">

			    <Col lg={4}>
				      {item.name}
			    </Col>

			    <Col lg={4}>
				      {item.gain}%
			    </Col>



			  </Row>


			  <Row className="show-grid">

			    <Col lg={1} className= 'row-buttons'>
			      Edit
			    </Col>

			    <Col lg={1}>
			      Duplicate
			    </Col>

			    <Col lg={1}>
			      Delete
			    </Col>

			  </Row>

			  
			  
			</Grid>
		</div>
		)



		return(
			<div className= 'List'>	
				<form>
					
						
				       		
				       		{portfolio}
				   

	      			
      			</form>	
      		</div>				
		)
	}
}

export default List;