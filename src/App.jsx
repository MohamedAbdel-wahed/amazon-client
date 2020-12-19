import React from 'react';
import { BrowserRouter } from 'react-router-dom' 
import Header from './components/Header'
import CartContextProvider from './contexts/CartContext'
import AdminRoutes from './routes/AdminRoutes'
import ClientRoutes from './routes/ClientRoutes'




function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="app">
            <Header />
            <AdminRoutes />
            <ClientRoutes />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
