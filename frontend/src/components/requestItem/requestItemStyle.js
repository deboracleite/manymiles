import styled from "styled-components";

export const Container = styled.div`
    .block-information{
        h2{
            padding-bottom: 10px;
            color: #000;
        }
        p{
            color: #000;
        }
        display: flex;
        flex-direction: column;
        background: #fff;
        margin-bottom: 20px;
        width: 880px;
        border-radius: 5px;
        padding: 20px;

    }

    button{ 
        width: 60%;
        background-color: #030303;
        color: #fff;
        padding: 16px;
        margin-top: 18px;
        border: none;
        border-radius: 25px;
        font-size: 100%;
        cursor: pointer;
        margin-left: 5px;
    }

    .group-button{ 
        width: 210px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .detailItem{
        display: flex;
        /* width: 600px; */
        justify-content: space-between;
    }
`;