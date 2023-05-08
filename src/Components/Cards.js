import { Component } from "react";
import Axios from "axios";
import ViewDetails from "./ViewDetails";
import {Link} from "react-router-dom";

import {Grid,Typography,withStyles, cardContent, CardActions, CardMedia, Card, Button, CardHeader, CardActionArea, CardContent} from "@material-ui/core"
import { CardTitle } from "material-ui";


const useStyle=(theme)=>({
    root:{
        padding:'2px 4px',
        display:'flex',
        alignItems:'center',
        width:'50%',
        padding:'10',
        marginTop:'2%'
    },
    input:{
        marginLeft:theme.spacing(1),
        flex:1,
        padding:15,
    },
    iconButton:{
        padding:10
    },
    divider:{
        height:28,
        margin:4
    },

    

      button: {
        background: '#1C2331',
        color: 'white',
        width: '100%',
        height: '40px',
        
      '&:hover': {
          backgroundColor: '#2a344a',
          boxShadow: 'none',    
        },
    },

    
})

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookArray: [],
            SuccessMsg: " ",
            errorMsg: "",
            SelectedBookName: "",
            redirectStatus: false,

        };
    };




    getAllBooks = async () => {

        try {
            let booksData = await Axios.get("http://localhost:4000/books");
            console.log('Anu working');
            this.setState({ bookArray: booksData.data })
        } catch (err) {
            if (err.response) this.setState({ errorMessage: err.response.data.message })
            else this.setState({ errorMessage: "Network Error" })
        }
    }




    componentDidMount() {
        console.log("bookssss");
        this.getAllBooks();
    }

    handleClick = (book) => {
        console.log("book")
        this.setState({
            ...this.state,
            redirectStatus: true,
            SelectedBookName: book.bookName
        });
    };


    displayBook() {
        return (
            <div class="m-4 ">
            <div div class="flex flex-row justify-between m-3">
            
                <div class="shadow-lg rounded-lg ">

                    <div className="row">

                
               
                    {this.state.bookArray.map((book, index) => {
                        console.log("bookmappppp");
                        return (
                        <div className="col-md-3" key={index}>

                            
                            <Card className="root">
                            <CardActionArea className="mani" style={{width:"25rem",padding:"78",paddingBottom:"30"}}>
                     

                           
                            <img src={book.bookPic}></img>
                            
                            </CardActionArea>
                            

                            <CardContent>


                                <div id="abc"className="cardContent">
                                    <Typography variant="h6" style={{color:"black"}}>
                                        <b>{book.bookName}</b>

                                    </Typography>

                                    <Typography variant="h6" color="secondary">
                                      ₹<b>{book.bookPrice}</b>
                                    </Typography>

                                </div>
                            </CardContent>
                            <CardActions disableSpacing className="cardActions">
                            <Button variant="contained" id="bcci" className="form-control" style={{backgroundColor:"black",color:'white',paddingBottom:"10px"}}>ADD TO CART</Button>
                            

                            </CardActions>
                            
                            
                            </Card>
                                
                           
                           

                         </div>   
                        )
                    })}
                    </div>
                    </div>

            </div>
            </div>

        )

}
                

                  
                      
    render() {
        console.log("anjnjjj")
        // if(this.state.redirectStatus){
        //     return <Redirect to={`/bookorg/${this.state.SelectedBookName}`}/>;

        // }else if(this.state.errorMsg){
        //     return <h1>{this.state.errorMsg}</h1>;
        // }
        // {
        return this.state.bookArray.length ? (
            this.displayBook()
        ) : (
            <h1>""</h1>
        );


    }

}


export default withStyles(useStyle,{withTheme:true}) (Cards);





