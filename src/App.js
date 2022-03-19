import { useEffect } from 'react'; 

// styled
import GlobalStyles from './GlobalStyles.js';

// pages
import LandingPage from './pages/LandingPage.js';
import OrderPage from './pages/OrderPage.js';
import CartPage from './pages/CartPage.js';
import ProductPage from './pages/ProductPage.js';

// components
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

// router
import { Routes, Route } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/actions/products.js';
import { getCart } from './redux/actions/cart.js';
import { connect } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getProducts());
        dispatch(getCart());
    }, [dispatch])

  return (
    <>

      <GlobalStyles />

      <Nav />

      <Routes>

        <Route path='/' exact element={<LandingPage />} />

        <Route path='/order' element={<OrderPage />} />

        <Route path='/order/:id' element={<ProductPage />} />

        <Route path='/cart' element={<CartPage />} />

      </Routes>

      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    cart: state.cart.cart
  };
};


export default connect(mapStateToProps)(App);
