// styled
import styled from "styled-components";
import * as palette from '../styled/ThemeVariables.js';

// router
import { Link } from "react-router-dom";

// components
import CartIcon from './CartIcon.js';

export const Nav = () => {
  return (
    <StyledNav>
        <Link to="/" id="logo">Via Napoli</Link>
        <div className="nav-links">
            <Link id="home-link" to="/">Home</Link>
            <Link to="/order">Order Online</Link>
            <CartIcon /> 
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
        color:${palette.ACCENTCOLOR};
        font-size: 2em;
        font-family: 'Lobster', cursive;
        @media(max-width: 650px){
           font-size: 1.5em;
        }
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 220px;
        width: 100%;
        @media(max-width: 650px){
            max-width: 150px;
        }
        a {
            font-size: 1em;
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
            @media(max-width: 650px){
                display: none;
            }
        }
    }
`;