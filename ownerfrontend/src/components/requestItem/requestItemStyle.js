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
    }

    .detailItem{
        display: flex;
    width: 449px;
    justify-content: space-between;
    }
    
    .btnContainer{
        height:"20px";
        margin: 0 auto;
        display: inline
    }
    .btn {
        height:"20px";
        margin: 0 auto;
        display: inline;
        margin-left:20px;
        opacity:.9
    }
`;