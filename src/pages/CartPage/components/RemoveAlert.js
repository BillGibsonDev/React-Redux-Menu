import styled from "styled-components";
import * as palette from '../../../styled/ThemeVariables.js';

export const RemoveAlert = ({RemoveAlertRef, handleCartAlert, title, index, handleRemoveFromCart}) => {
  return (
    <StyledAlert ref={RemoveAlertRef}>
        <div className="alert-container">
            <h1>Are you sure you want to remove {title}?</h1>
            <div className="button-container">
                <button id="yes-btn" onClick={() => { handleRemoveFromCart(index); handleCartAlert()}}>Yes</button>
                <button id="no-btn" onClick={() => { handleCartAlert()}}>No</button>
            </div>
        </div>
    </StyledAlert>
  )
}

const StyledAlert = styled.div`
    display: none;
    position: absolute;
    width: 101%;
    height: 101%;
    z-index: 100;
    text-align: center;
    margin: auto;
    background: #000000;
    border-radius: 12px;
    transition: 0.2s;
    top: -1%;
    left: -1%;
    .alert-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding: 50px;
        background: white;
        border-radius: 12px;
        width: 90%;
        h1 {
            @media(max-width: 650px){
                font-size: 1.5em;
            }
        }
        .button-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            button {
                margin-top: 20px;
                width: 30%;
                font-size: 1em;
                padding: 6px 0;
                background: ${palette.ACCENTCOLOR};
                border: none;
                border-radius: 6px;
                color: white;
                cursor: pointer;
            }
            #yes-btn {
                background: none;
                border: 1px solid #f50404;
                color: black;
            }
        }
    }
`;