import { styled } from "styled-components";
import { Bar } from 'react-chartjs-2';

export const Container = styled.div`
    width: 90%;
    min-height: 92vh;
    background: #d9d6d6;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: space-between;
`;

export const SummaryInfo = styled.div`
    width: 100%;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: space-around;
`;

export const GraphBar = styled(Bar)`
    background-color: #fff;
    max-width: 50vw;

    max-height: 40vh;
`;
export const TitlePage = styled.h1`
    margin: 3px 0px 10px 0px;
    color: #000;
`

export const InfoBlock = styled.div`
    width: 100%;
    /* min-height: 20vh; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    span{
        width: 40%;
        padding: 5px 0px 5px 0px;
        /* width: 30%; */
        border-radius: 10px;
        background-color: #000;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        h3{
            margin-top: 5px;
        }
    }
`;

export const MetricsContent = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const ListRentals = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 30vh;
    overflow-y: scroll;
   
`;

export const Card = styled.li`
    & {
        margin-top: 25vh;
    }
    & + li {
        margin-top: 15px;
    }
    position: sticky;
    width: 70%;
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
    
`