import "./App.css";
import { Container } from "react-bootstrap";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Topbar from "./components/Topbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Orderscreen from "./screens/Orderscreen";
import AdminScreen from "./screens/AdminScreen";
function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      {/* <Navigation/> */}
     
      <Switch>
      <Route path="/admin" component={AdminScreen}  ></Route>
        <Route path="/about" component={About} exact ></Route>
        <Route path="/contact" component={Contact} exact ></Route>
        <Route path="/" component={Homescreen} exact></Route>
        <Route path="/cart" component={Cartscreen} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/orders" component={Orderscreen} exact ></Route>




      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
