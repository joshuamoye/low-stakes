import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import {StickyContainer, Sticky} from 'react-sticky'

class Nav extends Component{
	render(){
		return(
			<div className = 'Nav'>
			<Grid>
			<Col lg={1}>
			  <Row className="show-grid">

			    NAV   
			    
			  </Row>
			  <Row className="show-grid">

			    NAV     
			    
			  </Row>
			  <Row className="show-grid">

			    NAV     
			    
			  </Row>
		    </Col>

			</Grid>

			</div>
			)
	}
}
 export default Nav;