import React from 'react';
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h2>I'm home!</h2>;
const About = () => <h2>About me</h2>;
const Portfolio = () => <h2>This is where projects and stuff go!</h2>;
const Contact = () => <h2>Commence talk-say!</h2>;
const Stuff = () => <h2>Here's some stuff</h2>;

const Main = () => (
  <Router>
    <div className="container">
      <Navbar />
      <hr />
      <div id="main-body">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/stuff" component={Stuff} />
      </div>
    </div>
  </Router>
);

export default Main;
