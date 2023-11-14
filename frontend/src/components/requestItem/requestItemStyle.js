import styled from "styled-components";

export const Container = styled.div` 
    .blockItem{
        h2{
            padding-bottom: 10px;
          
        }
        display: flex;
        flex-direction: column;
        background: #7D7C7C;
        margin-bottom: 20px;
        width: 880px;
        border-radius: 5px;
        padding: 20px;
        
        
        ${'' /* background: ${(props) => {
      if (props.status === "true") {
        return "#00FF00"; // Green for true
      } else if (props.status === "false") {
        return "#FF0000"; // Red for false
      } else {
        return "#7D7C7C"; // Default color
      } */}

     
      button {
    width: 20%;
    background-color: #030303;
    color: #fff;
    padding: 10px;
    margin-top: 18px;
    border: none;
    border-radius: 25px;
    font-size: 100%;
    cursor: pointer;
    
    
  }
         
    }

    .accepted-status {
  background-color: #00FF00;
  color:#000000; /* or any color you prefer for accepted status */
}

.declined-status {
  background-color: #FF0000; /* or any color you prefer for declined status */
}
    .detailItem{
        display: flex;
    width: 449px;
    justify-content: space-between;
    }
    
`;