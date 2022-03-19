

// images
import Github from '../images/githubRed.png';
import Instagram from '../images/instagramRed.png';
import Twitter from '../images/twitterRed.png';
import Phone from '../images/phoneRed.png';
import Location from '../images/locationRed.png';

// styled
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
        <div className="contact-container">
            <h2><span><img src={Phone} alt="" /></span>123-456-7890</h2>
            <div className="location-container">
                <h2><span><img src={Location} alt="" /></span>123 Main Street,</h2>
                <h2>Township, NJ 08778</h2>
            </div>
        </div>
        <div className="icon-wrapper">
            <div className="icon-container">
                <a href="https://github.com/DevGibby/React-Redux-Menu" rel="noreferrer" target="_blank"><img src={Github} alt="" /></a>
                <a href="/" target="_blank"><img src={Twitter} alt="" /></a>
                <a href="/" target="_blank"><img src={Instagram} alt="" /></a>
            </div>
            <h2>Via Napoli © 2022</h2>
        </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    min-height: 10vh;
    display: flex;
    margin: 20px auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .contact-container {
        margin: 20px auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            text-align: center;
            color: #bbbbbb;
            font-size: 16px;
        }
        h2 span {
            margin-right: 6px;
        }
        img {
            width: 30px;
            height: 30px;
        }
        .location-container {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #fff;
            h2 {
                margin: 6px;
            }
        }
    }
    .icon-wrapper {
        display: flex;
        max-width: 600px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 450px){
            width: 80%;
            flex-direction: column;
        }
        .icon-container {
            display: flex;
            justify-content: space-between;
            max-width: 600px;
            width: 40%;
            @media (max-width: 450px){
                width: 80%;
            }
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
            @media (max-width: 450px){
                width: 80%;
                margin-top: 20px;
            }
        }
    }
`;
