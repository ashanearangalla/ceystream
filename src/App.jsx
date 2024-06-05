import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import './App.css';
import HomePages from "./home/HomePages";
import Footer from "./components/footer/Footer";



function App() {


  return (
    <>
      <Router>
        <Header/>
        

        <Switch>
          <Route exact path='/' component={HomePages} />

          
        </Switch>
        <Footer/>

    </Router>
    </>
  )
}

export default App
