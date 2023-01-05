import { useEffect } from "react";

// styled
import styled from "styled-components";

// router
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";

// component
import CartProduct from './components/CartProduct';
import TotalCounter from "./components/TotalCounter";

const CartPage = ({cart}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StytledCart>
      <h1>Your Cart</h1>
      {
        cart.length === 0 
        ? <div className="placeholder">
            <h2>Your Cart is Empty..</h2>
            <Link to="/order">Continue Ordering</Link>
        </div>
        : <>
            <div className="product-wrapper">
              {
                cart.map((product, index) => {
                  return (
                    <CartProduct
                      key={index}
                      index={index}
                      cart={cart}
                      product={product.product}
                      title={product.product.title}
                      price={product.product.price}
                      image={product.product.image}
                      id={product.product._id}
                      qty={product.qty}
                      request={product.request}
                      order_id={product.order_id}
                    />
                  )
                })
              }
            </div>
            <TotalCounter />
        </>
      }
    </StytledCart>
  )
}

const StytledCart = styled.section`
background: #bbbbbb;
border-radius: 12px;
min-height: 40vh;
padding-bottom: 30px;
  h1 {
    display: flex;
    font-size: 30px;
    border-bottom: 1px solid black;
    width: 90%;
    margin: 20px auto;
  }
  .placeholder {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 24px;
    }
    a {
      cursor: pointer;
      background: red;
      width: 200px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: white;
      border-radius: 6px;
      transition: 0.2s;
      border: red 1px solid;
      margin-top: 20px;
      &:hover {
        background: #000000;
        text-decoration: none;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(CartPage);