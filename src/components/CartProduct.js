import { useState } from "react";

// styled
import styled from "styled-components";

// router
import { Link } from "react-router-dom";

// redux
import { removeFromCart, adjustQty } from '../redux/actions/cart.js';
import { useDispatch } from 'react-redux';

export default function CartProduct({product, title, price, image, id, qty, index}) {

    const dispatch = useDispatch();

    function handleCart(){
        dispatch(removeFromCart(index))
    }

    const [ value, setValue ] = useState(qty)

    function handleQty(){
        dispatch(adjustQty(id, value))
    }
   
  return (
    <StyledProduct>
        <Link to={`/order/${id}`}><img src={image} alt="" /></Link>
        <div className="text-wrapper">
            <div className="text-container">
                <Link to={`/order/${id}`}>{title}</Link>
                <h3>${price * qty}</h3>
            </div>
            <div className="quanity-container">
                <input type="number" min={1} max={10} defaultValue={qty} onChange={(e) => { setValue(e.target.value); }} />
                <button id="update" onClick={() => { handleQty(value) }}>Update</button>
            </div>
            <button id="remove" onClick={() => { handleCart(index) }}>Remove</button>
        </div> 
    </StyledProduct>
  )
}

const StyledProduct = styled.div`
width: 90%;
margin: auto;
padding: 10px 0;
display: flex;
    img {
        width: 200px;
        height: 150px;
    }
    .text-wrapper {
        display: flex;
        width: 70%;
        margin: auto;
        .text-container {
            a {
                color: #000000;
                font-size: 20px;
                &:hover {
                    text-decoration: underline;
                    text-underline-position: under;
                }
            }
            h3 {
                margin: 10px 0;
                font-size: 16px;
            }
        }
        .quanity-container {
            display: flex;
            margin: auto;
            input {
                height: 30px;
                width: 40px;
                text-align: center;
            }
        }

        button {
            cursor: pointer;
            background: red;
            width: 100px;
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
        #update {
            color: black;
            background: white;
        }
        #remove {
            background: black;
            margin: auto;
        }
    }
`;