
import './App.css';
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Home from  "./Components/Home";
import Ours from "./Components/Ours";
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Footer from './Components/Footer';
import ViewDetails from './Components/ViewDetails';


function App() {
  return (
   
    <Router>
      <>
     
      <Navbar/>
    
      
      <Switch>
      <Route exact path="/" render={()=><Redirect to="/home"/>} > </Route>
      <Route exact path="/bookSDetails" component={Cards}></Route>
      
      {/* <Route path="*" render={()=><Redirect to="/home"/>}></Route> */}

<Route exact path="/home" component={Home}></Route>
<Route exact path="/About" component={Ours}></Route>
<Route exact path="/Signup" component={Signup}></Route>
<Route exact path="/Signin" component={Signin}></Route>
<Route exact path="/ViewDetails" component={ViewDetails}></Route>

      </Switch>
     
      <Footer/>
      
      </>
      
    </Router>

    
  );
}

export default App;
