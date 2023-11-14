import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    min-height: 92vh;
    background: #d9d6d6;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 0 auto;
    color: #000;
    
`;

export const Content = styled.div`
    margin-top: 30px;
    width: 90%;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
`;

export const HeaderContent = styled.div`
    width: 100%;
   
    min-height: 15vh;
    p{
        margin-top: 10px;
    }
`;

export const BodyContent = styled.div`
    width: 100%;
    display: flex;
`;

export const Carousel = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 40vh;
    }
    .control{
        display: flex;
        justify-content: space-around;
        margin-top: 4%;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15%;
            height: 4vh;
            background-color: #030303;
            color: #fff;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            &:disabled{
                background: gray;
                cursor: not-allowed;
            }
        }
    }
`;

export const RentalInfo = styled.div`
    width: 50%;

    h3{
        border-bottom: 1.2px solid #000;
       
    }
    .vehicleInformation{
        width: 50%;
        display: flex;
        flex-direction: column;

        h3{
            width: 60%;
        }
    }

    .vehicleDetail{
        margin-top: 20px;
        display: flex;

        justify-content: space-around;
    }

    .rentalInformation {
        margin-top: 20px;
        h3{
            width: 30%;
        }
    }

    .rentInformationDetails{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }

    .rentalPrices{

        width: 60%;
        display: flex;
        justify-content: space-between;
    }

    .bookInformation{
        margin-top: 20px;
        h3{
            width: 30%;
        }
    }

    .requestBook{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }

    .date-input{
        width: 60%;
        display: flex;
        justify-content: space-between;
    }

    .price-details{
        margin-top: 20px;
        div{
            width: 60%;
            display: flex;
            justify-content: space-between;
            font-size: 0.9em;
        }

        button{
            margin-top: 10%;
            width: 60%;
            height: 4vh;
            background-color: #030303;
            color: #fff;
            border: none;
            border-radius: 15px;
            cursor: pointer;
        }
    }
`;

