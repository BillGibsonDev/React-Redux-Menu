import { useState, useEffect } from "react";

// styled
import styled from "styled-components";

// images
import Delete from '../../../images/blackTrash.png';

// components
import CartQuantity from "./CartQuantity.js";

// router
import { Link } from "react-router-dom";

// redux
import { removeFromCart, adjustQty, requestEdit } from '../../../redux/actions/cart.js';
import { useDispatch } from 'react-redux';

export default function CartProduct({cart, title, price, image, order_id, id, qty, index, request}) {

    const dispatch = useDispatch();

    const [ value, setValue ] = useState(qty);
    const [ total, setTotal ] = useState();

    useEffect(() => {
        const handleInput = (cart) => {
            let inputs = document.getElementsByClassName("input")
            for (let i = 0; i < inputs.length; i++){
                inputs[i].defaultValue = cart[i].qty;
            }
        }
        handleInput(cart);
        setTotal((price * qty).toFixed(2))
    }, [price, qty, cart])

    const handleRemoveFromCart = () => {
        const result = window.confirm(`Are you sure you want to remove ${title}?`);
        if(result){
            dispatch(removeFromCart(index));
        }
    }

    const handleQty = (order_id, value) => {
        let num = parseInt(value);
        dispatch(adjustQty(order_id, num));
    }

    const handleEditRequest = (request, order_id) => {
        dispatch(requestEdit(order_id, request))
    }

  return (
    <StyledProduct>
        <Link to={`/order/${id}`}><img src={image} alt="" /></Link>
        <div className="text-wrapper">
            <div className="text-container">
                <Link to={`/order/${id}`}>{title}<span> x {qty}</span></Link>
                <h3 id="total">${total}</h3>
                <div className="request-container">
                    <h3 id="requests">Requests: </h3>
                    {
                        !request 
                        ? <textarea onChange={(e) => { handleEditRequest(e.target.value, order_id)}} name="edit-request" id="edit-request" defaultValue={request} cols="30" rows="2" placeholder={'none'}></textarea>
                        : <textarea onChange={(e) => { handleEditRequest(e.target.value, order_id)}} name="edit-request" id="edit-request" defaultValue={request} cols="30" rows="2"></textarea>
                    }
                </div>
            </div>
            <div className="button-container">
                <CartQuantity
                    value={value}
                    setValue={setValue}
                    handleQty={handleQty}
                    id={id}
                    order_id={order_id}
                />
                <button id="remove" onClick={() => { handleRemoveFromCart(index); }}><img src={Delete} alt=""/></button>
            </div>
        </div> 
    </StyledProduct>
  )
}

const StyledProduct = styled.div`
    width: 90%;
    margin: auto;
    padding: 10px 0;
    display: flex;
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
            .request-container {
                width: 100%;
                grid-area: area3;
                #requests {
                    display: flex;
                    flex-direction: column;
                    margin-top: 6px;
                    width: 100%;
                }
                textarea {
                    font-size: 1em;
                    width: 100%;
                }
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