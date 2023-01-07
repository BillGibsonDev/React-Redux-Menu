import { useState, useEffect, useRef } from "react";

// styled
import styled from "styled-components";

// images
import Delete from '../../../images/blackTrash.png';

// components
import CartQuantity from "./CartQuantity.js";
import Request from "./Request";

// router
import { Link } from "react-router-dom";

// redux
import { removeFromCart, adjustQty, requestEdit } from '../../../redux/actions/cart.js';
import { useDispatch } from 'react-redux';
import { RemoveAlert } from "./RemoveAlert";

export default function CartProduct({title, price, image, order_id, id, qty, index, request}) {

    const dispatch = useDispatch();

    const [ quantity, setQuantity ] = useState(qty);
    const [ total, setTotal ] = useState();

    const RemoveAlertRef = useRef();

    useEffect(() => {
        setTotal((price * qty).toFixed(2));
    }, [price, qty])

    const handleCartAlert = () => {
        const AlertComponent = RemoveAlertRef.current;
        if(AlertComponent.style.display === 'block'){ 
            AlertComponent.style.display = 'none';
        } else {
            AlertComponent.style.display = 'block';
        }
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(index));
    }

    const handleQty = (order_id, quantity) => {
        let adjustedQty = parseInt(quantity);
        dispatch(adjustQty(order_id, adjustedQty));
    }

    const handleEditRequest = (request, order_id) => {
        dispatch(requestEdit(order_id, request));
    }

  return (
    <StyledProduct>
        <Link to={`/order/${id}`}><img src={image} alt={title} /></Link>
        <div className="text-wrapper">
            <div className="text-container">
                <Link to={`/order/${id}`}>{title}<span> x {qty}</span></Link>
                <h3 id="total">${total}</h3>
                <Request
                    order_id={order_id}
                    request={request}
                    handleEditRequest={handleEditRequest}
                />
            </div>
            <div className="button-container">
                <CartQuantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                    handleQty={handleQty}
                    id={id}
                    order_id={order_id}
                />
                <button id="remove" onClick={() => { handleCartAlert(); }}><img src={Delete} alt="Delete From Cart"/></button>
            </div>
        </div>
        <RemoveAlert
            RemoveAlertRef={RemoveAlertRef}
            title={title}
            handleRemoveFromCart={handleRemoveFromCart}
            handleCartAlert={handleCartAlert}
            index={index}
        /> 
    </StyledProduct>
  )
}

const StyledProduct = styled.div`
    width: 90%;
    margin: auto;
    padding: 10px 0;
    display: flex;
    position: relative;
    @media(max-width: 650px){
        flex-direction: column;
        margin-bottom: 20px;
    }
    a img {
        width: 200px;
        height: 150px;
        @media(max-width: 650px){
            width: 100%;
            height: 120px;
            object-fit: cover;
        }
    }
    .text-wrapper {
        display: flex;
        width: 70%;
        margin: auto auto auto 6px;
        @media(max-width: 650px){
            flex-direction: column;
            width: 100%;
            margin: auto;
        }
        .text-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: space-between;
            margin: auto;
            @media(max-width: 650px){
                display: grid;
                width: 100%;
                grid-template-areas: 
                'area1 area2'
                'area3 area3'
                ;
            }
            a {
                color: #000000;
                font-size: 1.2em;
                grid-area: area1;
                &:hover {
                    text-decoration: underline;
                    text-underline-position: under;
                }
                span {
                    color: #3b3b3b;
                    width: 100%;
                }
            }
            h3 {
                font-size: 1em;
            }
            #total {
                @media(max-width: 650px){
                    margin-left: auto;
                    grid-area: area2;
                }
            }
            #request-container {
                width: 100%;
                grid-area: area3;
            }
        }
        .button-container {
            display: flex;
            height: 100%;
            min-width: 200px;
            margin-left: auto;
            @media(max-width: 650px){
                margin-left: 0;
                margin-top: 20px;
            }
        }
        #remove {
            cursor: pointer;
            background: none;
            border: none;
            img {
                width: 25px;
                height: 25px;
            }
        }
    }
`;