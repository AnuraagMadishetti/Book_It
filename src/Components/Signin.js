import {Component} from "react";

class signin extends Component{
    constructor(){
        super();
        this.state={
            // bookName:this.props.match.params.bookname,
            form:{
               
                custEmail:"",
                custPassWord:"",
               
            },
            formErrMsg:{
               
               
                custEmail:"",
                custPassWord:"",
                

            },
            formValid:{
               
                custEmail:false,
                custPassWord:false,
                
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


        formValid.buttonActive=
        
        formValid.custEmail &&
        formValid.custPassWord &&
        

        this.setState({
            formErrMsg:formErrMsg,
        });

    };

    componentDidMount(){

    }




    render(){
        return(
            <div className="container container-table">
                <div className="row vertical-center-row">
                    <div className="col-md-6 offset-4 mt-5">
                        <div className="card" style={{width:"25rem",padding:"15px",background:"#FDEEF4"}}>
                            <div className="card-body" >
                                <h5 className="card-title"> <b>SIGN IN</b> </h5>

                            </div>


                           <div className="login_div">
                            <form id="form_login"
                            style={{padding:"10px"}}>
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

                                
                               
                             {/* <button className="btn btn-info" disabled={!this.state.formValid.buttonActive}>Register</button> */}

                            </form>
                            </div>
                            <button className="btn btn-info form-control" disabled={!this.state.formValid.buttonActive} onClick={this.handleSubmit}>Login</button>

                            {this.state.successMsg? (<h6 className="text-success">{this.state.successMsg}</h6>):(" ")}
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default signin;