// styled
import styled from "styled-components";

// router
import { Link } from "react-router-dom";

// redux
import { addToCart } from '../redux/actions/cart.js';
import { useDispatch } from 'react-redux';

export default function Product({product, title, price, image, id}) {

    const dispatch = useDispatch();

    function handleCart(){
        dispatch(addToCart(product))
    }
   
  return (
    <StyledProduct>
        <Link to={`/order/${id}`}><img src={image} alt="" /></Link>
        <div className="text-wrapper">
            <Link to={`/order/${id}`}>{title}</Link>
            <h3>${price}</h3>
            <button onClick={()=>{handleCart(product)}}>Add to Cart</button>
        </div>
    </StyledProduct>
  )
}

const StyledProduct = styled.div`
width: 100%;
padding: 10px 0;
    img {
        width: 100%;
        height: 200px;
    }
    .text-wrapper {
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
        button {
            cursor: pointer;
            background: red;
            width: 150px;
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
                text-decoration: none;
            }
        }
    }
`;

