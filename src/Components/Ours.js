import { ClassNames } from "@emotion/react";
import React from "react";
import { Component } from "react";
import {Grid,Typography,withStyles, cardContent, CardActions, CardMedia, Card, Button, CardHeader} from "@material-ui/core"

import {Link} from "react-router-dom";
import { black } from "material-ui/styles/colors";

class  Ours extends Component{

   render(){

    //this is the about us code
    return (
        
       


//         <Grid container style={{marginTop:100}}>
// 	<Grid item xs={false} sm={1}></Grid>
// 	<Grid item xs={50} sm={150}>
	

	
// 		<span class='totopp'>

			

		
// 		<span><Typography style={{color:'#FFFAFA' }} variant='h4'> Dear readers,</Typography>

//         <Typography style={{color:'#FFFAFA' }} variant='h4'>We offer a tremendous gathering of books in the various classifications of Fiction,</Typography>
//         <Typography style={{color:'#FFFAFA' }} variant='h4'>Non-fiction, Biographies, History, Religions, Self – Help, and Children. We likewise</Typography>
//         <Typography style={{color:'#FFFAFA' }} variant='h4'>move in immense accumulation of Investments and Management,Computers,Engineering,</Typography>
//         <Typography style={{color:'#FFFAFA' }} variant='h4'>Medical, College, and School content references books proposed by various foundations</Typography>
//         <Typography style={{color:'#FFFAFA' }} variant='h4'>as scheduled the nation over. Besides this, we offer an expansive gathering of E-Books</Typography>
//         <Typography style={{color:'#FFFAFA' }} variant='h4'>at a reasonable value. </Typography>
        
// 		</span>
// 		</span>
// 	</Grid>
	
// 	<Grid item xs={false} sm={2}></Grid>
	

// </Grid>
<>
<div class="md:flex md:flex-row justify-between m-10 align-center">
            <div class="md:w-2/5 mt-15 flex flex-col align-center ml-3 max-w-sm ">
                <h1 id="a" class="text-3xl text-white font-semibold mb-3 " style={{color:'black'}}>Dear readers, We offer a tremendous gathering of books in the various classifications of Fiction,
                Non-fiction, Biographies, History, Religions, Self – Help, and Children references books proposed by various foundations
                Besides this, we offer an expansive gathering of E-Books</h1>
                <p class=" font-serif-500 text-white m-3">"To remain valuable in our economy … you must master the art of
                    quickly
                    learning complicated things. This
                    task requires deep work."</p>
                {/* <a href="/bookSDetails"
                    class="bg-gradient-to-r from-red-400 to-purple-400 w-1/3 text-center rounded-lg p-1 m-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="md:w-6 h-6 inline-block justify-center">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    shop</a> */}


<Button id="ajja" className="bg-gradient-to-r from-red-400 to-purple-400 w-1/3 text-center rounded-lg p-1 m-3 text-white" component={Link} to={'/bookSDetails'} type="submit" fullWidth variant="contained" color="primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="sm:w-2 h-2 inline-block justify-center">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>Shop</Button>

            </div>
            <div class="md:w-3/5">
                {/* <img class="w-100 h-100 m-3" src="C:\Users\Nani\Desktop\Web Development\The Bookmark\th.jfif"></img> */}
                <img class="w-150 " src="open-book-clip-art-magic-1.png"></img>
               
            </div>

        </div>
        </>
       


    )
   }
}
export default Ours;