import {Component} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";



class Signup extends Component{
    constructor(){
        super();
        this.state={
            // bookName:this.props.match.params.bookname,
            form:{
                custFirstName:"",
                custLastName:"",
                custDob:"",
                custEmail:"",
                custPassWord:"",
                custcontactNo:"",
            },
            formErrMsg:{
                custFirstName:"",
                custLastName:"",
                custDob:"",
                custEmail:"",
                custPassWord:"",
                custcontactNo:"",

            },
            formValid:{
                custFirstName:false,
                custLastName:false,
                custDob:false,
                custEmail:false,
                custPassWord:false,
                custcontactNo:false,
            },
            successMsg:"",
        };
    }

    handleChange=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        let {form} = this.state;
        this.setState({
            form:{
                ...form,
                [name]:value,
            },
        })
        this.validateField(name,value);
    };

    validateField=(name,value)=>{
        let {formErrMsg,formValid}=this.state;

        switch(name){
            case "custFirstName":
                const regExp=/^[A-Za-z]{5,20}$/;
                if(value===""){
                    formErrMsg.custFirstName="required";
                    formValid.custFirstName=false;
                }else if(!value.match(regExp)){
                    formErrMsg.custFirstName="Not Valid";
                    formValid.custFirstName=false;

                }else{
                    formErrMsg.custFirstName="";
                    formValid.custFirstName=true;
                }
                break;

                case "custLastName":
                    const regExpLast=/^[A-Za-z]{5,20}$/;
                    if(value===""){
                        formErrMsg.custLastName="required";
                        formValid.custLastName=false;
                    }else if(!value.match(regExpLast)){
                        formErrMsg.custLastName="Not Valid";
                        formValid.custLastName=false;
    
                    }else{
                        formErrMsg.custLastName="";
                        formValid.custLastName=true;
                    }
                    break;
            
                case "custDob":
                    const today=new Date().setHours(0,0,0,0);
                    const inputDate=new Date(value).setHours(0,0,0,0);
                    if(value===""){
                        formErrMsg.custDob="required";
                        formValid.custDob=false;
                    
                    }else if(inputDate>today){
                        formErrMsg.custDob="Dob cannot be future";
                        formValid.custDob=false;
                    }
                    
                    
                    else{
                        formErrMsg.custDob="";
                        formValid.custDob=true;
                    }
                    break;
                
                

            case "custEmail":
                const regEmail=/^[A-z]+@[a-z]+(.com)/
                if(value===""){
                    formErrMsg.custEmail="required";
                    formValid.custEmail=false;
                }
                else if(!value.match(regEmail)){
                    formErrMsg.custEmail="Email is not Valid"
                    formValid.custEmail=false;
                }else{
                    formErrMsg.custEmail="";
                    formValid.custEmail=true;

                }
                break;

            case "custPassWord":
                const regPW=/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\d)(?=.*[!@^#$%&? "]).*$/
                if(value===""){
                    formErrMsg.custPassWord="required";
                    formValid.custPassWord=false;

                }else if(!value.match(regPW)){
                    formErrMsg.custPassWord="Not a Valid PassWord"
                    formValid.custPassWord=false;
                }
                else{
                    formErrMsg.custPassWord="";
                    formValid.custPassWord=true;
                }
                break;

            case "custcontactNo":
                const regCN=/^[6-9][0-9]{9}$/;
                if(value===""){
                    formErrMsg.custcontactNo="required";
                    formValid.custcontactNo=false;
                }
                else if(!value.match(regCN)){
                    formErrMsg.custcontactNo="Not a Valid a Indian Number";
                    formValid.custcontactNo=false;
                }else{
                    formErrMsg.custcontactNo="";
                    formValid.custcontactNo=true;
                }
                break;
                default:
                break;                
        }
        formValid.buttonActive=
        formValid.custFirstName &&
        formValid.custLastName &&
        formValid.custDob &&
        formValid.custEmail &&
        formValid.custPassWord &&
        formValid.custcontactNo;

        this.setState({
            formErrMsg:formErrMsg,
        });

    };

    componentDidMount(){

    }

    handleSubmit=(event)=>{
        event.preventDefault();
        Axios.post("http://localhost:4000/newCustomer",this.state.form)
        .then((response)=>{
            this.setState({
                ...this.state,
                successMsg:`Customer with name ${response.data.custFirstName+" "+response.data.custLastName} Added successfully`

            });
        })
        .catch((error)=>{

        });
    };
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-4 mt-5">
                        <div className="card" style={{width:"25rem",padding:"15px",background:"#FDEEF4"}}>
                            <div className="card-body" >
                                <h5 className="card-title"> <b>CUSTOMER REGISTRATION</b> </h5>

                            </div>



                            <form>
                                <div className="form-group" style={{height:"4.5rem"}}>
                                    <label htmlFor="custFirstName"> <b>First Name</b></label>
                                    <input className="form-control"
                                    type="text"
                                    placeholder="Enter your First Name"
                                    value={this.state.form.custFirstName}
                                    name="custFirstName"
                                    onChange={this.handleChange}>
                                    </input>   
                                </div>
                                {this.state.formErrMsg.custFirstName?(
                                    <h6>{this.state.formErrMsg.custFirstName}</h6>
                                ):("")}
                                

                                <div className="form-group" style={{height:"4.5rem"}}>
                                    <label htmlFor="custLastName"><b>Last Name</b></label>
                                    <input className="form-control"
                                    type="text"
                                    placeholder="Enter your Last Name"
                                    value={this.state.form.custLastName}
                                    name="custLastName"
                                    onChange={this.handleChange}>
                                    </input>   
                                </div>
                                {this.state.formErrMsg.custLastName?(
                                    <h6 className="btn-danger">{this.state.formErrMsg.custLastName}</h6>
                                ):("")}


                               <div className="form-group" style={{height:"4.5rem"}}>
                                    <label htmlFor="custDob"><b>Date Of Birth</b></label>
                                    <input className="form-control"
                                    type="date"
                                    placeholder="Enter your DOB"
                                    value={this.state.form.custDob}
                                    name="custDob"
                                    onChange={this.handleChange}>
                                    </input>   
                                </div>
                                {this.state.formErrMsg.custDob?(
                                    <h6>{this.state.formErrMsg.custDob}</h6>
                                ):("")}
        
                                <div className="form-group" style={{height:"4.5rem"}}>
                                    <label htmlFor="custEmail"><b>EmailID</b></label>
                                    <input className="form-control"
                                    type="email"
                                    placeholder="Enter Your Email Id"
                                    value={this.state.form.custEmail}
                                    name="custEmail"
                                    onChange={this.handleChange}>
                                    </input>   
                                </div>
                                {this.state.formErrMsg.custEmail?(
                                    <h6>{this.state.formErrMsg.custEmail}</h6>
                                ):("")}


                                <div className="form-group" style={{height:"4.5rem"}}>
                                    <label htmlFor="custPassWord"><b>PassWord</b></label>
                                    <input className="form-control"
                                    type="text"
                                    placeholder="Enter Your Password"
                                    value={this.state.form.custPassWord}
                                    name="custPassWord"
                                    onChange={this.handleChange}>
                                    </input>   
                                </div>
                                {this.state.formErrMsg.custPassWord?(
                                    <h6 color="blue">{this.state.formErrMsg.custPassWord}</h6>
                                ):("")}

                                <div className="form-group" style={{height:"4.5rem"}}>
                                    <label htmlFor="custcontactNo"><b>Phone Number</b> </label>
                                    <input className="form-control"
                                    type="text"
                                    placeholder="Enter Your Phone Number"
                                    value={this.state.form.custcontactNo}
                                    name="custcontactNo"
                                    onChange={this.handleChange}>
                                    </input>   
                                </div>
                                {this.state.formErrMsg.custcontactNo?(
                                    <h6>{this.state.formErrMsg.custcontactNo}</h6>
                                ):("")}
                               
                             {/* <button className="btn btn-info" disabled={!this.state.formValid.buttonActive}>Register</button> */}

                            </form>
                            <button className="btn btn form-control" style={{backgroundColor:'black',color:"white"}} component={Link} to={'/Signin'}  fullWidth variant="contained"  disabled={!this.state.formValid.buttonActive} onClick={this.handleSubmit} >Register</button>

                            {this.state.successMsg? (<h6 className="text-success">{this.state.successMsg}</h6>):(" ")}
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
export default Signup;