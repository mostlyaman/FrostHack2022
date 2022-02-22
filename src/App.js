import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Archive } from "./components/Archive";
import { Code } from "./components/code";
import { Judges } from "./components/Judges";
import { Mentors } from "./components/Mentors";
import {Contactus} from "./components/Contactus";
import {Index} from "./components/Index";
import {Teams} from "./components/Teams";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import './App.css';

// import {Navbar} from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Switch>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/judges">
          <Judges />
        </Route>
        <Route path="/code">
          <Code />
        </Route>
        <Route path="/mentors">
          <Mentors />
        </Route>
        <Route path="/archive">
          <Archive />
        </Route>
        <Route path="/">
          <Index />
          <Contactus/>
        </Route>
      </Switch>
    </Router>
    
    <Footer/>
  </>
  );
}

export default App;
