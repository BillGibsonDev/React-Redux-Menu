import { useState, useEffect } from 'react';
import axios from "axios";

// styled
import styled from "styled-components";

// router
import { useParams } from 'react-router-dom';

// redux
import { addToCart } from '../redux/actions/cart.js';
import { useDispatch } from 'react-redux';

export default function ProductPage() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const [ value, setValue ] = useState(1)

  function handleCart(){
      let num = parseInt(value)
      dispatch(addToCart(product, num))
  }

  const [ product, setProduct ] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    function handleProducts(){
      axios.get(`https://gibbys-galleria.herokuapp.com/menu/${id}`)
      .then(function(response){
        setProduct(response.data)
      })
    }
    handleProducts();
  }, [ id ]);

  return (
    <StyledPage>
      <img src={product.image} alt="" />
      <div className="text-wrapper">
        <div className="text-container">
          <div className="title-wrapper">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam sapiente exercitationem modi, perspiciatis, voluptatibus amet doloribus praesentium aliquam cupiditate temporibus assumenda! Mollitia culpa dignissimos reprehenderit dolorum officiis architecto quia!</p>
        </div>
        <div className="button-container">
          <input type="text" defaultValue={value} onChange={(e) => { setValue(e.target.value); }} />
          <button onClick={()=>{handleCart(product, value)}}>Order</button>
        </div>
      </div>
    </StyledPage>
  )
}

const StyledPage = styled.div`
width: 100%;
display: flex;
  @media(max-width: 650px){
    flex-direction: column;
  }
  img {
    width: 50%;
    max-width: 600px;
    height: 400px;
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
      @media(max-width: 650px){
        width: 90%;
      }
      .text-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .title-wrapper {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          h2 {
            color: #ffffff;
            font-size: 30px;
          }
            h3 {
            color: #eeeeee;
            font-size: 16px;
          }
        }
        p {
          color: #e2e2e2;
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