import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import MoviesList from "./components/movies-list.component";
import AddMovie from "./components/add-movie.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={MoviesList} />
        <Route path="/add" component={AddMovie} />
      </div>
    </Router>
  );
}

export default App;
