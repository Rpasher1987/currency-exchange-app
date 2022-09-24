import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import CurrencyConverter from './CurrencyConverter';
import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router basename="/react-fx-converter">
      <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render={() => <h1>404 Not Found</h1>} />
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;