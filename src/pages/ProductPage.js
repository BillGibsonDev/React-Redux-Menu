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

  const dispatch = useDispatch();

  function handleCart(){
   dispatch(addToCart(product))
  }

  return (
    <StyledPage>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <button onClick={() => { handleCart(product)}}></button>
        <img src={product.image} alt="" />
    </StyledPage>
  )
}

const StyledPage = styled.section`
`;