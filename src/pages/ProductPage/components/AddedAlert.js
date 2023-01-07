import styled from "styled-components"

export const AddedAlert = ({AlertRef, handleCartAlert, message}) => {
  return (
    <StyledAlert ref={AlertRef} onClick={() => { handleCartAlert()}}>
        <div className="alert-container">
            <h1>{message}</h1>
            <button>Okay</button>
        </div>
    </StyledAlert>
  )
}

const StyledAlert = styled.div`
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    text-align: center;
    margin: auto;
    background: #0000003b;
    border-radius: 12px;
    transition: 0.2s;
    .alert-container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding: 50px;
        background: white;
        border-radius: 12px;
        @media(max-width: 650px){
            width: 90%;
        }
        h1 {
            @media(max-width: 650px){
                font-size: 1.5em;
            }
        }
        button {
            margin-top: 20px;
            width: 50%;
            font-size: 1em;
            padding: 6px 0;
            background: #f50404;
            border: none;
            border-radius: 6px;
            color: white;
            cursor: pointer;
        }
    }
`;