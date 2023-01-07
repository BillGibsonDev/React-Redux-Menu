import { useState, useEffect, useRef } from 'react';
import axios from "axios";

// components
import Quantity from './components/Quantity.js';

// styled
import styled from "styled-components";
import * as palette from '../../styled/ThemeVariables.js';

// router
import { useParams } from 'react-router-dom';

// redux
import { addToCart } from '../../redux/actions/cart.js';
import { useDispatch, connect } from 'react-redux';
import { AddedAlert } from './components/AddedAlert.js';

const ProductPage = ({cart}) => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const [ quantity, setQuantity ] = useState(1);
  const [ request, setRequest ] = useState('');
  const [ product, setProduct ] = useState([]);
  const [ message, setMessage ] = useState('');

  const AlertRef = useRef();

  const handleCartAlert = () => {
    const AlertComponent = AlertRef.current;
    if(AlertComponent.style.display === 'block'){ 
      AlertComponent.style.display = 'none';
    } else {
      AlertComponent.style.display = 'block';
      setTimeout(() => {AlertComponent.style.display = 'none'}, 1500);
    }
  }

  const handleCart = () => {
    let cartCheck = cart.find((product) => product.product._id === id);
    if(cartCheck && cartCheck.qty + quantity > 10){
      setMessage('Sorry, items only available in quantities of 10 or less!');
      handleCartAlert();
    } else {
      setMessage(`${product.title} added!`)
      dispatch(addToCart(product, parseInt(quantity), request));
      handleCartAlert(); 
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleProducts = () => {
      axios.get(`https://bills-pizza-palace.onrender.com/menu/${id}`)
      .then(function(response){
        setProduct(response.data);
      })
    }
    handleProducts();
  }, [ id ]);

  return (
    <StyledPage>
      <div className="product-wrapper">
        <img src={product.image} alt={product.title} />
        <div className="text-wrapper">
          <div className="text-container">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam sapiente exercitationem modi, perspiciatis, voluptatibus amet doloribus praesentium aliquam cupiditate temporibus assumenda! Mollitia culpa dignissimos reprehenderit dolorum officiis architecto quia!</p>
          </div>
          <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <div className="request-container">
            <h3>Special Requests</h3>
            <textarea name="request" id="request" onChange={(e)=>{setRequest(e.target.value)}} cols="30" rows="5" placeholder='Example: Please no anchovies!'></textarea>
          </div>
          <button className="order-button" onClick={()=>{ handleCart(product, quantity, request)}}>Order</button>
        </div>
      </div>
      <AddedAlert
        AlertRef={AlertRef}
        handleCartAlert={handleCartAlert}
        message={message}
      />
    </StyledPage>
  )
}

const StyledPage = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  min-height: 80vh;
  position: relative;
  @media(max-width: 650px){
    flex-direction: column;
  }
  .product-wrapper {
    width: 100%;
    margin:  0 auto auto auto;
    display: flex;
    @media(max-width: 650px){
      flex-direction: column;
    }
    img {
      width: 50%;
      max-width: 600px;
      @media(max-width: 650px){
        width: 100%;
        height: 40vh;
      }
    }
    .text-wrapper {
      width: 45%;
      margin: 0 auto;
      margin-left: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 60%;
      @media(max-width: 650px){
        width: 90%;
      }
      .text-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        h2 {
          color: #ffffff;
          font-size: 2em;
        }
        h3 {
          color: #eeeeee;
          font-size: 1.2em;
          margin-bottom: 6px;
        }
        }
        p {
          color: #e2e2e2;
        }
    }
    .request-container {
      width: 100%;
      margin-top: 20px;
      h3 {
        color: #eeeeee;
        font-size: 1em;
        margin-bottom: 2px;
      }
      textarea {
        width: 100%;
        padding: 2px;
        font-size: 1em;;
      }
    }
    .order-button {
      cursor: pointer;
      background:${palette.ACCENTCOLOR};
      width: 60%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1em;
      color: white;
      border-radius: 6px;
      transition: 0.2s;
      border:${palette.ACCENTCOLOR} 1px solid;
      margin-top: 20px;
      &:hover {
        background: #000000;
        text-decoration: none;
      }
      @media(max-width: 650px){
        width: 100%;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(ProductPage);