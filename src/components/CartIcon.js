import { useState, useEffect } from 'react';

// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// images
import Cart from '../images/whiteCart.png';

function CartIcon({cart}) {

  const [ value, setValue ] = useState(0)

  useEffect(() => {
    function handleCartValue(){
      let num = 0;
      for (let i = 0; i < cart.length; i++) {
        num += cart[i].qty;
      }
      setValue(num)
      }
    handleCartValue();
  }, [cart, value])
  

  return (    
    <StyledCart>
        <Link to={"/cart"}>
            <h6>{value}</h6>
            <img src={Cart} alt="" />
        </Link>
    </StyledCart>
  );
}

const StyledCart = styled.div`
  display: flex;
  a {
      position: relative;
      display: block;
      width: 40px;
      height: 35px;
      @media(max-width: 650px){
        width: 30px;
        height: 30px;
      }
      h6 {
        font-size: 20px;
        left: 45%;
        top: 30%;
        transform: translate(-50%, -50%);
        position: absolute;
        color: #fff;
        @media(max-width: 650px){
          font-size: 12px;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};


export default connect(mapStateToProps)(CartIcon);