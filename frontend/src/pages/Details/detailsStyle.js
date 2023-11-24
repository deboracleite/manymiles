import styled from "styled-components";
import { animated } from 'react-spring';
export const Container = styled.div`
    width: 90%;
    min-height: 92vh;
    background: #d9d6d6;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 0 auto;
    color: #000;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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

export const ContainerRate = styled.div`
  overflow: hidden;
  margin-top: 5vh;
  width: 100%;
  
`;

export const AnimatedCards = styled(animated.div)`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const Card = styled.div`
    
  min-width: 100%;
  /* margin: 10px 10px; */
 
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;


export const CardContent = styled.div`
    display: inline-block;
    
    width: 90%;
    min-height: 15vh;
    padding: 20px 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    display: flex;

`

export const InfoContainer = styled.div`
    width: 20%;
    min-height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`


export const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`;

export const DateRental = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;
export const FeedBack = styled.div`
    width: 80%;
    min-height: 10vh;
    border-radius: 10px;
    border: 1px solid #000;
    overflow-y: scroll;
    p{
        margin: 15px 0px 0px 15px;
    }
`;