// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// images
import Cart from '../images/whiteCart.png';

function CartIcon({cart}) {

  return (    
    <StyledCart>
        <Link to={"/cart"}>
            <h6>{cart.length}</h6>
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
      h6 {
          font-size: 20px;
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