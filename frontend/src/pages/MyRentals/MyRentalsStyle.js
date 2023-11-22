import { styled } from "styled-components";

export const Container = styled.div`
    width: 90%;
    min-height: 92vh;
    background: #d9d6d6;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
`;

export const Content = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    img{
        margin-top: 10vh;
    }
`;

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    min-height: 14vh;
    color: #000;

    h1{
        width: inherit;
        font-size: 18px;
    }
`

export const List = styled.ul`
    width: 100%;  
`;

export const Card = styled.li`
    & + li {
        margin-top: 15px;
    }
    width: 100%;
    background: #fff;
    color: #000;
    list-style: none;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    .infoCar{
        width: 40%;
        padding: 20px; 
        box-sizing: border-box; 
        p {
            margin-top: 6px;
        }
    }

    .totalPrice{
        width: 20%;
    }

    .actionBlock{
        width: 40%; 
        display: flex;
        justify-content: center;
        align-items: center;

        button{ 
            & + button{
                margin-left: 5px;
            }
            width: 30%;
            height: 4vh;
            color: #000;
            border: none;
            border-radius: 25px;
            cursor: pointer;
        }
    }

    .pendingButton{
        background-color: #bdecb6;
        &:hover{
            background-color: #a0db9f
        }
    }

    .paidButton {
        opacity: 1; 
        pointer-events: none;
    }
    
`

