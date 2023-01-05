// styled
import styled from "styled-components"

// router
import { Link } from "react-router-dom";

// components
import CartIcon from './CartIcon.js';

// redux
import { connect } from "react-redux";

const Nav = ({cart}) => {
  return (
    <StyledNav>
        <Link to="/" id="logo">Via Napoli</Link>
        <div className="nav-links">
            <Link id="home-link" to="/">Home</Link>
            <Link to="/order" style={{ marginLeft: cart.length < 1 ? 'auto': '0' }}>Order Online</Link>
            {
                cart.length === 0 
                ? <></>
                : <CartIcon /> 
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
    @media(max-width: 650px){
        min-height: 5vh;
    }
    #logo {
        color: red;
        font-size: 30px;
        font-family: 'Lobster', cursive;
        @media(max-width: 650px){
           font-size: 24px;
        }
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 250px;
        width: 100%;
        @media(max-width: 435px){
            max-width: 175px;
        }
        a {
            font-size: 16px;
            color: white;
            &:hover {
               text-decoration: underline;
               text-underline-position: under;
            }
            @media(max-width: 650px){
                font-size: 14px;
            }
        }
        #home-link {
            @media(max-width: 435px){
                display: none;
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