import { useState, useEffect } from "react";

// styled
import styled from "styled-components";

// images
import Edit from '../../../images/editPencilBlack.png';
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
    const [ isActive, setActive ] = useState(false);
    const [ editRequest, setEditRequest ] = useState(request)

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

    const toggleEdit = () => {
        setActive(!isActive);
    }

    const handleEditRequest = (order_id, request) => {
        dispatch(requestEdit(order_id, request))
    }

  return (
    <StyledProduct>
        <Link to={`/order/${id}`}><img src={image} alt="" /></Link>
        <div className="text-wrapper">
            <div className="text-container">
                <Link to={`/order/${id}`}>{title}<span> x {qty}</span></Link>
                <h3>${total}</h3>
                <h3 id="requests">Requests: 
                    {
                        !request 
                        ? <span>none<button id="edit" onClick={() => { toggleEdit();  }}><img src={Edit} alt=""/></button></span>
                        : <span>{request} <button id="edit" onClick={() => { toggleEdit();  }}><img src={Edit} alt=""/></button></span>
                    }
                </h3>
                <div className="edit-request-container" style={{display: isActive ? "block" : "none"}}>
                    <h3>Edit Request</h3>
                    <textarea onChange={(e) => { setEditRequest(e.target.value)}} name="edit-request" id="edit-request" defaultValue={request} cols="30" rows="5"></textarea>
                    <button onClick={() => { handleEditRequest(order_id, editRequest); toggleEdit(); }}>Update</button>
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
    @media(max-width: 550px){
        flex-direction: column;
        margin-bottom: 20px;
    }
    a img {
        width: 200px;
        height: 150px;
        @media(max-width: 850px){
            width: 150px;
            height: 120px;
        }
    }
    .text-wrapper {
        display: flex;
        width: 70%;
        margin: auto;
        @media(max-width: 850px){
            flex-direction: column;
            width: 100%;
            margin: auto 10px;
        }
        @media(max-width: 550px){
            margin: auto;
        }
        .text-container {
            width: 100%;
            justify-content: space-between;
            @media(max-width: 850px){
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
            a {
                color: #000000;
                font-size: 16px;
                &:hover {
                    text-decoration: underline;
                    text-underline-position: under;
                }
                span {
                    color: #3b3b3b;
                }
            }
            h3 {
                font-size: 14px;
            }
            #requests {
                display: flex;
                flex-direction: column;
                margin-top: 6px;
                span {
                    font-weight: 400;
                    display: flex;
                    align-items: center;
                }
            }
            p {
                font-size: 14px;
            }
            .edit-request-container {
                margin-top: 10px;
            }
        }
        .button-container {
            display: flex;
            height: 100%;
            min-width: 300px;
            margin-left: auto;
        }
        #remove, #edit {
            cursor: pointer;
            background: none;
            border: none;
            img {
                width: 25px;
                height: 25px;
            }
        }
        #edit {
            margin-left: 6px;
        }
    }
`;