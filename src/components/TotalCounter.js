import { useState, useEffect } from 'react';

// styled
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';

function TotalCounter({cart}) {

  const [ total, setTotal ] = useState(0);
  const [ tax, setTax ] = useState(0);

  useEffect(() => {
    const handleTotal = () => {
      let value = 0;
      for (let i = 0; i < cart.length; i++) {
        value += cart[i].product.price * cart[i].qty;
        value += value * .07;
      }
      setTax((value * .07).toFixed(2))
      setTotal(value.toFixed(2));
    }
  handleTotal();
  }, [cart])
    
  return (    
    <StyledTotal>
      <h2>Tax: <span>${tax}</span></h2>
      <h2>Total: <span>${total}</span></h2>
    </StyledTotal>
  );
}

const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  align-items: flex-end;
  border-top: 1px solid black;
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