import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';


function App() {
  return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route  exact path="products/:id"element={<Product />} />
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </>    
  );
}

export default App;
