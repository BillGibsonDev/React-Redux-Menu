
import { useState, useEffect } from 'react';

// styled
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';

function TotalCounter({cart}) {

    const [ total, setTotal ] = useState(0)

    useEffect(() => {
      function handleTotal(){
        let value = 0;
        for (let i = 0; i < cart.length; i++) {
            value += cart[i].product.price * cart[i].qty;
        }
        console.log(value)
        setTotal(value)
        }
        console.log(typeof(cart))
      handleTotal();
    }, [cart])
    
    console.log(cart[0].qty)
  return (    
    <StyledTotal>
        <h2>{total}</h2>
    </StyledTotal>
  );
}

const StyledTotal = styled.div`
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
    }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};


export default connect(mapStateToProps)(TotalCounter);