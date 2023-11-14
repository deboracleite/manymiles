import { styled } from "styled-components";

export const Container = styled.div`
    width: 90%;
    min-height: 92vh;
    background: #d9d6d6;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 0 auto;
`;

export const Content = styled.div`
    width: 100%;
    height: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;  

export const VehicleInfo = styled.div`
    width: 45%;
    margin-left: 100px;
`

export const VehicleRentalInfo = styled.div`
    width: 100%;
    min-height: 30vh;
    background: #fff;
    color: #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;

    .infoContent{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    p{
        margin-top: 5px;
    }

    button{ 
            width: 80%;
            height: 5vh;
            background-color: #030303;
            color: #fff;
            border: none;
            border-radius: 25px;
            cursor: pointer;
        }
`

export const TotalRentalInfo =  styled.div`
    margin-top: 20px;
    width: 100%;
    min-height: 20vh;
    background: #fff;
    color: #000;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`

export const IframePayment = styled.form`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
`

export const IframePaymentContent = styled.div`
    width: 80%;
    height: 100%;
    color: #000;

    .titlePayment{
        width: 100%;
        min-height: 20vh;
        display: flex;
        justify-content: flex-start;
        align-items: end;
        border-bottom: 1px solid #000;
        padding-bottom: 12px;
    }

    .cardFieldBlock{
        display: flex;
        flex-direction: column;
        padding-left: 5px;
        margin-top: 20px;
        
        input{
            margin-top: 5px;
        }
    }

    .inputHolder{
        width: 100%;
        height: 5vh;
        color: #000;
        border: none;
        border-radius: 5px;
    }

    input::placeholder {
        padding-left: 10px;
    }

    .cardNumberBlock{
        display: flex;
        justify-content: space-between;
    }

    .cardNumber{
        width: 23%;
        height: 5vh;
        color: #000;
        border: none;
        border-radius: 5px;
    }

    .cvvBlock{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: start;
        label{
            width: 30%;
            margin-right: 30px;
        }
       input {
            width: 100%;
        }
    }

    .submitStyle{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: flex-end;
        align-items: end;
    
        button{ 
            width: 25%;
            height: 5vh;
            background-color: #030303;
            color: #fff;
            border: none;
            border-radius: 25px;
            cursor: pointer;
        }
    }
`

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

export const CardInfo = styled.div`
    & + div {
        margin-top: 15px;
    }
    width: 100%;
    background: #fff;
    color: #000;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
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
`

export const RateForm = styled.form`
    width: 100%;
    min-height: 50vh;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    color: #000;
    
    textarea{
        width: 100%;
        background: #fff;
        color: #000;
        border-radius: 10px;
        min-height: 10vh;
        overflow-y: scroll;
        resize: none;
    }

    .enjoyQuestion{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        h3{
            width: 100%;
        }
        div{
            width: 100%;
           margin-top: 15px;
            box-sizing: border-box; 
        }

        label {
            margin-right: 30px;
        }

        input[type="radio"] {
            margin-right: 7px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border: 2px solid black;
            border-radius: 50%;
            outline: none;
            vertical-align: middle;
        }

        input[type="radio"]:checked::before {
            content: '\\2022';
            display: block;
            width: 10px;
            height: 10px;
            margin: 3px;
            border-radius: 50%;
            background-color: black;
        }
       
    }


    .rateQuestion {
        width: 100%;
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h3{
            width: 100%;
        }
        div{
            width: 100%;
           margin-top: 5px;
            box-sizing: border-box; 
        }
        
    }

    .feedbackQuestion{
        width: 100%;
        display: flex;
        margin-top: 20px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        h3{
            width: 100%;
        }

        textarea{
            margin-top: 10px;
        }
    }

    .submitStyle{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: flex-end;
        align-items: end;
    
        button{ 
            width: 15%;
            height: 5vh;
            background-color: #030303;
            color: #fff;
            border: none;
            border-radius: 25px;
            cursor: pointer;
        }
    }
`

