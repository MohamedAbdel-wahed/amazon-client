import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import Login from '../pages/client/Login'
import Register from '../pages/client/Register'
import Home from '../pages/client/Home'
import ShoppingCart from '../pages/client/ShoppingCart'
import ProductDetails from '../pages/client/ProductDetails'

function ClientRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:product" component={ProductDetails} />
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

    </Switch>
  )
}

export default ClientRoutes
