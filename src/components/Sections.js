// styled
import styled from "styled-components"

// components
import Product from "../components/Product";

// redux
import { connect } from "react-redux";

const Section = ({products, type}) => {
  return (
    <StyledSection>
        {
            products.filter(products => (products.type === `${type}`)).map((product, key) =>{
                return(
                    <Product
                        product={product}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        type={product.type}
                        id={product._id}
                        key={key}
                    />
                )
            })
        }
    </StyledSection>
  )
}

const StyledSection = styled.section`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    @media (max-width: 1000px){
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 615px){
      grid-template-columns: 1fr;
    }
`;

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};


export default connect(mapStateToProps)(Section);