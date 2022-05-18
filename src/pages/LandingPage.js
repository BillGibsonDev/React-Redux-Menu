
// styled
import styled from "styled-components"

// router
import { Link } from "react-router-dom";

// images
import PizzaImage from '../images/pizzaLanding.jpg';

export default function LandingPage() {
  return (
    <StyledLanding>
        <img src={PizzaImage} alt="" />
        <div className="text-wrapper">
            <div className="text-container">
                <h2>Via Napoli</h2>
                <h3>Your favorite Italian Cuisines and more!</h3>
            </div>
            <Link to="/order">Order Now</Link>
        </div>
    </StyledLanding>
  )
}

const StyledLanding = styled.section`
    min-height: 50vh;
    display: flex;
    width: 100%;
    @media (max-width: 650px){
        flex-direction: column;
        min-height: 50vh;
    } 
    img {
        width: 50%;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        @media (max-width: 650px){
            width: 100%;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        } 
    }
    .text-wrapper {
        background: #bbbbbb;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 20vh;
        @media (max-width: 650px){
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
        }
        @media (max-width: 525px){
            flex-direction: column;
        } 
        h2, h3, a {
            margin-left: 16px;
            @media(max-width: 650px){
                margin: 0;
            }
            @media(max-width: 650px){
                margin: auto;
            }
        }
        .text-container {
            display: flex;
            flex-direction: column;
            h2 {
                font-size: 34px;
                font-family: 'Lobster', cursive;
            }
            h3 {
                margin: 10px 0 16px 16px;
            }
        }
        a {
            background: red;
            width: 200px;
            height: 40px;
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
            }
        }
    }
`;