import { useState } from "react";

// styled
import styled from "styled-components";

// router
import { Link } from "react-router-dom";

// redux
import { addToCart } from '../redux/actions/cart.js';
import { useDispatch } from 'react-redux';

export default function Product({product, title, price, image, id}) {

    const dispatch = useDispatch();

    const [value, setValue ] = useState(1)

    function handleCart(){
        let num = parseInt(value)
        dispatch(addToCart(product, num))
        window.alert(`${product.title} added`);
    }
   
  return (
    <StyledProduct>
        <Link to={`/order/${id}`}><img src={image} alt="" /></Link>
        <div className="text-wrapper">
            <div className="text-container">
                <Link to={`/order/${id}`}>{title}</Link>
                <h3>${price}</h3>
            </div>
            <div className="button-container">
                <input type="text" min={1} defaultValue={value} onChange={(e) => { setValue(e.target.value); }} />
                <button onClick={()=>{handleCart(product, value)}}>Order</button>
            </div>
        </div>
    </StyledProduct>
  )
}

const StyledProduct = styled.div`
width: 100%;
border: 1px #ffffff71 solid;
background: #ffffff6f;
transition: 0.2s;
opacity: .8;
border-radius: 6px;
    &:hover {
        opacity: 1;
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
            width: 98%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            a {
                color: #000000;
                font-size: 16px;
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
        .button-container {
            display: flex;
            width: 100%;
            justify-content: space-between;
            input {
                height: 30px;
                width: 40px;
                text-align: center;
            }
            button {
                cursor: pointer;
                background: red;
                width: 120px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
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
    }
`;

