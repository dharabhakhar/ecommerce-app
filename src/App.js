import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from './component/layout';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/Contact';
import News from './pages/News';
import Single_item from './pages/Single_item';
import AddtoCart from './pages/AddtoCart';
import Wishlist from './pages/Wishlist';
import Login from './component/Login';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Placed from './pages/Placed';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/blog' element={<About />} />
            <Route path='/add_to_cart' element={<AddtoCart />} />
            <Route path='/wish' element={<Wishlist />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news/:id' element={<News />} />
            <Route path='/single_item/:id' element={<Single_item />} />
            <Route path='/checkOut' element={<Checkout />} />
            <Route path='/placed' element={<Placed />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
