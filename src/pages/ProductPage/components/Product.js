// styled
import styled from "styled-components";

// router
import { Link } from "react-router-dom";

export default function Product({title, price, image, id}) {
   
  return (
    <StyledProduct>
        <Link to={`/order/${id}`}><img src={image} alt="" /></Link>
        <div className="text-wrapper">
            <div className="text-container">
                <Link to={`/order/${id}`}>{title}</Link>
                <h3>${price}</h3>
            </div>
        </div>
        <div className="order-btn-container">
            <Link id="order-btn" to={`/order/${id}`}>Order</Link>
        </div>
    </StyledProduct>
  )
}

const StyledProduct = styled.div`
    width: 100%;
    border: 1px #ffffff71 solid;
    background: #ffffff6f;
    border-radius: 6px;
    position: relative;
    &:hover .order-btn-container, &:focus .order-btn-container {
        opacity: 1;
        animation: cardEnter .3s 1;
    }
    img {
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        width: 100%;
        height: 200px;
    }
    .text-wrapper {
        width: 100%;
        margin: 0 auto;
        .text-container {
            width: 100%;
            margin: 20px auto 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4px;
            a {
                color: #000000;
                font-size: 1em;
                &:hover {
                    text-decoration: underline;
                    text-underline-position: under;
                }
            }
            h3 {
                color: #242424;
                font-size: 12px;
            }
        }
    }
    .order-btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        opacity: 0;
        background: #ffffff55;
        top: 0;
        transition: .2s;
         @media(max-width: 650px){
            display: none;
        }
            #order-btn {
                cursor: pointer;
                background: red;
                width: 70%;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1em;
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
        @keyframes cardEnter {
            from {
                opacity: 0;
                display: none;
                height: 0;
            }
            to {
                display: flex;
                height: 100%;
                opacity: 1;
            }
        }
`;

