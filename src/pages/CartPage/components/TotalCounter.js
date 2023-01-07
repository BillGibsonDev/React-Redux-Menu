import { useState, useEffect } from 'react';

// styled
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';

function TotalCounter({cart}) {

  const [ total, setTotal ] = useState(0);
  const [ tax, setTax ] = useState(0);

  const NEWJERSEYTAX = .07;

  useEffect(() => {
    const handleTotal = () => {
      let totalBeforeTax = 0;
      totalBeforeTax = cart.reduce((sum, product) => sum + product.product.price * product.qty, 0);
      setTax((totalBeforeTax * NEWJERSEYTAX).toFixed(2));
      setTotal((totalBeforeTax * NEWJERSEYTAX + totalBeforeTax).toFixed(2));
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
  h2 {
    font-size: 1em;
  }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(TotalCounter);