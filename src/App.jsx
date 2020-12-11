import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import Header from './components/Header'
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shopping-cart" component={ShoppingCart} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
