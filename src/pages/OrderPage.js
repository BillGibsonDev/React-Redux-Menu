import { useEffect } from "react";

// styled
import styled from "styled-components"

// components
import Section from "../components/Sections";
import Loader from "../components/Loader";

// redux
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/products.js';
import { getCart } from '../redux/actions/cart.js';
import { connect } from "react-redux";

const OrderPage = ({products}) => {

  const dispatch = useDispatch();

    useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(getProducts());
      dispatch(getCart());
    }, [dispatch])

  return (
    <StyledPage>
      {
        products[18] === undefined ? (
          <Loader />
        ): (
          <>
            <h1>Appetizers</h1>
            <Section products={products} type={products[18].type}/>

            <h1>Sandwiches</h1>
            <Section products={products} type={products[15].type} />

            <h1>Pizzas</h1>
            <Section products={products} type={products[0].type} />

            <h1>Soups</h1>
            <Section products={products} type={products[6].type} />

            <h1>Salads</h1>
            <Section products={products} type={products[9].type} />
          </>
        )
      }
    </StyledPage>
  )
}

const StyledPage = styled.section`
background: #bbbbbb;
border-radius: 12px;
min-height: 60vh;
padding-bottom: 30px;
  h1 {
    display: flex;
    font-size: 30px;
    border-bottom: 1px solid black;
    width: 90%;
    margin: 20px auto;
  }
`;

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};


export default connect(mapStateToProps)(OrderPage);