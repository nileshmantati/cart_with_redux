import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './features/cart/Cart';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <nav style={{ padding: "1rem" }}>
        <Link to="/">Products</Link> | <Link to="/cart">Cart ({itemCount})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
