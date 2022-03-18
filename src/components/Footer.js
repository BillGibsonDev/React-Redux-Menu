

// images
import Github from '../images/githubRed.png';
import Instagram from '../images/instagramRed.png';
import Twitter from '../images/twitterRed.png';


// styled
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
        <div className="icon-container">
            <a href="https://github.com/DevGibby/React-Redux-Menu" rel="noreferrer" target="_blank"><img src={Github} alt="" /></a>
            <a href="/" target="_blank"><img src={Twitter} alt="" /></a>
            <a href="/" target="_blank"><img src={Instagram} alt="" /></a>
        </div>
        <h2>Via Napoli © 2022</h2>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    min-height: 10vh;
    display: flex;
    margin: 20px auto;
    justify-content: center;
    align-items: center;
    .icon-container {
        display: flex;
        max-width: 200px;
        width: 50%;
        justify-content: space-between;
        img {
            width: 40px;
            height: 40px;
        }
    }
    h2 {
        width: 50%;
        text-align: center;
        color: #bbbbbb;
        font-size: 16px;
    }
`;
