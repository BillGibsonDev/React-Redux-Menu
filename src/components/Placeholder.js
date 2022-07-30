
// styled
import styled from "styled-components"

export default function Placeholder(){
  return (
    <StyledPlaceholder>
    </StyledPlaceholder>
  )
}

const StyledPlaceholder = styled.section`
width: 100%;
height: 241px;
background: #706e6e49;
box-shadow: 4px 4px 4px #ffffff4b;
animation: animate 2s infinite;
transition: 0.2s;
  @keyframes animate {
    0% { background: #706e6e49; }
    50% { background: #9c9a9a47;}
    100% { background: #706e6e49;}
  }
`;
