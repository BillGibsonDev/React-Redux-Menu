// styled
import styled from "styled-components";

export default function CartQuantity({order_id, value, setValue, handleQty}) {
  return (
    <StyledQuantity>
        {
            value < 2 
            ? <button className="inactive-btn">&#x2D;</button>
            : <button onClick={(e) => { setValue(value - 1); handleQty(order_id, value - 1)}}>&#x2D;</button>
        }
        <input type="number" value={value} min={1} max={10} onChange={(e) => { setValue(e.target.value); }} />
        {
            value >= 10 
            ? <button className="inactive-btn">&#x2B;</button>
            : <button onClick={(e) => { setValue(value + 1); handleQty(order_id, value + 1)}}>&#x2B;</button>
        }
    </StyledQuantity>
  )
}

const StyledQuantity = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    margin: 0 60px 0 auto;
    @media(max-width: 650px){
        width: 100%;
    }
    h3 {
        margin-right: auto;
    }
    button {
        font-size: 1em;
        background: none;
        border: 1px solid black;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    input {
        height: 30px;
        width: 40px;
        text-align: center;
        background: none;
    }
    input[type="number"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
    .inactive-btn {
        color: gray;
        border: gray 1px solid;
        cursor:  not-allowed;
    }
`;
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
    .inactive-btn {
        color: gray;
        border: gray 1px solid;
        cursor:  not-allowed;
    }
`;