// styled
import styled from "styled-components";

export default function Request({request, order_id, handleEditRequest}) {

  return (
    <StyledRequest id="request-container">
        <h3 id="requests">Requests: </h3>
        {
            !request 
            ? <textarea onChange={(e) => { handleEditRequest(e.target.value, order_id)}} name="edit-request" id="edit-request" defaultValue={request} cols="30" rows="2" placeholder={'none'}></textarea>
            : <textarea onChange={(e) => { handleEditRequest(e.target.value, order_id)}} name="edit-request" id="edit-request" defaultValue={request} cols="30" rows="2"></textarea>
        }
    </StyledRequest>
  )
}

const StyledRequest = styled.div`
    width: 100%;
    #requests {
        display: flex;
        flex-direction: column;
        margin-top: 6px;
        width: 100%;
    }
    textarea {
        font-size: 1em;
        width: 100%;
        padding: 2px;
    }
`;