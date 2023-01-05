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
            <Link id="order-btn" to={`/order/${id}`}>Order</Link>
        </div>
    </StyledProduct>
  )
}

const StyledProduct = styled.div`
    width: 100%;
    border: 1px #ffffff71 solid;
    background: #ffffff6f;
    transition: 0.2s;
    opacity: .9;
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
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding: 0 4px;
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
        #order-btn {
            cursor: pointer;
            background: red;
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: white;
            border-radius: 0 0 6px 6px;
            transition: 0.2s;
            border: red 1px solid;
            &:hover {
                background: #000000;
                text-decoration: none;
            }
        
        }
    }
`;

