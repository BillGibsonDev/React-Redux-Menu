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

  const [ quantity, setQuantity ] = useState(0)

  useEffect(() => {
    const handleCartValue = () =>{
      let cartQuantity = cart.reduce((sum, cart) => sum + cart.qty, 0);
      setQuantity(cartQuantity);
    }
    handleCartValue();
  }, [cart, quantity])
  
  return (    
    <StyledCart>
      <Link to={"/cart"}>
        {
          quantity === 0
          ?<></>
          :<h6>{quantity}</h6>
        }
        <img src={Cart} alt="Cart" />
      </Link>
    </StyledCart>
  );
}

const StyledCart = styled.div`
  display: flex;
  a {
      position: relative;
      display: block;
      width: 30px;
      height: 30px;
      h6 {
        font-size: .8em;
        left: 45%;
        top: 30%;
        transform: translate(-50%, -50%);
        position: absolute;
        color: #fff;
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