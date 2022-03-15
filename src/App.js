import Navbar from './components/Navbar';
import './App.css';
import React,{ useState} from 'react';
import Content from './components/Content';
import Work from './components/Work';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Team from './components/Team';
import Product from './components/Product';
import FAQ from './components/FAQ';

function App() {
  const [mode] = useState('dark')
  
  return (
    <>
    <Router>
    <div>
      <Navbar mode={mode}/>
      <Switch>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/">
          <Content />
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
