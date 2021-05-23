import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer/";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
