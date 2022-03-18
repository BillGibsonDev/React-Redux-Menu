// styled
import styled from "styled-components"

// router
import { Link } from "react-router-dom";

// comppnents
import CartIcon from './CartIcon.js';

// redux
import { connect } from "react-redux";

const Nav = ({cart}) => {
  return (
    <StyledNav>
        <h1>Via Napoli</h1>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/order" id="order-button">Order</Link>
            {
                cart.length === 0 ? (
                    <></>
                ): (
                    <CartIcon />
                )
            }
        </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    h1 {
        color: red;
        font-size: 30px;
        font-family: 'Lobster', cursive;
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        max-width: 400px;
        width: 100%;
        a {
            font-size: 20px;
            color: white;
            &:hover {
               text-decoration: underline;
               text-underline-position: under;
            }
        }
        #order-button {
            background: red;
            width: 150px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: white;
            border-radius: 6px;
            transition: 0.2s;
            border: red 1px solid;
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


export default connect(mapStateToProps)(Nav);