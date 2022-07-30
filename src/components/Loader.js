// styled
import styled from "styled-components"

// components
import Placeholder from "./Placeholder";

export default function Loader() {

  return (
    <StyledLoader>
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </StyledLoader>
  )
}

const StyledLoader = styled.section`
  width: 90%;
  min-height: 80vh;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  padding: 20px 0;
  @media (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 615px){
    grid-template-columns: 1fr;
  }
`;
