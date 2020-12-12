import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 
import Header from './components/Header'
import CartContextProvider from './contexts/CartContext';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="app">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shopping-cart" component={ShoppingCart} />
            </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
