// import { Component } from "react";

// class Home extends Component{




// }

import React from "react";
import {Grid,Typography,withStyles, cardContent, CardActions, CardMedia, Card, Button, CardHeader} from "@material-ui/core"
import { Divider, IconButton } from "material-ui";
import {Link} from "react-router-dom";
import Cards from './Cards';
import Carsoul from './Carsoul';

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";
// import CardMedia from "@material-ui/core/CardMedia";

const useStyles=(theme)=>({

	root:{
		color:"#2EFF22"
	}

})
 function Home() {
return (
// 	<div style={{}}>
// 	<h4>How to use CardComponent in ReactJS?</h4>
// 	<Card
	
// 		style={{
// 		width: 400,
// 		backgroundColor: "yellow",
// 		}}
// 	>
// 		<CardContent>
// 		<Typography
// 			style={{ fontSize: 14 }}
// 			color="textSecondary"
// 			gutterBottom
// 		>
// 			Greetings of the day
// 		</Typography>
// 		<Typography variant="h5" component="h2">
// 			How are you ?
// 		</Typography>
// 		<Typography
// 			style={{
// 			marginBottom: 12,
// 			}}
// 			color="textSecondary"
// 		>
// 			Keep Motivated
// 		</Typography>
// 		<Typography variant="body2" component="p">
// 			Stay Happy
// 		</Typography>
// 		</CardContent>
// 		<CardActions>
// 		<Button size="small">Stay Safe.....</Button>
// 		</CardActions>

		
// 	</Card>
// 	</div>
// );


<container>


	

	{/* <Divider className="" orientation="vertical"/>
	<Link to={`/Cards`}>
	<IconButton type="submit" className="" aria-label="serach">
		<searchTcon></searchTcon>
	</IconButton>
	</Link> */}
	
	<Carsoul/>

	

<Grid container style={{marginTop:130}}>


<Grid item xs={false} sm={5}></Grid>
	<Grid item xs={30} sm={100}>
<span><form className="d-flex" role="search">

                         <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                       <button className="btn btn-dark" type="submit" style={{backgroundColor:'black'}}><b>Search</b></button></form>
	</span>
	</Grid>
	</Grid>


	<Grid container style={{marginTop:100}}>
	<Grid item xs={false} sm={4}></Grid>
	<Grid item xs={30} sm={100}>
	

	
		<span class='toto'>

			

		
		<span><Typography style={{color:'black' }} variant='h1'>Books are a</Typography>
		<Typography style={{color:'black'}} variant='h1'>Uniquely</Typography>
		<Typography style={{color:'black'}} variant='h1'>Portable Magic</Typography></span>
		</span>
	</Grid>
	
	<Grid item xs={false} sm={2}></Grid>

	
	

</Grid>



<Cards/>

</container>







);
}
export default withStyles(useStyles,{withTheme:true})(Home)
