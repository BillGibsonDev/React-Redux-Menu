
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
        <div className="text-container">
            <h2>Via Napoli</h2>
            <h3>Your favorite Italian Cuisines and more!</h3>
            <Link to="/order">Order Now</Link>
        </div>
    </StyledLanding>
  )
}

const StyledLanding = styled.section`
    height: 50vh;
    display: flex;
    width: 100%;
    img {
        width: 50%;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }
    .text-container {
        background: #bbbbbb;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2, h3, a {
            margin-left: 16px;
        }
        h2 {
            font-size: 34px;
            font-family: 'Lobster', cursive;
        }
        h3 {
            margin: 20px 0 40px 16px ;
        }
        a {
            background: red;
            width: 200px;
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
            }
        }
    }
`;