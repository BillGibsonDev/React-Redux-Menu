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
            <h2><span><img src={Phone} alt="Phone Number is" /></span>123-456-7890</h2>
            <div className="location-container">
                <h2><span><img src={Location} alt="Location is" /></span>123 Main Street,</h2>
                <h2>Township, NJ 08778</h2>
            </div>
        </div>
        <div className="icon-wrapper">
            <div className="icon-container">
                <a href="https://github.com/BillGibsonDev/React-Redux-Menu" rel="noreferrer" target="_blank"><img src={Github} alt="Github Account" /></a>
                <a href="/" target="_blank"><img src={Twitter} alt="Twitter Account" /></a>
                <a href="/" target="_blank"><img src={Instagram} alt="Instagram Account" /></a>
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
            font-size: .8em;
        }
        h2 span {
            margin-right: 3px;
        }
        img {
            width: 25px;
            height: 25px;
            margin-right: 4px;
        }
        .location-container {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #fff;
            h2 {
                margin: 0;
            }
        }
    }
    .icon-wrapper {
        display: flex;
        max-width: 300px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 450px){
            width: 80%;
        }
        .icon-container {
            display: flex;
            justify-content: space-between;
            max-width: 300px;
            width: 40%;
            @media (max-width: 450px){
                width: 50%;
            }
            img {
                width: 30px;
                height: 30px;
            }
        }
        h2 {
            width: 50%;
            text-align: center;
            color: #bbbbbb;
            font-size: .8em;
            @media (max-width: 450px){
                width: 80%;
            }
        }
    }
`;
