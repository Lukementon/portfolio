import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/ContactMe";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={MyProjects} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
