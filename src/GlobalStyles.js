import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        margin: auto;
        scroll-behavior: smooth;
        width: 60%;
        background: #171e22;
        font-family: 'Merriweather Sans', sans-serif;
        letter-spacing: .5px;
        line-height: 1.5;
        @media (max-width: 1450px){
            font-size: 90%;
        }  
        @media (max-width: 1280px){
            width: 90%;
        } 
        @media (max-width: 700px){
            width: 95%;
            font-size: 80%;
        } 
    }
    button, label, input, textarea{
        font-family: 'Merriweather Sans', sans-serif;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    input  {
        border-radius: 6px;
        border: none;
    }
`;

export default GlobalStyles;